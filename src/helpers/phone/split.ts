import getDefaultCode from './getDefaultCode';
import getCodes from './getCodes';

/**
 * Splits a phone number into country code and number.
 * @param value Whole phone number.
 */
const split = (value?: string): [string, string | undefined] => {
  if (!value) {
    const code = getDefaultCode();
    return [code, undefined];
  }

  const codes = getCodes();

  for (let i = 0; i < codes.length; i += 1) {
    const code = codes[i];
    const start = value.substr(0, code.length);

    if (code !== start) {
      continue;
    }

    const number = value.substr(code.length);
    return [code, number];
  }

  const code = getDefaultCode();
  return [code, undefined];
};

export default split;
