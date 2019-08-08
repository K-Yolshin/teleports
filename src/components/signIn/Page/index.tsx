import React, { FC, ReactNode } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import BackButton from '@/components/common/BackButton';
import Container from '@/components/common/Container';
import Title from '@/components/common/Title';
import Logo from '@/components/common/Logo';
import {
  default as Root,
  Header,
  Row,
} from '@/components/common/Page';

import { profiles } from '@/content/signIn.json';

import Section from './Section';

/**
 * Properties of the Page.
 */
interface Props extends WithNamespaces {

  /**
   * URL of the previous page.
   */
  backUrl: string;

  /**
   * Handles a click on the back button.
   */
  onBack?: () => void;

  /**
   * Base URL of the section.
   */
  baseUrl: string;

  /**
   * Content of the page.
   */
  children?: ReactNode;
}

/**
 * Component of the profiles' page.
 */
const Page: FC<Props> = ({
  children,
  backUrl,
  baseUrl,
  onBack,
  t,
}) => (
  <Root>
    <Header hasLine={true}>
      <Logo to={baseUrl} />
    </Header>
    <Row>
      <Container>
        <BackButton to={backUrl} onClick={onBack} />
      </Container>
    </Row>
    <Row>
      <Container>
        <Title>{t(profiles.title)}</Title>
      </Container>
    </Row>
    <Row horzOffset="none">
      <Section>
        <Container>{children}</Container>
      </Section>
    </Row>
  </Root>
);

export default withNamespaces()(Page);
