import PhoneInput from '@/components/common/PhoneInput';

import withLocale from '@/helpers/containers/withLocale';
import withInput from '@/helpers/containers/withInput';
import create from '@/helpers/containers/create';

import phone from '@/entities/signIn/byPhone/phone';

import { phoneText } from '@/content/common.json';

/**
 * Container of the phone's input.
 */
export default create(
  PhoneInput,
  withLocale(() => ({ placeholder: phoneText })),
  withInput(phone),
);
