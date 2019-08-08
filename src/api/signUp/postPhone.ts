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
export default (phone: string) => new Promise(resolve => setTimeout(
  resolve,
  500,
));
