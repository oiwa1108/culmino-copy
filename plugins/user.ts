import { NewPhoto, User } from '@/types';
import men_avatar from 'assets/images/men_avatar.png';
import women_avatar from 'assets/images/women_avatar.png';
import { alphabetValues, areas, CLOUDFRONT_URL, numberValues } from './const';

const image_url = (
  user: User,
  photo: string | undefined | NewPhoto,
  size: 'small' | 'large' = 'small',
) => {
  if (photo) {
    if (typeof photo === 'object') {
      if (size === 'small') return photo.small;
      if (size === 'large') return photo.large;
    }
    return `${CLOUDFRONT_URL}/profile/${user.id}/${photo}_${size}.jpg`;
  } else {
    return anoImageUrl(user.gender);
  }
};

const userImageUrl = (
  id: number,
  photo: string,
  size: 'small' | 'large' = 'small',
) => {
  return `${CLOUDFRONT_URL}/profile/${id}/${photo}_${size}.jpg`;
};

const anoImageUrl = (gender: 1 | 0) => {
  if (gender === 0) return men_avatar;
  if (gender === 1) return women_avatar;
  return '';
};

const check_new = (date: string) => {
  const new_date = new Date();
  new_date.setDate(new_date.getDate() - 14);
  const created_at = new Date(date);
  return created_at >= new_date;
};

const check_online = (date: string) => {
  const now = new Date().getTime();
  const last_login = new Date(date.replace(/-/g, '/')).getTime();
  const diff = (now - last_login) / 1000;
  if (diff <= 3600) return 'online';
  if (diff > 3600 && diff <= 86400) return 'day';
  if (diff > 86400) return 'offline';
};

const age_str = (user: User) => {
  return user.is_private_age === true ? '' : `${user.age}歳`;
};

const area_str = (user: User) => {
  return user.area === undefined || user.area === -1 ? '' : areas[user.area];
};

const get_online_status = (user: User) => {
  const date = user.last_login || '';
  const now = new Date().getTime();
  const last_login = new Date(date.replace(/-/g, '/')).getTime();
  const diff = (now - last_login) / 1000;
  if (diff <= 3600) return 'オンライン';
  if (diff <= 86400) return '24時間以内';
  if (diff <= 86400 * 3) return '3日以内';
  if (diff <= 86400 * 7) return '7日以内';
  if (diff > 86400 * 7) return 'オフライン';
};

const get_age = (birthday: Date) => {
  //今日
  const today = new Date();

  //今年の誕生日
  const this_year_birthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate(),
  );

  //年齢
  let age = today.getFullYear() - birthday.getFullYear();

  if (today < this_year_birthday) {
    //今年まだ誕生日が来ていない
    age--;
  }

  return age;
};

const matchPasswordRules = (
  password: string,
  setErrors: React.Dispatch<string[]>,
) => {
  setErrors([]);
  let includesAlphabet = false;
  let includesNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (includesAlphabet && includesNumber) break;
    if (!includesAlphabet) {
      includesAlphabet = alphabetValues.includes(password[i]);
    }
    if (!includesNumber) {
      includesNumber = numberValues.includes(password[i]);
    }
  }
  if (
    !(
      includesAlphabet &&
      includesNumber &&
      password.length >= 8 &&
      password.length <= 32
    )
  ) {
    setErrors(['パスワードは8〜32文字以内の半角英数字で入力してください。']);
    return false;
  }
  return true;
};

export {
  image_url,
  userImageUrl,
  check_new,
  check_online,
  age_str,
  area_str,
  get_online_status,
  get_age,
  anoImageUrl,
  matchPasswordRules,
};
