import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/signIn/ByEmail';

/**
 * Page of the signing in by email.
 */
const ByEmail = () => (
  <Page baseUrl="/sign-in">
    <Item />
  </Page>
);

export default ByEmail;
