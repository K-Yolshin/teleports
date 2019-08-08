import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/signIn/Home';

/**
 * Translated container of the sign-in home page.
 */
const Home = () => (
  <Page baseUrl="/sign-in">
    <Item />
  </Page>
);

export default Home;
