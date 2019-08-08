/**
 * Returns true if the value is a digit value.
 * If length is defined, checking length.
 */
export default (value: string, length?: number[]) => {
  const pattern = /^\d+$/;
  if (value && length) {
    let validLength = false;
    length.forEach((len) => {
      if (value.length === len) validLength = true;
    });
    if (!validLength) return false;
  }
  return value && pattern.test(String(value).toLowerCase());
};
