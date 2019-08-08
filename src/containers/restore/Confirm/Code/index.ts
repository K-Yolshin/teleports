import create from '@/helpers/containers/create';
import withLocale from '@/helpers/containers/withLocale';
import withInput from '@/helpers/containers/withInput';

import Input from '@/components/common/ConfirmCodeInput';
import content from '@/content/common.json';

import entity from '@/entities/restore/confirm/code';

const { codeText: placeholder } = content;

export default create(
  Input,
  withLocale(() => ({ placeholder })),
  withInput(entity),
);
