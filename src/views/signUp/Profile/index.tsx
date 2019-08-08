import React, { FC } from 'react';

import Page from '@/components/signUp/Page';
import Main from '@/containers/signUp/Profile';
import Aside from '@/containers/signUp/Stages';

const Notifications: FC = () => (
  <Page
    title="Заполнение профиля администратора"
    backText="Назад"
    backUrl="/sign-up-info/taxes"
    baseUrl="/sign-up-info"
    aside={<Aside />}
  >
    <Main />
  </Page>
);

export default Notifications;
