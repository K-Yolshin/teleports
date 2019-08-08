import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Page, { Header, Footer, Column, Row } from './index';

// Story of the Select.
export default (path: string) => storiesOf(`${path}/Page`, module)
  .addDecorator(story => <div style={{ backgroundColor: 'white' }}>{story()}</div>)
  .add(`
      with three equal columns of header with underline, one large centred column of footer
      and one centerd row of content
    `,
    () => (
      <Page>
        <Header hasLine={true}>
          <Column>{lorem.words(3)}</Column>
          <Column isCentred={true}>{lorem.words(3)}</Column>
          <Column>{lorem.words(3)}</Column>
        </Header>
        <Row isCentred={true}>{lorem.words(128)}</Row>
        <Footer>
          <Column
            isCentred={true}
            width="large"
          >
            <span>{lorem.words(128)}</span>
          </Column>
        </Footer>
      </Page>
    ),
  );
