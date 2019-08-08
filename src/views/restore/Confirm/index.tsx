import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/restore/Confirm';

/**
 * Page of the restore in confirm  by phone.
 */
const Confirm = () => (
  <Page baseUrl="/restore">
    <Item />
  </Page>
);

export default Confirm;
