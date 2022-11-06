export const allSpecialty = [
  '座学１',
  '座学２',
  '座学３',
  'マッサージ１',
  'マッサージ２',
  'タッチング１',
  'タッチング２',
  'キス',
  '乳房・乳首',
  '外陰部',
  '内陰部',
  '挿入',
  'コミュニケーションレッスン',
] as const;
type SpecialtyTuple = typeof allSpecialty;
export type Specialty = SpecialtyTuple[number];

export type Schedule = {
  title: string;
  price: number;
  date: Date;
  startAt: Date;
  endAt: Date;
  icon_img_url?: string;
};
