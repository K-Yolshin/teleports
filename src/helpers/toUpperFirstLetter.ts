/**
 * Returns a string with capitalized first letter.
 * @param value A string.
 */
const toUpperFirstLetter = (value: string) => {
  const head = value.charAt(0).toUpperCase();
  const tail = value.substr(1);
  return `${head}${tail}`;
};

export default toUpperFirstLetter;
