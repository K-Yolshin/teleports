import React, { PureComponent } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import HorzForm, { Item } from '@/components/common/HorzForm';
import Checkbox from '@/components/common/Checkbox';
import Spacer from '@/components/common/Spacer';
import Input from '@/components/common/Input';
import Box from '@/components/common/Box';

import isValid from '@/helpers/email/isValid';

import { notifications } from '@/content/signUp.json';
import {
  emailFormatError,
  emailPlaceholder,
  emptyValueError,
  emailTitle,
} from '@/content/common.json';

const {
  teleports: teleportsTitle,
  customers: customersTitle,
  isSame: isSameText,
} = notifications;

/**
 * Values of the Notifications.
 */
export interface Values {

  /**
   * Email for notifications from site.
   */
  teleports: string;

  /**
   * Email for notifications from customers.
   */
  customers: string;

  /**
   * Same email which in teleports
   */
  isSame: boolean;
}

/**
 * Props of the Notifications.
 */
interface Props extends WithNamespaces {

  /**
   * Name of the form.
   */
  name?: string;

  /**
   * Handles a submit of the form.
   */
  onSubmit?: (values: Values) => void;

  /**
   * Notifications data from redux store
   */
  notifications?: {
    value: object;
  };
}

/**
 * State of the form.
 */
interface State {
  teleports?: string;
  teleportsError?: string;

  customers?: string;
  customersError?: string;

  isSame: boolean;
}

/**
 * Component of the Notifications form.
 */
class Notifications extends PureComponent<Props, State> {

  /**
   * @inheritDoc
   */
  constructor(props: Props) {
    super(props);

    const { notifications } = this.props;

    const notificationsValue = notifications && notifications.value ? notifications.value : {};

    this.state = {
      teleportsError: undefined,
      customersError: undefined,
      teleports: undefined,
      customers: undefined,
      isSame: false,

      ...notificationsValue,
    };
  }

  /**
   * @inheritdoc
   */
  static getDerivedStateFromProps(props: Props, state: State) {
    const { teleports, isSame } = state;
    let { customers } = state;

    if (isSame) {
      customers = teleports;
    }

    return { ...state, customers };
  }

  /**
   * Handles a change of the teleports email.
   */
  handleTeleportsChange = (value?: string) => {
    this.setState({ teleports: value });
  }

  /**
   * Handles a change of the customers email.
   */
  handleCustomersChange = (value?: string) => {
    this.setState({ customers: value });
  }

  /**
   * Handles a change of the is same checkbox.
   */
  handleIsSameChange = (value: boolean) => {
    this.setState({ isSame: value });
  }

  /**
   * Returns an error of the value.
   * @param value Email of this form.
   */
  getError = (value?: string): string|undefined => {
    const { t } = this.props;

    if (!value) {
      return t(emptyValueError);
    }

    if (!isValid(value)) {
      return t(emailFormatError);
    }

    return;
  }

  /**
   * Handles a submit of the form.
   */
  handleSubmit = () => {
    const { teleports, customers, isSame } = this.state;

    const teleportsError = this.getError(teleports);
    const customersError = this.getError(customers);

    this.setState({ teleportsError, customersError });

    if (teleportsError || customersError) {
      return;
    }

    const { onSubmit } = this.props;

    onSubmit && onSubmit({
      isSame,
      teleports: String(teleports),
      customers: String(customers),
    });
  }

  /**
   * @inheritdoc
   */
  render() {
    const { name, t } = this.props;
    const {
      teleports,
      customers,
      teleportsError,
      customersError,
      isSame,
    } = this.state;

    return (
      <>
        <Box title={t(teleportsTitle)}>
          <HorzForm name={name} onSubmit={this.handleSubmit}>
            <Item title={t(emailTitle)} width="normal" isRequired={true}>
              <Input
                placeholder={t(emailPlaceholder)}
                onChange={this.handleTeleportsChange}
                errorDisplay="tooltip"
                error={teleportsError}
                value={teleports}
                type="email"
              />
            </Item>
          </HorzForm>
        </Box>
        <Spacer height={22} />
        <Box title={t(customersTitle)}>
          <HorzForm onSubmit={this.handleSubmit}>
            <Item title={t(emailTitle)} width="normal" isRequired={true}>
              <Input
                placeholder={t(emailPlaceholder)}
                onChange={this.handleCustomersChange}
                errorDisplay="tooltip"
                isDisabled={isSame}
                error={customersError}
                value={customers}
                type="email"
              />
            </Item>
            <Item title={' '} width="auto" offset="small">
              <Checkbox onChange={this.handleIsSameChange} value={isSame}>
                {t(isSameText)}
              </Checkbox>
            </Item>
          </HorzForm>
        </Box>
      </>
    );
  }
}

export default withNamespaces()(Notifications);
