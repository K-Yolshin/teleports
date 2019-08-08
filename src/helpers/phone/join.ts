import getWithoutMask from './getWithoutMask';

/**
 * Returns a whole phone number by its parts.
 * @param code A country code of the phone.
 * @param number A number of the phone.
 */
const join = (code: string, number?: string) => number
  ? `${code}${getWithoutMask(number)}`
  : undefined;

export default join;
