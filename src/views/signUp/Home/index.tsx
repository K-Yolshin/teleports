import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/signUp/Home';

/**
 * Translated container of the sign-up home page.
 */
const Home = () => (
  <Page baseUrl="/sign-up">
    <Item />
  </Page>
);

export default Home;
