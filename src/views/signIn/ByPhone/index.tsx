import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/signIn/ByPhone';

/**
 * Page of the signing in by email.
 */
const ByPhone = () => (
  <Page baseUrl="/sign-in">
    <Item />
  </Page>
);

export default ByPhone;
