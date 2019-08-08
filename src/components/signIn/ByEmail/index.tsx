import React, { ReactNode } from 'react';

import { toUpperFirstLetter } from '@/helpers';

import Card from '@/components/signIn/common/Card';
import Text from '@/components/common/Text';
import Form, { Item } from '@/components/common/Form';
import Link from '@/components/common/Link';
import Button from '@/components/common/Button';

/**
 * Properties of the ByEmail.
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
   * Link to the "sign in by phone" page.
   */
  byPhoneLink: string;

  /**
   * Text of the "sign in by phone" string.
   */
  byEmailText: string;

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
   * Input of the email.
   */
  email: ReactNode;

  /**
   * Input of the password.
   */
  password: ReactNode;

  /**
   * Checkbox of the is remeber form
   */
  checkbox?: ReactNode;

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
 * Component of the card of signing by email.
 * @param p Properties.
 */
const ByEmail = (p: Props) => (
  <Card title={p.title}>
    <Form
      onSubmit={p.onSubmit}
      onCancel={p.onCancel}
    >
      <Item offset="extraSmall">
        <Text>
          {toUpperFirstLetter(p.byText)}
          {' '}<Link to={p.byPhoneLink}>{p.byPhoneText}</Link>
          {' '}/
          {' '}{p.byText} {p.byEmailText}
        </Text>
      </Item>
      <Item offset="extraSmall">{p.email}</Item>
      <Item>{p.password}</Item>
      <Item offset="extraSmall">{p.checkbox}</Item>
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

export default ByEmail;
