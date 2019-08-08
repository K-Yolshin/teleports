import PhoneInput from '@/components/common/PhoneInput';

import withLocale from '@/helpers/containers/withLocale';
import withInput from '@/helpers/containers/withInput';
import create from '@/helpers/containers/create';

import { phone } from '@/entities/restore/bySupport/fields';

import { support } from '@/content/restore.json';

/**
 * Container of the phone's input.
 */
export default create(
  PhoneInput,
  withLocale(() => ({ placeholder: support.fields.phone })),
  withInput(phone),
);
