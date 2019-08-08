import create from '@/helpers/containers/create';
import withLocale from '@/helpers/containers/withLocale';
import withInput from '@/helpers/containers/withInput';
import withProps from '@/helpers/containers/withProps';

import Input from '@/components/signIn/common/Input';

import { passwordText } from '@/content/common.json';
import entity from '@/entities/signIn/byEmail/password';

export default create(
  Input,
  withProps(() => ({ type: 'password' })),
  withLocale(() => ({ placeholder: passwordText })),
  withInput(entity),
);
