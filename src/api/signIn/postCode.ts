const DEMO_CODE = '0123';
const DEMO_TOKEN = 'demo_token';

export const ERROR = 'CODE_IS_NOT_VALID';

interface IForm {
  code: string;
  phone: string;
}

export default (form: IForm) =>
new Promise((resolve, reject) => setTimeout(
  () => {
    const { code }  = form;
    if (code === DEMO_CODE) {
      resolve(DEMO_TOKEN);
      return;
    }

    reject(new Error(ERROR));
  },
  500,
));
