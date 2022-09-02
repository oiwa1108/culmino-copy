import { useState } from 'react';
import { FormEvent } from 'react';
import signup_styles from '../../styles/signup.module.scss';
import {
  birthday_days,
  birthday_months,
  birthday_years,
  fill_with_zero,
} from 'plugins/time';
import { unAuthApi } from 'plugins/axios';
import { useRouter } from 'next/router';
import { get_age, matchPasswordRules } from 'plugins/user';
import BaseButton from '@/components/BaseButton';
import ErrorList from '@/components/ErrorList';
import { Container } from '@mui/material';
import { AuthToken } from '@/types';
import { setAuthTokenToCookies } from 'plugins/auth';

const Signup1 = () => {
  const router = useRouter();

  const [isGirls, setIsGirls] = useState(false);
  const [year, set_year] = useState(birthday_years[0]);
  const [month, set_month] = useState(1);
  const [date, setDate] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([] as string[]);

  const signup = async (e: FormEvent) => {
    e.preventDefault();

    const birthday = `${year}/${fill_with_zero(month)}/${fill_with_zero(date)}`;
    const age = get_age(new Date(birthday));
    if (age < 18) {
      return setErrors(['18才未満の方は登録することはできません。']);
    }

    if (matchPasswordRules(password, setErrors))
      try {
        const res = await unAuthApi.post<AuthToken>('/signup', {
          email,
          password,
          is_girls: isGirls,
          name,
          birthday,
          year,
          month,
          date,
          agent_hash: localStorage.getItem('affiliator_hash') || undefined,
        });
        setAuthTokenToCookies(res.data);
        router.push('/signup/2');
      } catch (err: any) {
        if (err.response.data === 'duplicate.email') {
          setErrors(['そのメールアドレスはすでに使用されています。']);
        } else {
          throw new Error(err);
        }
      }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <ErrorList errors={errors} />
      <form onSubmit={signup}>
        <div className="form-group">
          <label>生年月日</label>
          <div className="form-row">
            <div className="form-group col-4 form-row">
              <div className="col-10">
                <select
                  onChange={(e) => set_year(parseInt(e.target.value))}
                  className="form-control"
                >
                  {birthday_years.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-form-label">年</label>
            </div>
            <div className="form-group col-4 form-row">
              <div className="col-10">
                <select
                  onChange={(e) => set_month(parseInt(e.target.value))}
                  className="form-control"
                >
                  {birthday_months.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-form-label">月</label>
            </div>
            <div className="form-group col-4 form-row">
              <div className="col-10">
                <select
                  onChange={(e) => setDate(parseInt(e.target.value))}
                  className="form-control"
                >
                  {birthday_days.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-form-label">日</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>タイプ</label>
          <div className="form-row">
            <div className="form-group col-6">
              <input
                onChange={() => setIsGirls(false)}
                checked={!isGirls}
                value={0}
                type="radio"
                id="man"
                className="d-none"
              />
              <label
                className={`${
                  !isGirls
                    ? signup_styles.gender_label_checked
                    : signup_styles.gender_label
                } btn btn-block`}
                htmlFor="man"
              >
                ユーザー
              </label>
            </div>
            <div className="form-group col-6">
              <input
                onChange={() => setIsGirls(true)}
                value={1}
                checked={isGirls}
                type="radio"
                id="woman"
                className="d-none"
              />
              <label
                className={`${
                  isGirls
                    ? signup_styles.gender_label_checked
                    : signup_styles.gender_label
                } btn btn-block`}
                htmlFor="woman"
              >
                ガールズ
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>ニックネーム</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="例: 山田花子"
            required
          />
        </div>
        <div className="form-group">
          <label>メールアドレス</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="例: example@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label>パスワード(半角英数字8〜32文字)</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            required
          />
        </div>
        <BaseButton fill fullWidth url="post:/signup" type="submit">
          次へ(メールアドレス認証)
        </BaseButton>
      </form>
    </Container>
  );
};

export default Signup1;
