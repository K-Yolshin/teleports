// @ts-ignore
import msk from 'msk';

import getMask from './getMask';

/**
 * Returns a phone's number with a mask.
 * @param code A country code.
 * @param number A phone's number.
 */
const getWithMask = (code: string, number?: string): string | undefined => {
  if (!number) {
    return;
  }

  const mask = getMask(code);

  const formatted = msk(number, mask);

  return formatted;
};

export default getWithMask;
