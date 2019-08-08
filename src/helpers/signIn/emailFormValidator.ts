/**
 * Validator for Sign In By email
 */
const emailFormValidator = {
  email: {
    error: true,
    validate: (value: string) => /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value),
  },
  password: {
    error: 'Некорректный адрес почты или пароль',
    validate: (value: string) => value !== '',
  },
};

export default emailFormValidator;
