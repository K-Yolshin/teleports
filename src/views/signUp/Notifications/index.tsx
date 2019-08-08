import React, { FC } from 'react';

import Page from '@/components/signUp/Page';
import Main from '@/containers/signUp/Notifications';
import Aside from '@/containers/signUp/Stages';

const Notifications: FC = () => (
  <Page
    title="Добавление компании"
    backText="Назад"
    backUrl="/sign-up-info/company"
    baseUrl="/sign-up-info"
    aside={<Aside />}
  >
    <Main />
  </Page>
);

export default Notifications;
