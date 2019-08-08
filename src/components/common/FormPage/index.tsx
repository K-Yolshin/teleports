import React from 'react';

import Center from '@/components/common/Center';
import Spacer from '@/components/common/Spacer';
import Logo from '@/components/common/Logo';
import Text from '@/components/common/Text';
import Root, {
  Header,
  Footer,
  Column,
  Row,
} from '@/components/common/Page';

/**
 * Properties of the SignInPage.
 */
interface Props {
  /**
   * Base URL of the site.
   */
  baseUrl: string;

  /**
   * Text of the user's agreement.
   */
  agreement?: string;

  /**
   * Nested content of the page.
   */
  children?: React.ReactNode;
}

/**
 * Component of the page which contains a form's card.
 */
const FormPage = (p: Props) => (
  <Root>
    <Header>
      <Column>
        <Logo to={p.baseUrl} />
      </Column>
    </Header>
    <Row isCentred={true}>
      <Spacer height={33} />
      <Center>{p.children}</Center>
      <Spacer height={33} />
    </Row>
    <Footer>
      {p.agreement && (
        <Column width="large" isCentred={true}>
          <Text align="center" size="medium">{p.agreement}</Text>
        </Column>
      )}
    </Footer>
  </Root>
);

export default FormPage;
