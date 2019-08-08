import React, { FC } from 'react';

import Page from '@/components/signUp/Page';
import Item from '@/containers/signUp/Tariffs';

const Tariffs: FC = () => (
  <Page
    baseUrl="/sign-up"
    title="Выбор тарифа"
    subtitle="Выберите один из предложенных тарифов и подключите для дальнейшей работы."
    backText="Назад"
    backUrl="/sign-up-info/profile"
  >
    <Item />
  </Page>
);

export default Tariffs;
