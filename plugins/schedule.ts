import { Schedule } from '@/types';
import { fill_with_zero } from './time';

const get_schedule_time = (schedule: Schedule) => {
  const str = new Date(schedule.start_time);
  const end = new Date(schedule.start_time);
  end.setMinutes(end.getMinutes() + schedule.minutes);
  return `${fill_with_zero(str.getHours())}:${fill_with_zero(
    str.getMinutes()
  )}~${fill_with_zero(end.getHours())}:${fill_with_zero(end.getMinutes())}`;
};

const parseDate = (schedule: Schedule) => {
  const str = new Date(schedule.start_time);
  return `${str.getFullYear()}/${str.getMonth() + 1}/${str.getDate()}`;
};

const menu_return = (str: string) => (str === 'none' ? 'なし' : str);

const menuDonationRate = (number: number) => `${number * 100}%`;

export { get_schedule_time, menu_return, parseDate, menuDonationRate };
