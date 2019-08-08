import React, { FC } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Form from '@/components/signUp/Taxes';
import doSetTaxes from '@/entities/signUp/doSetTaxes';

const Taxes: FC<any> = ({ onSubmit, taxes }) => (
  <Form name="signUp" onSubmit={onSubmit} taxes={taxes} />
);

export default compose(
  withRouter,

  connect(
    (state: any) => ({
      taxes: state.signUp.taxes,
    }),

    (dispatch: any, { history }: any) => ({
      onSubmit: (values: any) => dispatch(doSetTaxes(values, history)),
    }),
  ),
)(Taxes);
