import React, { ReactNode } from 'react';

import FormCard from '@/components/common/FormCard';
import Text from '@/components/common/Text';
import Form, { Item } from '@/components/common/Form';
import Link from '@/components/common/Link';
import Button from '@/components/common/Button';

/**
 * Properties of the BySupport.
 */
interface Props {
  /**
   * Title of the form.
   */
  title: string;

  /**
   * subtitle of the form.
   */
  subtitle: string;

  /**
   * Text of the "enter" string.
   */
  enterText: string;

  /**
   * Text of the "phone number" string.
   */
  byPhoneText: string;

  /**
   * Link of the restore/by-phone.
   */
  byPhoneLink: string;

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
   * Input of the email.
   */
  email: ReactNode;

  /**
   * Input of the description.
   */
  description: ReactNode;

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
 * Component of the form of restore suppory by phone, email, description.
 * @param p Proprerties of the component.
 */
const BySupport = (p: Props) => (
  <FormCard title={p.title} closeBtn={true}>
    <Form
      onSubmit={p.onSubmit}
      onCancel={p.onCancel}
    >
      <Item offset="extraSmall">
        <Text>
          {p.enterText}
          {' '}<Link to={p.byPhoneLink}>{p.byPhoneText}</Link>
          {' '}/
          {' '}{p.bySupportText}
        </Text>
      </Item>
      <Item>
        <Text align="left" color="gray">
          {p.subtitle}
        </Text>
      </Item>
      <Item offset="extraSmall">{p.phone}</Item>
      <Item offset="extraSmall">{p.email}</Item>
      <Item offset="extraSmall">{p.description}</Item>
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

export default BySupport;
