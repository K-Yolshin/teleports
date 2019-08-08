import React, { ReactNode } from 'react';

import FormCard from '@/components/common/FormCard';
import Text from '@/components/common/Text';
import Form, { Item } from '@/components/common/Form';
import Link from '@/components/common/Link';
import Button from '@/components/common/Button';

/**
 * Properties of the ByPhone.
 */
interface Props {
  /**
   * Title of the form.
   */
  title: string;

  /**
   * Text of the "enter" string.
   */
  enterText: string;

  /**
   * Text of the "phone number" string.
   */
  byPhoneText: string;

  /**
   * Text of the "support" string.
   */
  bySupportText: string;

  /**
   * Link to the restore by support page.
   */
  bySupportLink: string;

  /**
   * Text on the submit button.
   */
  submitText: string;

  /**
   * Input of the phone.
   */
  phone: ReactNode;

  /**
   * Handles a submit of the form.
   */
  onSubmit?: () => void;

  /**
   * Handles a reset of the form.
   */
  onCancel?: () => void;
}

/**
 * Component of the form of restore access by phone number.
 * @param p Proprerties of the component.
 */
const ByPhone = (p: Props) => (
  <FormCard title={p.title} closeBtn={true}>
    <Form
      onSubmit={p.onSubmit}
      onCancel={p.onCancel}
    >
      <Item offset="extraSmall">
        <Text>
          {p.enterText}
          {' '}{p.byPhoneText}
          {' '}/
          {' '}<Link to={p.bySupportLink}>{p.bySupportText}</Link>
        </Text>
      </Item>
      <Item offset="extraSmall">{p.phone}</Item>
      <Item>
        <Button
          variant="primary"
          type="submit"
        >
          {p.submitText}
        </Button>
      </Item>
    </Form>
  </FormCard>
);

export default ByPhone;
