import React, { ReactNode } from 'react';

import FormCard from '@/components/common/FormCard';
import Text from '@/components/common/Text';
import Form, { Item } from '@/components/common/Form';
import Button from '@/components/common/Button';

/**
 * Properties of the ByPhone component.
 */
interface Props {
  /**
   * Title of the form card with form.
   */
  title: string;

  /**
   * Form subtitle text
   */
  subtitle: string;

  /**
   * Form description text
   */
  description: string;

  /**
   * Text of the submit button.
   */
  submitText: string;

  /**
   * Input of the phone field.
   */
  phone?: ReactNode;

  /**
   * Handles a submit of the form.
   */
  onSubmit?: () => void;

  /**
   * Handles a cancelation of the form.
   */
  onCancel?: () => void;
}

/**
 * Component of the form card of registration in by phone number.
 */
const ByPhone = (p: Props) => (
  <FormCard title={p.title} closeBtn={true}>
    <Form onSubmit={p.onSubmit}>
      <Item>
        <Text align="left">
          {p.subtitle}
        </Text>
      </Item>
      <Item>
        <Text
          align="left"
          color="gray"
        >
          {p.description}
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
