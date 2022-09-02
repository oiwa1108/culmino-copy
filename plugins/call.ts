import { MessageCall } from '@/types';
import { diff_minutes, parse_time } from './time';

const call_time_info_text = (call: MessageCall) => {
  const diff = diff_minutes(call.end_time, call.start_time);
  return `通話時間：${diff}分（${parse_time(call.start_time)}〜${parse_time(
    call.end_time
  )}）`;
};

export { call_time_info_text };
