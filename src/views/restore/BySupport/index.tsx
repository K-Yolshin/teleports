import React from 'react';

import Page from '@/containers/common/FormPage';
import Item from '@/containers/restore/BySupport';

/**
 * Page of restoring suport access by a phone, email, description.
 */
const ByPhone = () => (
  <Page baseUrl="/restore">
    <Item />
  </Page>
);

export default ByPhone;
