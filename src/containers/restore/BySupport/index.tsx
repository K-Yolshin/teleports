import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import withContainers from '@/helpers/containers/withContainers';
import withLocale from '@/helpers/containers/withLocale';
import withProps from '@/helpers/containers/withProps';
import create from '@/helpers/containers/create';

import Component from '@/components/restore/BySupport';

import doSubmit from '@/entities/restore/bySupport/doSubmit';

import {
  title,
  subtitle,
  enter,
  bySupport,
  support,
} from '@/content/restore.json';

import Phone from './Phone';
import Email from './Email';
import Description from './Description';

export default create(
  Component,

  withLocale(() => ({
    title,
    subtitle,
    enterText: enter,
    byPhoneText: bySupport.byPhoneText,
    bySupportText: bySupport.bySupportText,
    phone: support.phone,
    email: support.email,
    description: support.description,
    submitText: support.submit,
  })),

  withRouter,

  withProps(() => {
    const nextLink = '/sign-in';
    const restoreLink = '/restore/by-phone';

    return {
      nextLink,
      byPhoneLink: restoreLink,
    };
  }),

  withContainers(() => ({
    phone: Phone,
    email: Email,
    description: Description,
  })),

  connect(
    null,

    (dispatch: any, { history, nextLink }: any) => ({
      onSubmit: () => dispatch(doSubmit(history, nextLink)),
    }),
  ),
);
