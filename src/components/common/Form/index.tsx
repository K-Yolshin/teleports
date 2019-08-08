import React, {
  SyntheticEvent,
  PureComponent,
  ReactNode,
} from 'react';

import Root from './Root';
import Item from './Item';

/**
 * Properties of the Form.
 */
interface Props {
  /**
   * Handles a submit of the form.
   */
  onSubmit?: (e: SyntheticEvent) => void;

  /**
   * Handles a reset of the form.
   */
  onCancel?: (e: SyntheticEvent) => void;

  /**
   * Nested items.
   */
  children?: ReactNode;
}

/**
 * Component of the form.
 */
class Form extends PureComponent<Props> {

  /**
   * Handles a submit of the form.
   */
  handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit && onSubmit(e);
  }

  /**
   * @inheritdoc
   */
  render() {
    const { children, onCancel } = this.props;

    return (
      <Root
        onSubmit={this.handleSubmit}
        onReset={onCancel}
      >
        {children}
      </Root>
    );
  }
}

export default Form;
export { Item };
