/**
 * Demo phone number of valid user.
 */
const DEMO_PHONE = '+70123456789';

/**
 * Message of the error of access.
 */
export const ERROR = 'ERROR';

/**
 * Posts a phone number to API and receives an access token or throws an error
 * if phone is not found.
 * @param phone Phone.
 * @throws Access error.
 */

interface IForm {
  phone: string;
}

export default (form: IForm) =>
new Promise((resolve, reject) => setTimeout(
  () => {
    const { phone } = form;

    if (phone !== DEMO_PHONE) {
      reject(new Error(ERROR));
      return;
    }

    resolve();
  },
  500,
));
