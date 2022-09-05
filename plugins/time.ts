import { weeks } from './const';

const parse_month = (month_string: string) => {
  const date = new Date(`${month_string}/1`);
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
};

const parse_date = (
  date_string: string | Date,
  is_day_of_week: boolean = false
) => {
  const date = new Date(date_string);
  const day_of_week = weeks[date.getDay()];
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${
    is_day_of_week === true ? `（${day_of_week}）` : ''
  }`;
};

const fill_with_zero = (number: number) => {
  return `0${number}`.slice(-2);
};

const parse_time = (time: string | Date) => {
  let date: Date;
  if (typeof time === 'string') {
    date = time.includes('T')
      ? new Date(time)
      : new Date(time.replace(/-/g, '/'));
  } else {
    date = new Date(time);
  }
  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} ${fill_with_zero(date.getHours())}:${fill_with_zero(
    date.getMinutes()
  )}`;
};

const format_date_jp = (date: string) => {
  const dt = new Date(date);
  const gengou = dt.toLocaleDateString('ja-JP-u-ca-japanese', {
    year: 'numeric',
  });

  return `${gengou}/${parse_date(date)}`;
};

const birthday_years = [...Array(60).keys()]
  .map((i) => i + 1)
  .map((i) => new Date().getFullYear() - 78 + i);
const birthday_months = [...Array(12).keys()].map((i) => i + 1);
const birthday_days = [...Array(31).keys()].map((i) => i + 1);

const keiji_dates = [...Array(7).keys()].map((i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return {
    key: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    value: `${date.getMonth() + 1}月${date.getDate()}日`,
  };
});

const diff_minutes = (from: string | Date, to: string | Date) => {
  let num = new Date(from).getTime() - new Date(to).getTime();
  const diff = Math.floor(num / (60 * 1000));
  return diff;
};

const diff_minutes_and_seconds = (from: string | Date, to: string | Date) => {
  let num = new Date(from).getTime() - new Date(to).getTime();
  const diff_minutes = Math.floor(num / (60 * 1000));
  const diff_seconds = Math.floor((num % (60 * 1000)) / 1000);
  return { minutes: diff_minutes, seconds: diff_seconds };
};

export {
  parse_month,
  parse_date,
  fill_with_zero,
  parse_time,
  format_date_jp,
  diff_minutes,
  diff_minutes_and_seconds,
  birthday_years,
  birthday_months,
  birthday_days,
  keiji_dates,
};
