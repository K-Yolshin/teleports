import React from 'react';

import Text from '@/components/common/Text';
import Button, { Props as ButtonProps } from '@/components/common/Button';

import Root from './Root';
import TextContainer from './TextContainer';
import ButtonContainer from './ButtonContainer';

/*
 * Props interface of the Message
 */
interface Props {

  /*
   * Path to the icon
   */
  icon: string;

  /*
   * Text of Button
   */
  buttonText: string;

  /*
   * Type of Button
   */
  buttonVariant?: ButtonProps['variant'];

  /*
   * Button click handler
   */
  onClick?: (e: React.SyntheticEvent) => void;

  /*
   * Link for the Button
   */
  to?: string;

  /*
   * Children of the Message
   */
  children: React.ReactNode;
}

/*
 * Component of the Message
 */
const Message = ({
  icon,
  children,
  buttonText,
  buttonVariant,
  onClick,
  to,
}: Props) => (
  <Root>
    <img src={icon} />
    <TextContainer>
      <Text align="center" size="large">
        {children}
      </Text>
    </TextContainer>
    <ButtonContainer>
      <Button onClick={onClick} to={to} variant={buttonVariant}>
        {buttonText}
      </Button>
    </ButtonContainer>
  </Root>
);

export default Message;
