import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import create from '@/helpers/containers/create';
import withContainers from '@/helpers/containers/withContainers';
import withLocale from '@/helpers/containers/withLocale';
import withProps from '@/helpers/containers/withProps';

import Component from '@/components/signUp/ByPhone';
import content from '@/content/signUp.json';
import doSubmit from '@/entities/signUp/byPhone/doSubmit';

import Phone from './Phone';

const {
  title,
  subtitle,
  description,
  phone,
} = content;

export default create(
  Component,

  withLocale(() => ({
    title,
    subtitle,
    description,
    submitText: phone.submit,
  })),

  withRouter,

  withProps(({ match }: any) => {
    const { type } = match.params;

    const confirmLink = `/sign-up/${type}/by-phone/confirm`;

    return {
      confirmLink,
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
