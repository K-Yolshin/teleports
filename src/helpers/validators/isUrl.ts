/**
 * Returns true if the value is URL.
 */
export default (value: string) => {
// tslint:disable-next-line: max-line-length
  const pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9а-яА-Я]+([\-\.]{1}[a-zA-Z0-9а-яА-Я]+)*\.[a-zA-Zа-яА-Я]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
  return value && pattern.test(String(value).toLowerCase());
};
