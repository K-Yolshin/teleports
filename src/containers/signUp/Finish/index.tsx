import React, { FC } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Message from '@/components/signUp/FinishMessage';
import tariff from '@/entities/signUp/tariff';
import doFinish from '@/entities/signUp/finishForm/doFinish';

/**
 * Container of the FinishMessage.
 */
const Finish: FC<any> = ({
  onClick,
  name,
  free,
}) => (
  <Message
    onClick={onClick}
    name={name}
    free={free}
  />
);

export default compose(
  withRouter,

  connect(
    (state: any) => {
      const item = tariff.selectCurrent(state);
      const name = item.name;
      const free = item.free;

      return {
        name,
        free,
      };
    },

    (dispatch: any, { history }: any) => ({
      onClick: () => dispatch(doFinish(history)),
    }),
  ),
)(Finish);
