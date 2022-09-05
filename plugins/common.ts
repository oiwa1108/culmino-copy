import { NextRouter } from 'next/router';

const random_string = (length = 3) => {
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cl = c.length;
  let r = '';
  for (let i = 0; i < length; i++) {
    r += c[Math.floor(Math.random() * cl)];
  }
  return r;
};

const comma = (number: number) => Intl.NumberFormat().format(number);

const unit = (v: number) => {
  const number = parseInt(
    String(v).substr(0, 3) + String(v).substr(3).replace(/\d/g, '0')
  );
  if (number < 1000) return `${number}`;
  if (number < 1000 ** 2) return `${number / 1000}K`;
  if (number < 1000 ** 3) return `${number / 1000 ** 2}M`;
  if (number < 1000 ** 4) return `${number / 1000 ** 3}B`;
  return '';
};

const empObject = (obj: Object) => Object.keys(obj).length === 0;

const extractNum = (v: string) => {
  if (v === '') return 0;
  const numStr = v.replace(/[^\d]/g, '');
  const num = parseInt(numStr);
  return num;
};

const queryFromRouter = (router: NextRouter) => {
  return queryFromPath(router.asPath);
};

const queryFromPath = (path: string) => {
  if (!path.includes('?')) return '';
  return path.replace(/\S{0,}\?/, '?');
};

const pageTitle = (str: string) => `${str} - GirlsBiz`;

export {
  random_string,
  comma,
  unit,
  empObject,
  extractNum,
  queryFromRouter,
  queryFromPath,
  pageTitle,
};
