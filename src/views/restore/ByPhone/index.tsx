import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/restore/ByPhone';

/**
 * Page of restoring access by a phone.
 */
const ByPhone = () => (
  <Page baseUrl="/restore">
    <Item />
  </Page>
);

export default ByPhone;
