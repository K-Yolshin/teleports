import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import create from '@/helpers/containers/create';
import withContainers from '@/helpers/containers/withContainers';
import withLocale from '@/helpers/containers/withLocale';
import withProps from '@/helpers/containers/withProps';

import Component from '@/components/common/ConfirmCodeForm';
import content from '@/content/common.json';

import doResend from '@/entities/signIn/confirm/doResend';
import doSubmit from '@/entities/signIn/confirm/doSubmit';
import doReset from '@/entities/signIn/confirm/doReset';
import doResetTick from '@/entities/signIn/confirm/doResetTick';
import doTick from '@/entities/signIn/confirm/doTick';

import resend from '@/entities/signIn/confirm/resend';

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

  withRouter,

  withProps(({ match }: any) => {
    const { type } = match.params;
    const backLink = `/sign-in/${type}/by-phone`;
    return { backLink };
  }),

  connect(
    (state: any) => ({
      resend: selectResend(state),
    }),

    (dispatch: any, { history, backLink }: any) => ({
      onSubmit: () => dispatch(doSubmit(history)),
      onCancel: () => dispatch(doReset(history, backLink)),
      doResetTick: () => dispatch(doResetTick()),
      onTick: () => dispatch(doTick()),
      onResend: () => dispatch(doResend()),
    }),
  ),
);
