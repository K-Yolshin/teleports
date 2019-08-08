import React, { FC } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import Message from '@/components/common/Message';
import icon from '@/assets/big-check-icon.svg';

import content from './content';

const {
  buttonText,
  textHead,
  textTail,
  freeHead,
  freeTail,
} = content;

/*
 * Props interface of the FinishMessage
 */
interface Props extends WithNamespaces {

  /**
   * Name of the tariff.
   */
  name: string;

  /**
   * Tariff's free text.
   */
  free: string;

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
 * Component of the FinishMessage
 */
const FinishMessage: FC<Props> = ({
  onClick,
  name,
  free,
  to,
  t,
}) => (
  <Message
    buttonText={t(buttonText)}
    buttonVariant="primary"
    icon={icon}
    onClick={onClick}
    to={to}
  >
    {t(textHead)}{name}{t(textTail)}
    {' '}{t(freeHead)}{' '}{free}{t(freeTail)}
  </Message>
);

export default withNamespaces()(FinishMessage);
