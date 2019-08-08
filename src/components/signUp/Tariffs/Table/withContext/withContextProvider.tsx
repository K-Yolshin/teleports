import React, { Component } from 'react';
import ActiveColumnContext from './ActiveColumnContext';

class ContextProvider extends Component {
  state = {
    activeColumn: Infinity,
  };

  handleChangeActiveColumn = (activeColumn: number) => {
    this.setState({ activeColumn });
  }

  render() {
    return (
      <ActiveColumnContext.Provider value={this.getContextValue()}>
        {this.props.children}
      </ActiveColumnContext.Provider>
    );
  }

  getContextValue = () => ({
    ...this.state,
    onChangeActiveColumn: this.handleChangeActiveColumn,
  })
}

const withContextProvider = (WrappedComponent: any) => (
  function withContextProvider({ innerRef, ...rest }: any) {
    return (
      <ContextProvider>
        <WrappedComponent ref={innerRef} {...rest} />
      </ContextProvider>
    );
  }
);

export default withContextProvider;
