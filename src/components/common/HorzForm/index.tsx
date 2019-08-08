import React, {
  SyntheticEvent,
  Component,
  ReactNode,
} from 'react';

import Root from './Root';
import Item from './Item';

/**
 * Component props.
 */
interface Props {

  /**
   * Unique name of the form.
   */
  name?: string;

  /**
   * Nested items.
   */
  children?: ReactNode;

  /**
   * Handles a submit of the form.
   */
  onSubmit?: (name?: string) => void;

  /**
   * Handles a reset of the form.
   */
  onCancel?: (name?: string) => void;
}

/**
 * The horizontal form component.
 */
class HorzForm extends Component<Props> {

  /**
   * Handles a submit of the form.
   */
  handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const { onSubmit, name } = this.props;
    onSubmit && onSubmit(name);
  }

  /**
   * Handles a reset of the form.
   */
  handleReset = (e: SyntheticEvent) => {
    e.preventDefault();

    const { onCancel, name } = this.props;
    onCancel && onCancel(name);
  }

  /**
   * @inheritdoc
   */
  render() {
    const { children, name } = this.props;

    return (
      <Root
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        noValidate={true}
        name={name}
        id={name}
      >
        {children}
      </Root>
    );
  }
}

export default HorzForm;
export { Item };
