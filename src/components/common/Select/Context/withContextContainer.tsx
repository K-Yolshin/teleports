import React, { Component, FC } from 'react';
import Props from './Props';

/**
 * State interface for the ContextContainer
 */
interface State {
  show: boolean;
}

/**
 * HOC of the ContextContainer
 */
const withContextContainer = (WrappedComponent: FC<Props>) => (
  /**
   * Component of the ContextContainer
   */
  class ContextContainer extends Component<Props> {
    /**
     * @inheritdoc
     */
    state: State = {
      show: false,
    };

    /**
     * Id of the timer of show changing
     */
    showTimerId = 0;

    /**
     * @inheritdoc
     */
    componentDidUpdate(prevProps: Props) {
      if (!prevProps.show && this.props.show) {
        // delayed setting "show" property for opacity animation
        this.showTimerId = setTimeout(() => {
          this.setState({
            show: true,
          });
        });
      }
      if (prevProps.show && !this.props.show) {
        this.setState({
          show: false,
        });
      }
    }

    /**
     * @inheritdoc
     */
    componentWillUnmount() {
      clearTimeout(this.showTimerId);
    }

    /**
     * @inheritdoc
     */
    render() {
      if (!this.props.show) {
        return null;
      }
      return <WrappedComponent {...this.props} show={this.state.show} />;
    }
  }
);

export default withContextContainer;
