import create from '@/helpers/containers/create';
import withLocale from '@/helpers/containers/withLocale';

import Component from '@/components/common/FormPage';
import { agreement } from '@/content/common.json';

/**
 * Container of the layout of the page with a form.
 * @param p Properties.
 */
export default create(
  Component,

  withLocale(({ isWithoutAgreement }: any) => ({
    agreement: isWithoutAgreement ? undefined : agreement,
  })),
);
