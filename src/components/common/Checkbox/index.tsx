import React, {
  PureComponent,
  ChangeEvent,
  ReactNode,
} from 'react';

import Label from './Label';
import InputComponent from './InputComponent';
import InputView from './InputView';
import ErrorMessage from './ErrorMessage';
import TextWrapper from './TextWrapper';
import NoticeContainer from './NoticeContainer';
import Notice from '@/components/common/Notice';
import NoticeButton from '@/components/common/NoticeButton';

/**
 * Props of the Checkbox component.
 */
export interface Props {

  /**
   * Checkbox lable content.
   */
  children: ReactNode;

  /**
   * Name of the input element.
   */
  name?: string;

  /**
   * Value of checkbox.
   */
  value?: boolean;

  /**
   * Text in tooltip.
   */
  tooltip?: string;

  /**
   * Markdown text of the notice.
   */
  notice?: string;

  /**
   * Component disabled state.
   * @default false.
   */
  isDisabled?: boolean;

  /**
   * Text of error.
   */
  error?: string;

  /**
   * Checkbox change handler.
   */
  onChange?: (value: boolean, name?: string) => any;
}

/**
 * Component of the checkbox.
 */
class Checkbox extends PureComponent<Props> {

  /**
   * @inheritdoc
   */
  state = { value: undefined };

  /**
   * @inheritDoc
   */
  static getDerivedStateFromProps(props: Props, state: any) {
    const value = props.hasOwnProperty('value')
      ? props.value
      : state.value;

    return { ...state, value };
  }

  /**
   * Input change handler.
   */
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked: value } = e.target;
    this.setState({ value });

    const { onChange, name } = this.props;
    onChange && onChange(value, name);
  }

  /**
   * @inheritdoc
   */
  render() {
    const { value } = this.state;
    const {
      isDisabled = false,
      children,
      tooltip,
      notice,
      error,
    } = this.props;

    const isCheckedView = Boolean(value) && !isDisabled;

    return (
      <React.Fragment>
        <Label title={tooltip} isDisabled={isDisabled}>
          <InputComponent
            onChange={this.handleChange}
            disabled={isDisabled}
            checked={value}
            type="checkbox"
          />
          <InputView checked={isCheckedView} isDisabled={isDisabled} />
          <TextWrapper>
            {children}
            {notice && (
              <NoticeContainer>
                <Notice text={notice} positioning="bottom">
                  <NoticeButton />
                </Notice>
              </NoticeContainer>
            )}
          </TextWrapper>
        </Label>
        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}
      </React.Fragment>
    );
  }
}

export default Checkbox;
