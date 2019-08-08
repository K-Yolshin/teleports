import React, { Component, ReactNode, SyntheticEvent } from 'react';

import Card from '@/components/signIn/common/Card';
import Text from '@/components/common/Text';
import Form, { Item } from '@/components/common/Form';
import Button from '@/components/common/Button';
import Link from '@/components/common/Link';

import Actions from './Actions';
import Action from './Action';

/**
 * Properties of the ConfirmCodeForm.
 */
interface Props {
  /**
   * Title of the form.
   */
  title: string;

  /**
   * Value in a seconds before code's resending.
   */
  resend: number;

  /**
   * Text of the "resend before" string.
   */
  resendText: string;

  /**
   * Text of the resend link.
   */
  resendTitle: string;

  /**
   * Text of the "sec." string.
   */
  secText: string;

  /**
   * Text of the back button.
   */
  backText: string;

  /**
   * Text of the submit button.
   */
  submitText: string;

  /**
   * Input of the code.
   */
  code?: ReactNode;

  /**
   * Handler of the submit event.
   */
  onSubmit?: () => void;

  /**
   * Handles of the reset event.
   */
  onCancel?: () => void;

  /**
   * Handles a tick of the timer.
   */
  onTick?: () => void;

  /**
   * Handles a code's resending.
   */
  onResend?: () => void;

  /**
   * Handles a mounting of the component.
   */
  onMount?: () => void;

  /**
   * Reset tick
   */
  doResetTick?: () => void;
}

/**
 * Component of the confirmation of sign in by phone number.
 */
class ConfirmCodeForm extends Component<Props> {

  /**
   * Handles a click on a resend button.
   */
  handleResendClick = (e: SyntheticEvent) => {
    e.preventDefault();

    const { onResend } = this.props;
    onResend && onResend();
  }

  /**
   * Handles a tick of the timer.
   */
  handleTick = () => {
    const { onTick } = this.props;
    onTick && onTick();

    this.timeout = setTimeout(this.handleTick, 1000);
  }

  /**
   * Timeout of the next tick.
   */
  timeout: any = null;

  /**
   * @inheritdoc
   */
  componentDidMount() {
    this.timeout = setTimeout(this.handleTick, 1000);

    const { onMount } = this.props;
    onMount && onMount();
  }

  /**
   * @inheritdoc
   */
  componentWillUnmount() {
    const { doResetTick } = this.props;
    this.timeout && clearTimeout(this.timeout);
    doResetTick && doResetTick();
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      submitText,
      backText,
      resendTitle,
      resendText,
      secText,
      resend,
      onSubmit,
      onCancel,
      title,
      code,
    } = this.props;

    return (
      <Card title={title}>
        <Form
          onSubmit={onSubmit}
          onCancel={onCancel}
        >
          <Item offset="small">
            {code}
          </Item>
          <Item offset="small">
            {resend
              ? (
                <Text
                  color="gray"
                  size="small"
                >
                  {resendText}
                  {' '}
                  {resend}
                  {' '}
                  {secText}
                </Text>
              )
              : (
                <Link
                  onClick={this.handleResendClick}
                  display="block"
                  size="small"
                  to="/"
                >
                  {resendTitle}
                </Link>
              )}
          </Item>
          <Item offset="medium">
            <Actions>
              <Action>
                <Button
                  type="reset"
                  fontSize={18}
                >
                  {backText}
                </Button>
              </Action>
              <Action>
                <Button
                  variant="primary"
                  type="submit"
                  fontSize={18}
                >
                  {submitText}
                </Button>
              </Action>
            </Actions>
          </Item>
        </Form>
      </Card>
    );
  }
}

export default ConfirmCodeForm;
