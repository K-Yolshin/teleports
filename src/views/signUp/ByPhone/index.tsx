import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/signUp/ByPhone';

/**
 * Page of sign up access by a phone.
 */
const ByPhone = () => (
  <Page baseUrl="/sign-up">
    <Item />
  </Page>
);

export default ByPhone;
