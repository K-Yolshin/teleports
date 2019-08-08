import React, { FC } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { loadingText } from '@/content/common.json';

import Root from './Root';
import Text from './Text';

/**
 * Component of the loading mock-up.
 */
const Loading: FC<WithNamespaces> = ({ t }) => (
  <Root>
    <Text>{t(loadingText)}</Text>
  </Root>
);

export default withNamespaces()(Loading);
