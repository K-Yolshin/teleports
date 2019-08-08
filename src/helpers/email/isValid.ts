/**
 * Returns true if the value is a valid email.
 */
export default (value?: string) => {
  // tslint:disable-next-line:max-line-length
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value && pattern.test(String(value).toLowerCase());
};
