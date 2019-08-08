import React, { ReactNode } from 'react';

import { toUpperFirstLetter } from '@/helpers';

import Card from '@/components/signIn/common/Card';
import Text from '@/components/common/Text';
import Form, { Item } from '@/components/common/Form';
import Link from '@/components/common/Link';
import Button from '@/components/common/Button';

/**
 * Properties of the ByPhone component.
 */
interface Props {
  /**
   * Title of the card with form.
   */
  title: string;

  /**
   * Localized text of the "by" word.
   */
  byText: string;

  /**
   * Text of the "sign in by phone number" string.
   */
  byPhoneText: string;

  /**
   * Text of the "sign in by email" string.
   */
  byEmailText: string;

  /**
   * Link to page "sign in by email".
   */
  byEmailLink: string;

  /**
   * Text of the submit button.
   */
  submitText: string;

  /**
   * Text of the "dont have account?" string.
   */
  dontHaveAccountText: string;

  /**
   * Text of the "Sign Up" string.
   */
  signUpText: string;

  /**
   * Link to a sign up page.
   */
  signUpLink: string;

  /**
   * Text of the "restore password" string.
   */
  restoreText: string;

  /**
   * Link to restore password's page.
   */
  restoreLink: string;

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
 * Component of the card of signing in by phone number.
 */
const ByPhone = (p: Props) => (
  <Card title={p.title}>
    <Form onSubmit={p.onSubmit}>
      <Item offset="extraSmall">
        <Text>
          {toUpperFirstLetter(p.byText)}
          {' '}{p.byPhoneText}
          {' '}/
          {' '}{p.byText} <Link to={p.byEmailLink}>{p.byEmailText}</Link>
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
      <Item>
        <Text align="center">
          {p.dontHaveAccountText}
          {' '}
          <Link to={p.signUpLink}>{p.signUpText}</Link>
        </Text>
      </Item>
      <Item>
        <Text align="center">
          <Link
            to={p.restoreLink}
            variant="gray"
          >
            {p.restoreText}
          </Link>
        </Text>
      </Item>
    </Form>
  </Card>
);

export default ByPhone;
