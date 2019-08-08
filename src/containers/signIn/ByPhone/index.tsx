import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import withContainers from '@/helpers/containers/withContainers';
import withLocale from '@/helpers/containers/withLocale';
import withProps from '@/helpers/containers/withProps';
import create from '@/helpers/containers/create';

import ByPhone from '@/components/signIn/ByPhone';

import doSubmit from '@/entities/signIn/byPhone/doSubmit';

import {
  signIn,
} from '@/content/signIn.json';

import Phone from './Phone';

export default create(
  ByPhone,

  withLocale(() => ({
    title: signIn.byPhone.title,
    byText: signIn.byPhone.byText,
    byPhoneText: signIn.byPhone.byPhoneText,
    byEmailText: signIn.byPhone.byEmailText,
    dontHaveAccountText: signIn.byPhone.dontHaveAccountText,
    signUpText: signIn.byPhone.signUpText,
    restoreText: signIn.byPhone.restoreText,
    submitText: signIn.byPhone.submitText,
  })),

  withRouter,

  withProps(({ match }: any) => {
    const { type } = match.params;

    const restoreLink = '/restore';
    const signInLink = `/sign-in/${type}/by-email`;
    const signUpLink = `/sign-up/${type}`;
    const confirmLink = `/sign-in/${type}/by-phone/confirm`;

    return {
      restoreLink,
      confirmLink,
      signUpLink,
      byEmailLink: signInLink,
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
