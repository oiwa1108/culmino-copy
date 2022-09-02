const photos = ['あり', 'なし'];

const areas = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
];

const start = 130;
const end = 211;
const heights = [...Array(end - start).keys()].map((value) => value + start);

const body_shapes = [
  '非公開',
  'スレンダー',
  '細め',
  '普通',
  '筋肉質',
  'グラマー',
  'ぽっちゃり',
  '太め',
];

const jobs = [
  '非公開',
  '経営者・役員',
  '投資家・起業家',
  '資産家',
  'トレーダー',
  '会社員',
  '公務員',
  '自衛隊',
  '議員',
  '官公庁・公社・団体',
  '秘書・受付',
  '事務員',
  '学生',
  'フリーター',
  '上場企業',
  '外資企業',
  '大手企業',
  'メーカー',
  '商社',
  '金融・保険',
  '不動産',
  '建設',
  '建築士',
  'コンサルティング',
  'IT・WEB',
  '広告',
  'マスコミ・メディア',
  'アナウンサー',
  '芸能・モデル',
  '俳優',
  'アイドル',
  'エンターテインメント',
  'アーティスト',
  'クリエイター',
  'YouTuber',
  '弁護士',
  '公認会計士・税理士',
  'パイロット',
  '客室乗務員',
  '医療',
  '医師',
  '看護師',
  '歯科医師',
  '歯科衛生士・歯科助手',
  '製薬',
  '薬剤師',
  'アパレル・ショップ',
  '教育',
  '飲食',
  '食品',
  '管理栄養士',
  '営業',
  '接客',
  '宿泊',
  '美容',
  '美容師',
  'スポーツ',
  '福祉・介護',
  'マッサージ師',
  '保育士',
  '電力・ガス・エネルギー',
  '交通・物流',
  '製造',
  '化学・研究',
  '農林水産',
  '占い師',
  'フリーランス',
  'その他',
];

const incomes = [
  '非公開',
  '3億円以上',
  '1億円〜3億円',
  '5000万円〜1億円',
  '3000万円〜5000万円',
  '1000万円〜3000万円',
  '800万円〜1000万円',
  '600万円〜800万円',
  '400万円〜600万円',
  '400万円以下',
];

const drinks = ['非公開', '飲む', 'ときどき飲む', '飲まない'];

const cigarettes = [
  '非公開',
  '吸う',
  'ときどき吸う',
  '吸わない',
  '非喫煙者の前では吸わない',
];

const payment_levels = [
  'フリープラン',
  'フリープラン',
  'ベーシックプラン',
  'プレミアムプラン',
];

const element_relation = {
  photo: {
    title: '写真',
    items: photos,
  },
  area: {
    title: '居住地',
    items: areas,
  },
  body_shape: {
    title: '体型',
    items: body_shapes,
  },
  job: {
    title: '職業',
    items: jobs,
  },
  income: {
    title: '年収',
    items: incomes,
  },
  drink: {
    title: 'お酒',
    items: drinks,
  },
  cigarette: {
    title: 'タバコ',
    items: cigarettes,
  },
};

const ages = [...Array(100 - 17).keys()].map((i) => 18 + i);

const paid_amount = {
  30: {
    0: 11000,
    1: 5500,
  },
  90: {
    0: 26800,
    1: 13400,
  },
  180: {
    0: 48800,
    1: 23800,
  },
  360: {
    0: 78800,
    1: 38800,
  },
};

const plan_amount = {
  light: 5500,
  basic: {
    30: 11000,
    90: 26800,
    180: 48800,
    360: 78800,
  },
  premium: 5500,
  instagram: 9900,
};

const meeting_ways = { offline: 'オフライン', online: 'オンライン' };

const CLOUDFRONT_URL = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;
const SENTRY_URL = process.env.NEXT_PUBLIC_SENTRY_URL;

const five_minutes_list = [...Array(12).keys()].map((i) => (i + 1) * 5);
const meeting_minutes_list = [1, 2, 3, 4, ...five_minutes_list];

const weeks = ['日', '月', '火', '水', '木', '金', '土'];

const plan_text = {
  promotion: 'GirlsPromotionプラン',
};

const baseColor = '#c2a136';
const promColor = '#ec88c1';
const emphasisColor = '#e3463d';
const bgBaseColor = (isGirls: boolean) => {
  return isGirls ? '#ede1e8' : '#efefef';
};

const alphabetValues = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberValues = '0123456789';

export {
  areas,
  heights,
  body_shapes,
  jobs,
  incomes,
  drinks,
  cigarettes,
  payment_levels,
  element_relation,
  ages,
  paid_amount,
  meeting_ways,
  CLOUDFRONT_URL,
  SENTRY_URL,
  meeting_minutes_list,
  weeks,
  plan_text,
  plan_amount,
  baseColor,
  promColor,
  emphasisColor,
  bgBaseColor,
  alphabetValues,
  numberValues,
};
