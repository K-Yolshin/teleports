/**
 * Returns true if the value is a valid phone number.
 * @param value A value.
 */
export default (value?: string) => value ? /^\+(7|375|380|374|995)\d{10}$/g.test(value) : false;
