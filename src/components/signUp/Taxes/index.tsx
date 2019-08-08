import React, { PureComponent } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import HorzForm, { Item } from '@/components/common/HorzForm';
import Radio, { Option } from '@/components/common/Radio';
import Box from '@/components/common/Box';

import { taxes } from '@/content/signUp.json';

const {
  withoutNds,
  withNds,
  title,
} = taxes;

/**
 * Submitted value of the Taxes form.
 */
export interface Value {

  /**
   * True if "with nds" has been selected.
   */
  nds: boolean;
}

/**
 * Properties of the Taxes.
 */
interface Props extends WithNamespaces {

  /**
   * Name of the form.
   */
  name?: string;

  /**
   * Handles a submit of the form.
   */
  onSubmit?: (value: Value) => void;

  /**
   * Taxes data from redux store
   */
  taxes?: {
    value: object,
  };
}

/**
 * State of the Taxes.
 */
interface State {

  /**
   * Value of the radio buttons group.
   */
  nds: boolean;
}

/**
 * Component of the Taxes form.
 */
class Taxes extends PureComponent<Props, State> {

  /**
   * @inheritDoc
   */
  constructor(props: Props) {
    super(props);

    const { taxes } = this.props;

    const taxesValue = taxes && taxes.value ? taxes.value : {};

    this.state = {
      nds: true,

      ...taxesValue,
    };
  }

  /**
   * Handles a submit of the form.
   */
  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { nds } = this.state;
    onSubmit && onSubmit({ nds });
  }

  /**
   * Handles a change of the radio buttons.
   */
  handleNdsChange = (value?: any) => {
    this.setState({ nds: value });
  }

  /**
   * @inheritdoc
   */
  render() {
    const { nds } = this.state;
    const { name, t } = this.props;

    return (
      <Box title={t(title)}>
        <HorzForm name={name} onSubmit={this.handleSubmit}>
          <Item title={t(title)} width="small">
            <Radio value={nds} onChange={this.handleNdsChange}>
              <Option value={true}>{t(withNds)}</Option>
              <Option value={false}>{t(withoutNds)}</Option>
            </Radio>
          </Item>
        </HorzForm>
      </Box>
    );
  }
}

export default withNamespaces()(Taxes);
