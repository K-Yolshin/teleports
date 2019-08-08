import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import getIndividuals from '@/api/signUp/getIndividuals';
import getJuridicals from '@/api/signUp/getJuridicals';

import Form from '@/components/signUp/Company';
import doSetCompany from '@/entities/signUp/doSetCompany';

class Company extends PureComponent<any, any> {

  state = { individualOptions: [], juridicalOptions: [] };

  handleIndividualSearch = async (value: string) => {
    const options = await getIndividuals(value);
    this.setState({ individualOptions: options });
  }

  handleJuridicalSearch = async (value: string) => {
    const options = await getJuridicals(value);
    this.setState({ juridicalOptions: options });
  }

  render() {
    const { individualOptions, juridicalOptions } = this.state;
    const { onSubmit, company } = this.props;

    return (
      <Form
        onIndividualSearch={this.handleIndividualSearch}
        onJuridicalSearch={this.handleJuridicalSearch}
        individualOptions={individualOptions}
        juridicalOptions={juridicalOptions}
        onSubmit={onSubmit}
        company={company}
        name="signUp"
      />
    );
  }
}

export default compose(
  withRouter,

  connect(
    (state: any) => ({
      company: state.signUp.company,
    }),

    (dispatch: any, { history }: any) => ({
      onSubmit: (values: any) => dispatch(doSetCompany(values, history)),
    }),
  ),
)(Company);
