import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import create from '@/helpers/containers/create';
import withContainers from '@/helpers/containers/withContainers';
import withLocale from '@/helpers/containers/withLocale';
import withProps from '@/helpers/containers/withProps';
import withForm from '@/helpers/containers/withForm';

import Component from '@/components/common/ConfirmCodeForm';
import content from '@/content/common.json';

import doResend from '@/entities/signUp/confirm/doResend';
import doSubmit from '@/entities/signUp/confirm/doSubmit';
import doReset from '@/entities/signUp/confirm/doReset';
import doResetTick from '@/entities/signUp/confirm/doResetTick';
import doTick from '@/entities/signUp/confirm/doTick';

import resend from '@/entities/signUp/confirm/resend';

import Code from './Code';

const {
  title,
  resendText,
  resendSec,
  submit,
  cancel,
  resend: resendTitle,
} = content.confirm;

const { select: selectResend } = resend;

export default create(
  Component,

  withLocale(() => ({
    resendTitle,
    resendText,
    title,
    secText: resendSec,
    backText: cancel,
    submitText: submit,
  })),

  withContainers(() => ({ code: Code })),
  withForm(doSubmit),

  withRouter,

  withProps(({ match }: any) => {
    const { type } = match.params;
    const backLink = `/sign-up/${type}/by-phone`;
    const nextLink = '/add-company';
    return { backLink, nextLink };
  }),

  connect(
    (state: any) => ({
      resend: selectResend(state),
    }),

    (dispatch: any, { history, backLink, nextLink }: any) => ({
      onSubmit: (value: any) => dispatch(doSubmit(history, value)),
      onCancel: () => dispatch(doReset(history, backLink)),
      onTick: () => dispatch(doTick()),
      doResetTick: () => dispatch(doResetTick()),
      onResend: () => dispatch(doResend()),
    }),
  ),
);
