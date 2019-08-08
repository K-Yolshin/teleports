import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import HorzForm, { Item } from '@/components/common/HorzForm';
import Mock from '@/components/common/Mock';

const words = () => lorem.words(2);

export default (path: string) => storiesOf(`${path}/HorzForm`, module)
  .add('with a default width', () => (
    <HorzForm>
      <Item title={words()}>
        <Mock />
      </Item>
    </HorzForm>
  ))
  .add('with a normal width', () => (
    <HorzForm>
      <Item title={words()} width="normal">
        <Mock />
      </Item>
    </HorzForm>
  ))
  .add('with a small width', () => (
    <HorzForm>
      <Item title={words()} width="small">
        <Mock />
      </Item>
    </HorzForm>
  ))
  .add('with an auto width', () => (
    <HorzForm>
      <Item title={words()} width="auto">
        <Mock width={50} />
      </Item>
    </HorzForm>
  ))
  .add('with aside content', () => (
    <HorzForm>
      <Item
        title={words()}
        width="normal"
        aside={<Mock width={50} />}
      >
        <Mock />
      </Item>
    </HorzForm>
  ))
  .add('with helper content', () => (
    <HorzForm>
      <Item
        title={words()}
        width="normal"
        helper={<Mock />}
      >
        <Mock />
      </Item>
    </HorzForm>
  ))
  .add('with tooltip', () => (
    <HorzForm>
      <Item
        title={words()}
        width="normal"
        helper={<Mock />}
        notice={lorem.words(20)}
      >
        <Mock />
      </Item>
    </HorzForm>
  ));
