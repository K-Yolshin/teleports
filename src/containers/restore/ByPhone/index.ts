import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import create from '@/helpers/containers/create';
import withContainers from '@/helpers/containers/withContainers';
import withLocale from '@/helpers/containers/withLocale';
import withProps from '@/helpers/containers/withProps';

import Component from '@/components/restore/ByPhone';
import content from '@/content/restore.json';
import doSubmit from '@/entities/restore/byPhone/doSubmit';

import Phone from './Phone';

const {
  title,
  byPhone: { byPhoneText, bySupportText },
  enter: enterText,
  phone,
} = content;

export default create(
  Component,

  withLocale(() => ({
    bySupportText,
    byPhoneText,
    enterText,
    title,
    submitText: phone.submit,
  })),

  withRouter,

  withProps(({ match }: any) => {
    const bySupportLink = '/restore/by-support';
    const confirmLink = '/restore/by-phone/confirm';

    return {
      confirmLink,
      bySupportLink,
    };
  }),

  withContainers(() => ({ phone: Phone })),

  connect(
    null,

    (dispatch: any, { history, confirmLink }: any) => ({
      onSubmit: () => dispatch(doSubmit(history, confirmLink)),
    }),
  ),
);
