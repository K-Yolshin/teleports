import masks from './masks';

/**
 * Returns a phone number's mask by specified country code.
 * @param code A country code.
 */
const getMask = (code: string): any => {
  const mask = masks[code];

  if (!mask) {
    throw new Error(`Mask for code '${code}' not found`);
  }

  return mask;
};

export default getMask;
