const isNewJobAd = (item: {
  title: string;
  media: string;
  requirements: string;
  body: string;
}) => {
  return (
    item.title === '' &&
    item.media === '' &&
    item.requirements === '' &&
    item.body === ''
  );
};

const isEditingJobAd = (item: {
  unapproved_title: string;
  unapproved_body: string;
}) => {
  return item.unapproved_title !== '' || item.unapproved_body !== '';
};

const fakeNumToNum = (fakeNum: string) => {
  return Number(fakeNum.replace(/,/g, ''));
};

export { isNewJobAd, isEditingJobAd, fakeNumToNum };
