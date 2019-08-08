import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import Component from '@/components/signUp/Tariffs';
import Loading from '@/containers/common/Loading';
import selectTariffs from '@/entities/signUp/tariffs/selectTariffs';
import doFetch from '@/entities/signUp/tariffs/doFetch';
import Tariff from '@/entities/signUp/tariffs/Tariff';
import doSetTariff from '@/entities/signUp/doSetTariff';

/**
 * Properties of the Tariffs.
 */
interface Props {

  /**
   * List of the tariffs.
   */
  tariffs?: Tariff[];

  /**
   * Handles of the mounting of the container.
   */
  onMount?: () => void;

  /**
   * Handles a selection of the tariff.
   */
  onSelect?: (id: string) => void;
}

/**
 * Loadable container of the tariff selection.
 */
class Container extends PureComponent<Props> {

  /**
   * @inheritdoc
   */
  componentDidMount() {
    const { onMount } = this.props;
    onMount && onMount();
  }

  /**
   * @inheritdoc
   */
  render() {
    const { tariffs, onSelect } = this.props;

    return tariffs
      ? <Component items={tariffs} onSelect={onSelect} />
      : <Loading />;
  }
}

export default compose(
  withRouter,

  connect(
    (state: any) => ({ tariffs: selectTariffs(state) }),

    (dispatch: any, { history }: any) => ({
      onMount: () => dispatch(doFetch()),
      onSelect: (id: string) => dispatch(doSetTariff(id, history)),
    }),
  ),
)(Container);
