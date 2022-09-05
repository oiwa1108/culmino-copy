declare module '*.png';
declare module '*.jpg';
declare module '*.gif';

export declare global {
  interface Window {
    payment: function;
  }
  namespace NodeJS {
    interface ProcessEnv {
      readonly PUBLIC_URL: string;
      readonly NEXT_PUBLIC_ENV: string;
      readonly NEXT_PUBLIC_API_URL: string;
      readonly NEXT_PUBLIC_CLOUDFRONT_URL: string;
      readonly NEXT_PUBLIC_SENTRY_URL: string;
      readonly NEXT_PUBLIC_GMO_API_URL: string;
      readonly NEXT_PUBLIC_GMO_SHOP_ID: string;
    }
  }
  namespace React {
    type AuthFC<P = {}> = FunctionComponent<P & { auth_user: User }>;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      primary: string;
    };
  }
  interface ThemeOptions {
    status?: {
      primary?: string;
    };
  }
}

interface User {
  id: number;
  gender: 0 | 1;
  is_girls: boolean;
  email: string;
  name: string;
  age: number;
  area: number;
  caption: string;
  last_login: string;
  height: number;
  body_shape: number;
  job: number;
  hobby: string;
  dream: string;
  introduction: string;
  evaluation_points: number;
  gf_total_support?: number;
  gfc: number;
  is_favorite: boolean;
  is_block: boolean;
  created_at: string;
  evaluation_incomplete_gf_projects?: GfProject[];
  bank?: UserBank;
  is_ai?: boolean;
  gf_menus: Menu[];
  is_private_age: boolean;
  tel: string;
  birthday: string;
  gfc_receipt_item?: { name: string; however: string };
  is_private_mode: boolean;
  plan_days: 30 | 90 | 180 | 360 | 0;
  is_valid_invitation?: boolean;
  is_cancel_plan: boolean;
  is_cancel_premium: boolean;
  plan_next_billing_date: string;
  premium_next_billing_date: string;
  uuid: string;
  plan: 'free' | 'light' | 'basic' | '';
  is_premium: boolean;
  support_merit: string;
  total_support: number;
  kinds: number[] | null;
  categories: number[] | null;
  main_photo: string;
  sub_photos: string[];
  company_id: number | null;
}

interface Menu {
  id: number;
  title: string;
  gfc: number;
  return: string;
  donation_rate: float;
  kind_id: number;
  is_approved: boolean;
  replace_from: number | null;
}

interface UserBank {
  bank_name: string;
  bank_number: string;
  branch_name: string;
  branch_number: string;
  account_type: string;
  account_number: string;
  account_holder: string;
}

interface UserGfProfile {
  merit: string;
  categories: string;
}

interface Card {
  card_seq: string;
  card_no: string;
}

interface GfcPurchaseHistory {
  id: number;
  coins: number;
  time_limit: string;
  created_at: Date;
}

interface GfProject {
  id: number;
  buyer_id: number;
  seller_id: number;
  buyer?: User;
  seller?: User;
  coins: number;
  title: string;
  meeting_time: string;
  meeting_way: 'offline' | 'online';
  meeting_minutes: number;
  status: 'unapproved' | 'progressing' | 'succeeded' | 'failed';
  pin_code: string | null;
  is_confirmed_pin_code: boolean;
  return: string | null;
  is_confirmed_return: boolean;
  change_request: GfProjectChangeRequest | null;
  finished_meeting_at: string | null;
  finished_at: string | null;
  user: User;
}

interface Project {
  id: number;
  buyer_id: number;
  seller_id: number;
  type: string;
  buyer: User;
  seller: User;
  is_satisfied: boolean;
  finished_meeting_at: string | null;
  finished_at: string | null;
  schedule_menu: Menu;
  schedule: Schedule;
  job_ad_id: number;
  user: User;
  status: string;
  sent_evaluation: boolean;
}

interface GfProjectChangeRequest {
  meeting_time: string;
  meeting_way: 'offline' | 'online';
  meeting_minutes: number;
}

interface GfProjectEvaluation {
  points: number;
}

interface GfProjectApprovalHistory {
  is_approved: boolean;
}

interface Affiliator {
  id: number;
  name: string;
  email: string;
  hash: string;
  bank_name: string;
  bank_number: string;
  branch_name: string;
  branch_number: string;
  account_type: string;
  account_number: string;
  account_holder: string;
  company: string | null;
}

interface Affiliate {
  month?: string;
  free_count?: number;
  free_amount?: number;
  paid_man_count?: number;
  paid_man_amount?: number;
  paid_woman_count?: number;
  paid_woman_amount?: number;
  count: number;
  amount: number;
}

interface InvitationCode {
  code: string;
  time_limit: string;
}

interface NewPhoto {
  small: string;
  large: string;
}

interface Keiji {
  id: number;
  text: string;
  kind_id: number;
  user: User;
  is_approved: boolean;
  created_at: Date;
}

interface Constants {
  home_youtube_hash: string;
}

type FilteredKeys<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

interface Message {
  id: number;
  sender_id: number;
  receiver_id: number;
  type: 'text' | 'image' | 'call';
  body: string;
  is_receiver_readed: boolean;
  created_at: string;
  call?: MessageCall;
}

interface MessageCall {
  id: number;
  start_time: string;
  end_time: string;
  is_video: boolean;
}

interface JobAd {
  id: number;
  user_id: number;
  title: string;
  gfc: number;
  recruit_num: number;
  media: string;
  time_limit: string;
  requirements: string;
  is_visit: boolean;
  is_gifting: boolean;
  body: string;
  applied_num: number;
  applied: boolean;
  editing: boolean;
  is_finished: boolean;
  created_at: string;
  updated_at: string;
  user: UserSimple;
  unapproved_title: string;
  unapproved_body: string;
}

interface Kind {
  id: number;
  title: string;
}

interface Category {
  id: number;
  title: string;
}

interface Schedule {
  id: number;
  menus: Menu[];
  start_time: string;
  minutes: number;
  menu: Menu | null;
  project: GfProject | null;
  user_id: number;
  user: User | null;
}

type ScheduleMonth = { [key: string]: ScheduleDate };
type ScheduleDate = { [key: number]: Schedule[] };

interface Agent {
  id: number;
  email: string;
  name: string;
  bank_name: string;
  bank_number: string;
  branch_name: string;
  branch_number: string;
  account_type: string;
  account_number: string;
  account_holder: string;
  corp_name: string;
  rep_name: string;
  staff_name: string;
  staff_email: string;
  rate: number;
  type: string;
  hash: string;
}

type AuthToken = {
  access_token: string;
  refresh_token: string;
};

type ReceiptInfo = {
  name: string;
  however: string;
};

type PlanPurchaseHistory = {
  id: number;
  plan: 'promotion';
  amount: number;
  created_at: Date;
};

type UserSimple = {
  id: number;
  verified_age: boolean;
  name: string;
  is_girls: boolean;
  uuid: string;
  evaluation_points: number;
  icon_url: string;
  introduction: string;
};

type IndexPromotionRes = null | {
  next_billing_date: string;
  is_cancelled: boolean;
};

export {
  User,
  UserBank,
  UserGfProfile,
  Card,
  GfcPurchaseHistory,
  GfProject,
  Affiliator,
  Affiliate,
  InvitationCode,
  NewPhoto,
  Menu,
  Keiji,
  Constants,
  FilteredKeys,
  Message,
  MessageCall,
  GfProjectChangeRequest,
  JobAd,
  Schedule,
  Kind,
  Category,
  ScheduleMonth,
  ScheduleDate,
  Project,
  Agent,
  AuthToken,
  ReceiptInfo,
  PlanPurchaseHistory,
  UserSimple,
  IndexPromotionRes,
};
