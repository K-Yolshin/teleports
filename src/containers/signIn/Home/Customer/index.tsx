import React from 'react';
import { withNamespaces } from 'react-i18next';

import { Item } from '@/components/common/Home';
import signIn from '@/content/signIn.json';

const { text, tooltip } = signIn.home.customer;
const link = '/sign-in/customer';

/**
 * Container of the links to specific sign in pages.
 */
const Customer = withNamespaces()((p: any) => (
  <Item
    tooltip={p.t(tooltip)}
    to={link}
    isDisabled={true}
  >
    {p.t(text)}
  </Item>
));

export default Customer;
