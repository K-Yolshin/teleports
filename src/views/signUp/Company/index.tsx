import React, { FC } from 'react';

import Page from '@/components/signUp/Page';
import Aside from '@/containers/signUp/Stages';
import Main from '@/containers/signUp/Company';

const Company: FC = () => (
  <Page
    title="Добавление компании"
    backText="Назад"
    backUrl="/sign-up-info/start"
    baseUrl="/sign-up-info"
    aside={<Aside />}
  >
    <Main />
  </Page>
);

export default Company;
