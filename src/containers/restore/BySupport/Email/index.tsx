import create from '@/helpers/containers/create';
import withLocale from '@/helpers/containers/withLocale';
import withInput from '@/helpers/containers/withInput';
import withProps from '@/helpers/containers/withProps';

import Input from '@/components/common/Input';

import { support } from '@/content/restore.json';
import { email } from '@/entities/restore/bySupport/fields';

/**
 * Container of the email's input.
 */
export default create(
  Input,
  withProps(() => ({ type: 'email' })),
  withLocale(() => ({ placeholder: support.fields.email })),
  withInput(email),
);
