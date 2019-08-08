import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/signUp/Confirm';

/**
 * Page of the sign up in by phone.
 */
const Confirm = () => (
  <Page baseUrl="/sign-up">
    <Item />
  </Page>
);

export default Confirm;
