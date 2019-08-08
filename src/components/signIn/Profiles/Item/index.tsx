import React, { PureComponent, SyntheticEvent } from 'react';

import Subtitle from './Subtitle';
import Avatar from './Avatar';
import Title from './Title';
import Text from './Text';
import Root from './Root';

/**
 * Properties of the Item.
 */
interface Props {

  /**
   * Url to avatar image
   */
  image: string;

  /**
   * Name of user
   */
  title: string;

  /**
   * Type of user
   */
  subtitle: string;

  /**
   * Organization of user
   */
  text: string;

  /**
   * Value which will be passed in onClick handler.
   */
  value?: any;

  /**
   * Handles a click on a profile.
   */
  onClick?: (value: any) => void;
}

/**
 * Component of the single profile.
 */
class Item extends PureComponent<Props> {

  /**
   * Handles a click event.
   */
  handleClick = (e: SyntheticEvent) => {
    e.preventDefault();

    const { onClick, value } = this.props;
    onClick && onClick(value);
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      subtitle,
      title,
      image,
      text,
    } = this.props;

    return (
      <Root onClick={this.handleClick}>
        <Avatar src={image} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Text>{text}</Text>
      </Root>
    );
  }
}

export default Item;
