import React, { FC } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Form from '@/components/signUp/Profile';
import doSetProfile from '@/entities/signUp/doSetProfile';

const Profile: FC<any> = ({ onSubmit, profile }) => (
  <Form name="signUp" onSubmit={onSubmit} profile={profile}/>
);

export default compose(
  withRouter,

  connect(
    (state: any) => ({
      profile: state.signUp.profile,
    }),

    (dispatch: any, { history }: any) => ({
      onSubmit: (values: any) => dispatch(doSetProfile(values, history)),
    }),
  ),
)(Profile);
