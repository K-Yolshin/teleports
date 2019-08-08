import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Component from '@/components/signUp/Stages';
import selectStage from '@/entities/signUp/selectStage';

/**
 * Container of the stages of progress.
 */
class Stages extends PureComponent<any> {

  /**
   * @inheritdoc
   */
  render() {
    const { stage } = this.props;
    return <Component stage={stage} form="signUp" />;
  }
}

export default compose(
  connect(
    (state: any) => ({
      stage: selectStage(state),
    }),
  ),
)(Stages);
