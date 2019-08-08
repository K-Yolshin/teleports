import React, { FC } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Form from '@/components/signUp/Notifications';
import doSetNotifications from '@/entities/signUp/doSetNotifications';

const Notifications: FC<any> = ({ onSubmit, notifications }) => (
  <Form name="signUp" onSubmit={onSubmit} notifications={notifications}/>
);

export default compose(
  withRouter,

  connect(
    (state: any) => ({
      notifications: state.signUp.notifications,
    }),

    (dispatch: any, { history }: any) => ({
      onSubmit: (values: any) => dispatch(doSetNotifications(values, history)),
    }),
  ),
)(Notifications);
