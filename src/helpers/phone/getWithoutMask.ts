/**
 * Returns a phone's number without any mask.
 * @param number A phone's number.
 */
const getWithoutMask = (number?: string) => number
  ? number.replace(/[^0-9]/g, '')
  : number;

export default getWithoutMask;
