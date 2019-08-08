import React from 'react';
import { storiesOf } from '@storybook/react';

import Upload from './index';
import Button from '@/components/signIn/common/Button';

// Story of the Upload.
storiesOf('addCompany/common/Upload', module)
  .add('upload file with button', () => (
    <Upload>
      <Button>Добавить файл</Button>
    </Upload>
  ))
  .add('upload file with simple text', () => (
    <Upload>
      Загрузить файл
    </Upload>
  ));
