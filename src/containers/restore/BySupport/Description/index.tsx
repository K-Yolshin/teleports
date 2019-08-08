import Input from '@/components/common/Input';

import withLocale from '@/helpers/containers/withLocale';
import withInput from '@/helpers/containers/withInput';
import withProps from '@/helpers/containers/withProps';
import create from '@/helpers/containers/create';

import { description } from '@/entities/restore/bySupport/fields';

import { support } from '@/content/restore.json';

/**
 * Container of the description's input.
 */
export default create(
  Input,
  withLocale(() => ({ placeholder: support.fields.description })),
  withInput(description),
  withProps(() => ({ isMultiline: true })),
);
