import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import withProps from './withProps';

export default (createLocale: any) => compose(
  withNamespaces(),

  withProps(({ t, ...props }: any) => {
    const values = createLocale(props);
    const locales = {};

    const keys = Object.keys(values);

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = t(values[key]);
      locales[key] = value;
    }

    return locales;
  }),
);
