import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import withContainers from '@/helpers/containers/withContainers';
import withLocale from '@/helpers/containers/withLocale';
import withProps from '@/helpers/containers/withProps';
import create from '@/helpers/containers/create';

import Component from '@/components/signIn/ByEmail';

import doSubmit from '@/entities/signIn/byEmail/doSubmit';

import {
  signIn,
} from '@/content/signIn.json';

import Password from './Password';
import Email from './Email';
import Checkbox from './isNotRemember/';

export default create(
  Component,

  withLocale(() => ({
    title: signIn.byEmail.title,
    byText: signIn.byEmail.byText,
    byPhoneText: signIn.byEmail.byPhoneText,
    byEmailText: signIn.byEmail.byEmailText,
    dontHaveAccountText: signIn.byEmail.dontHaveAccountText,
    signUpText: signIn.byEmail.signUpText,
    restoreText: signIn.byEmail.restoreText,
    submitText: signIn.byEmail.submitText,
  })),

  withRouter,

  withProps(({ match }: any) => {
    const { type } = match.params;

    const restoreLink = '/restore';
    const signInLink = `/sign-in/${type}/by-phone`;
    const signUpLink = `/sign-up/${type}`;

    return {
      restoreLink,
      signUpLink,
      byPhoneLink: signInLink,
    };
  }),

  withContainers(() => ({
    password: Password,
    email: Email,
    checkbox: Checkbox,
  })),

  connect(
    null,

    (dispatch: any, { history, nextLink }: any) => ({
      onSubmit: () => dispatch(doSubmit(history, nextLink)),
    }),
  ),
);
