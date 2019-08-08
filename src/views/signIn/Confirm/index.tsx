import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/signIn/Confirm';

/**
 * Page of the signing in by email.
 */
const Confirm = () => (
  <Page baseUrl="/sign-in">
    <Item />
  </Page>
);

export default Confirm;
