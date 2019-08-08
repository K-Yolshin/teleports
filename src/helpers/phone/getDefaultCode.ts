import getCodes from './getCodes';

/**
 * Returns a default country code.
 */
const getDefaultCode = (): string => {
  const codes = getCodes();
  return codes[0];
};

export default getDefaultCode;
