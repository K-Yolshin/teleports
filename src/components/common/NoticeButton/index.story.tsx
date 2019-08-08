import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Notice from '@/components/common/Notice';
import NoticeButton from './';

const styles = {
  backgroundColor: 'white',
};

export default (path: string) => storiesOf(`${path}/NoticeButton`, module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add('rendered notice button', () => (
    <NoticeButton />
  ))
  .add('rendered notice button with notice popover', () => (
    <Notice positioning="bottom" content={<p>{lorem.words(20)}</p>}>
      <NoticeButton/>
    </Notice>
  ));
