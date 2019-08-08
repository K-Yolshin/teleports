import createInput from '@/helpers/entities/createInput';

import STORE from './store';

/**
 * Entity of the phone, email, description fields.
 */
const phone = createInput('phone', STORE);
const email = createInput('email', STORE);
const description = createInput('description', STORE);

export {
  phone,
  email,
  description,
};
