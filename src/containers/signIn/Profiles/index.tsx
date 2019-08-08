import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import Component, { Item } from '@/components/signIn/Profiles';
import Loading from '@/containers/common/Loading';
import selectProfiles from '@/entities/signIn/profiles/selectProfiles';
import doFetch from '@/entities/signIn/profiles/doFetch';
import Profile from '@/entities/signIn/profiles/Profile';
import doGotoHome from '@/entities/signIn/doGotoHome';

/**
 * Properties of the Profiles.
 */
interface Props {

  /**
   * True if the profiles is loaded.
   */
  isLoaded?: boolean;

  /**
   * List of the profiles.
   */
  profiles?: Profile[];

  /**
   * Handles of the mounting of the container.
   */
  onMount?: () => void;

  /**
   * Handles a selection of the profile.
   */
  onSelect?: (id: string) => void;
}

/**
 * Loadable container of the profiles selection.
 */
class Container extends PureComponent<Props> {

  /**
   * Handles a click on a profile.
   */
  handleClick = (value: any) => {
    const { onSelect } = this.props;
    onSelect && onSelect(value);
  }

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
    const { profiles } = this.props;

    return profiles
      ? (
        <Component>
          {profiles.map((item: any) => (
            <Item
              onClick={this.handleClick}
              text={item.organization}
              subtitle={item.type}
              image={item.image}
              title={item.name}
              value={item.id}
              key={item.id}
            />
          ))}
        </Component>
      )
      : <Loading />;
  }
}

export default compose(
  withRouter,

  connect(
    (state: any) => ({ profiles: selectProfiles(state) }),

    (dispatch: any, { history }: any) => ({
      onMount: () => dispatch(doFetch()),
      onSelect: () => dispatch(doGotoHome(history)),
    }),
  ),
)(Container);
