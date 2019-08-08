const DEMO_CODE = '0123';
const DEMO_TOKEN = 'demo_token';

export const ERROR = 'SING_UP_CODE_IS_NOT_VALID';

export default (code: any) => new Promise((resolve, reject) => setTimeout(
  () => {
    if (code === DEMO_CODE) {
      resolve(DEMO_TOKEN);
      return;
    }

    reject(new Error(ERROR));
  },
  500,
));
