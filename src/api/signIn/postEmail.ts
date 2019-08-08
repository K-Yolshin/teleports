/**
 * Demo email of a valid user.
 */
const DEMO_EMAIL = 'test@test.ru';

/**
 * Demo password of a valid user.
 */
const DEMO_PASSWORD = DEMO_EMAIL;

/**
 * Demo token of a valid user.
 */
const DEMO_TOKEN = 'demo_token';

/**
 * Name of the error which throws if specified user is not found.
 */
export const ERROR = 'USER_NOT_FOUND';

/**
 * Posts a form to API and receives an token or throws a validation error.
 * @param email E-mail of the user.
 * @param password Password of the user.
 * @param isNotRemember isNotRemember of the user.
 * @return Promise which resolves an access token
 * @throws An error if the user is not found.
 */

interface IForm {
  email: string;
  password: string;
  isNotRemember: string;
}

export default async (form: IForm) =>
  new Promise((resolve, reject) => setTimeout(
    () => {
      if (form.email === DEMO_EMAIL && form.password === DEMO_PASSWORD) {
        resolve(DEMO_TOKEN);
        return;
      }

      reject(new Error(ERROR));
    },
    500,
  ));
