import React, { Component } from 'react';

import ActiveColumnContext, { ContextTypes } from './ActiveColumnContext';

interface ContextConsumerProps {
  column: number;
  activeColumn: number;
  withHandlers?: boolean;
  onChangeActiveColumn: (column: number) => void;
  onMouseEnter?: (...args: any[]) => void;
  onMouseLeave?: (...args: any[]) => void;
  children?: any;
}

class ContextConsumerWrapper extends Component<ContextConsumerProps> {

  handleActivateColumn = (...args: any[]) => {
    const { column } = this.props;

    this.props.onChangeActiveColumn(column);
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(...args);
    }
  }

  handleDisactivateColumn = (...args: any[]) => {
    this.props.onChangeActiveColumn(Infinity);

    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(...args);
    }
  }

  render() {
    const { column, activeColumn, withHandlers, children } = this.props;

    const handlers = !withHandlers ? {} : {
      onMouseEnter: this.handleActivateColumn,
      onMouseLeave: this.handleDisactivateColumn,
    };

    return React.cloneElement(children, {
      isActive: column === activeColumn,
      ...handlers,
    });
  }
}

const withContextConsumer = (withHandlers?: boolean) => (WrappedComponent: any) => {
  return function withContextConsumer(p: any) {
    if (typeof p.column !== 'number') {
      return <WrappedComponent {...p} />;
    }
    return (
      <ActiveColumnContext.Consumer>
        {(value: ContextTypes) => (
            <ContextConsumerWrapper
              column={p.column}
              withHandlers={withHandlers}
              {...value}
            >
              <WrappedComponent {...p} />
            </ContextConsumerWrapper>
        )}
      </ActiveColumnContext.Consumer>
    );
  };
};

export default withContextConsumer;
