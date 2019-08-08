import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import create from '@/helpers/containers/create';
import withContainers from '@/helpers/containers/withContainers';
import withLocale from '@/helpers/containers/withLocale';
import withProps from '@/helpers/containers/withProps';
import withForm from '@/helpers/containers/withForm';

import Component from '@/components/common/ConfirmCodeForm';
import content from '@/content/common.json';

import doResend from '@/entities/restore/confirm/doResend';
import doSubmit from '@/entities/restore/confirm/doSubmit';
import doReset from '@/entities/restore/confirm/doReset';
import doResetTick from '@/entities/restore/confirm/doResetTick';
import doTick from '@/entities/restore/confirm/doTick';

import resend from '@/entities/restore/confirm/resend';

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

  withProps(() => {
    const backLink = '/restore/by-phone';
    const nextLink = '/sign-in';
    return { backLink, nextLink };
  }),

  connect(
    (state: any) => ({
      resend: selectResend(state),
    }),

    (dispatch: any, { history, backLink, nextLink }: any) => ({
      onSubmit: () => dispatch(doSubmit(history, nextLink)),
      onCancel: () => dispatch(doReset(history, backLink)),
      doResetTick: () => dispatch(doResetTick()),
      onTick: () => dispatch(doTick()),
      onResend: () => dispatch(doResend()),
    }),
  ),
);
