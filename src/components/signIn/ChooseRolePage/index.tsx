import React from 'react';

import Page, { Header, Row } from '../common/Page';
import Logo from '../common/Logo';
import ButtonBack from '../common/ButtonBack';
import Title from '../common/Title';
import CardsSection from '../common/CardsSection';
import CardsGrid from '../common/CardsGrid';
import Spacer from '../common/Spacer';

/**
 * Props interface for ChooseRolePage component
 */
interface ChooseRolePageProps {
  /**
   * Array of users
   */
  users: React.ReactNodeArray;
  /**
   * Text of back button
   */
  backText: string;
  /**
   * Text of title
   */
  title: string;
}

/**
 * Component of choose role page
 */
const ChooseRolePage = (p: ChooseRolePageProps) => (
  <Page>
    <Header hasLine={true}>
      <Logo to="/" />
    </Header>
    <Row sidesPadding={40}>
      <ButtonBack>
        {p.backText}
      </ButtonBack>
    </Row>
    <Row isPulledTop={true} sidesPadding={40}>
      <Title>
        {p.title}
      </Title>
    </Row>
    <CardsSection>
      <CardsGrid>
        {p.users}
      </CardsGrid>
    </CardsSection>
    <Spacer height={125} />
  </Page>
);

export default ChooseRolePage;
