import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Notice from './index';

const markdown = `
## ${lorem.words(3)}

${lorem.words(128)}

${lorem.words(128)}
`;

export default (path: string) => storiesOf(`${path}/Notice`, module)
  .add('rendered component', () => (
    <Notice positioning="bottom" content={<div>{lorem.words(128)}</div>}>
      <button>Trigger</button>
    </Notice>
  ))
  .add('with markdown', () => (
    <Notice positioning="bottom" text={markdown}>
      <button>Trigger</button>
    </Notice>
  ));
