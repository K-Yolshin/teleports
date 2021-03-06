import create from '@/helpers/containers/create';
import withLocale from '@/helpers/containers/withLocale';
import withInput from '@/helpers/containers/withInput';

import Input from '@/components/common/PhoneInput';
import { phoneText as placeholder } from '@/content/common.json';
import phone from '@/entities/signUp/byPhone/phone';

/**
 * Container of the phone's field of signUp by phone form.
 */
export default create(
  Input,
  withLocale(() => ({ placeholder })),
  withInput(phone),
);
