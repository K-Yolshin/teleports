import React, { FC } from 'react';

import Page from '@/components/signUp/Page';
import Main from '@/containers/signUp/Taxes';
import Aside from '@/containers/signUp/Stages';

const Taxes: FC = () => (
  <Page
    title="Добавление компании"
    backText="Назад"
    backUrl="/sign-up-info/notifications"
    baseUrl="/sign-up-info"
    aside={<Aside />}
  >
    <Main />
  </Page>
);

export default Taxes;
