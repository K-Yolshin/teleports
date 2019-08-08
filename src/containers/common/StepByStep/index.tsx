import * as React from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

import create from '@/helpers/containers/create';

/**
 * State of the component
 */
interface State {

  /**
   * Visit path array
   */
  visitPath: string[];

  /**
   * Next location if not in order
   */
  nextLocation: null | string;
}

/**
 * Component for respond to in order Route render
 */
class StepByStep extends React.Component<RouteComponentProps, State> {

  /**
   * State of component
   */
  state: State = {

    /**
     * Visit path array
     */
    visitPath: [],

    /**
     * Next location if not in order
     */
    nextLocation: null,
  };

  /**
   * @inheritDoc
   */
  componentDidMount(): void {
    const changedRoute = StepByStep.handleRouteChange(this.props, this.state);

    this.setState({
      ...changedRoute,
    });
  }

  /**
   * @inheritDoc
   */
  static getDerivedStateFromProps(props: any, state: any) {
    return StepByStep.handleRouteChange(props, state);
  }

  /**
   * Handle for change location
   * @param props
   * @param state
   */
  static handleRouteChange = (props: any, state: any): object => {
    const { visitPath } = state;

    const { location, history: { action }, computedMatch: { url } } = props;

    const popAction = action === 'POP';

    const isVisit = StepByStep.isVisitPath(visitPath, location.pathname);

    if (popAction && !isVisit) {
      return {
        visitPath: [],
        nextLocation: url,
      };
    }

    return {
      visitPath: visitPath.includes(location.pathname) ? visitPath : visitPath.concat([location.pathname]),
      nextLocation: null,
    };
  }

  /**
   * Check path to visit
   * @param visitPath visit path array
   * @param pathname
   */
  static isVisitPath = (visitPath: string[], pathname: string): boolean => visitPath.includes(pathname);

  /**
   * @inheritDoc
   */
  render() {
    const { nextLocation } = this.state;

    return nextLocation ?
      <Redirect to={`${nextLocation}`}/> :
      this.props.children;
  }
}

export default create(
  StepByStep,

  withRouter,
);
