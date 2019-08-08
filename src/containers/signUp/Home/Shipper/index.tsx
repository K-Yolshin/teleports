import React from 'react';
import { withNamespaces } from 'react-i18next';

import { Item } from '@/components/common/Home';
import signIn from '@/content/signUp.json';

const { text, tooltip } = signIn.home.shipper;
const link = '/sign-up/shipper';

/**
 * Container of the links to specific sign in pages.
 */
const Shipper = withNamespaces()((p: any) => (
  <Item
    tooltip={p.t(tooltip)}
    to={link}
  >
    {p.t(text)}
  </Item>
));

export default Shipper;
