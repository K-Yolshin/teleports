import React, { FC } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import Message from '@/components/common/Message';
import icon from '@/assets/big-house-icon.svg';

import content from './content';

const { buttonText, text } = content;

/*
 * Props interface of the StartMessage
 */
interface Props extends WithNamespaces {

  /*
   * Button click handler
   */
  onClick?: (e: React.SyntheticEvent) => void;

  /*
   * Link for the Button
   */
  to?: string;
}

/*
 * Component of the StartMessage
 */
const StartMessage: FC<Props> = ({
  onClick,
  to,
  t,
}) => (
  <Message
    buttonText={t(buttonText)}
    buttonVariant="success"
    onClick={onClick}
    icon={icon}
    to={to}
  >
    {t(text)}
  </Message>
);

export default withNamespaces()(StartMessage);
