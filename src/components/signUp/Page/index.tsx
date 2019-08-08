import React, { ReactNode } from 'react';

import Root, { Header, Column, Row } from '@/components/common/Page';
import Logo from '@/components/common/Logo';
import Title from '@/components/common/Title';
import BackButton from '@/components/common/BackButton';
import Container from '@/components/common/Container';

import TitleBox from './TitleBox';
import BackBox from './BackBox';
import ContentBox from './ContentBox';
import ContentItem from './ContentItem';

/**
 * Properties of the page.
 */
interface Props {
  /**
   * Base URL of the section.
   */
  baseUrl: string;

  /**
   * Title of the page.
   */
  title?: string;

  /**
   * Subtitle of the page.
   */
  subtitle?: string;

  /**
   * Link to the previous page.
   */
  backUrl?: string;

  /**
   * Handles a click on the back button.
   */
  onBack?: () => void;

  /**
   * Text of the back button.
   */
  backText: string;

  /**
   * Content of the page.
   */
  children?: ReactNode;

  /**
   * Aside content of the page.
   */
  aside?: ReactNode;
}

/**
 * Component of the sign-up page.
 * @param p Properties.
 */
const Page = (p: Props) => (
  <Root>
    <Header hasLine={true}>
      <Column>
        <Logo to={p.baseUrl} />
      </Column>
    </Header>
    <Row vertOffset="none">
      <Container>
        <TitleBox>
          <Title aside={p.subtitle}>{p.title}</Title>
        </TitleBox>
      </Container>
    </Row>
    <Row vertOffset="none">
      <Container>
        <BackBox>
          <BackButton
            onClick={p.onBack}
            to={p.backUrl}
          >
            {p.backText}
          </BackButton>
        </BackBox>
      </Container>
    </Row>
    <Row vertOffset="none">
      <Container>
        {p.aside
          ? (
            <ContentBox hasAside={true}>
              <ContentItem>{p.children}</ContentItem>
              <ContentItem isAside={true}>{p.aside}</ContentItem>
            </ContentBox>
          )
          : <ContentBox>{p.children}</ContentBox>
        }
      </Container>
    </Row>
  </Root>
);

export default Page;
