export const ERROR = 'RESTORE_POST_PHONE_ERROR';

export default (form: any) => new Promise(resolve => setTimeout(
  () => resolve('success'),
  500,
));
