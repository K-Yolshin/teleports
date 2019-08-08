import React, { Component } from 'react';

import Label from './Label';
import InputComponent from './InputComponent';
import InputView from './InputView';
import ErrorMessage from './ErrorMessage';

/**
 * Props of the Checkbox component.
 */
interface CheckboxProps {
  /**
   * Checkbox lable content.
   */
  children: string | React.ReactNode;
  /**
   * Value of checkbox.
   */
  value: boolean;
  /**
   * Text in tooltip.
   */
  tooltip?: string;
  /**
   * Text of error.
   */
  error?: string;
  /**
   * Checkbox change handler.
   */
  onChange: (value: boolean) => any;
}

/**
 * Component of the checkbox.
 */
class Checkbox extends Component<CheckboxProps> {
  /**
   * Input change handler.
   */
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    this.props.onChange(checked);
  }

  /**
   * @inheritdoc
   */
  render() {
    const { tooltip, value, children, error } = this.props;

    return (
      <React.Fragment>
        <Label title={tooltip}>
          <InputComponent
            type="checkbox"
            checked={value}
            onChange={this.handleChange}
          />
          <InputView checked={value} />
          {children}
        </Label>
        {!!error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}
      </React.Fragment>
    );
  }
}

export default Checkbox;
