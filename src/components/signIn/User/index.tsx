import React from 'react';

import Avatar from './Avatar';
import Card from './Card';
import Title from './Title';
import Subtitle from './Subtitle';
import Text from './Text';

/**
 * Props of User
 */
export interface UserProps {
  /**
   * Url to avatar image
   */
  avatar: string;
  /**
   * Name of user
   */
  name: string;
  /**
   * Type of user
   */
  type: string;
  /**
   * Organization of user
   */
  org: string;
  /**
   * Id of user
   */
  id: any;
}

/**
 * Component of User
 */
const User = (p: UserProps) => (
  <Card>
    <Avatar src={p.avatar} />
    <Title>
      {p.name}
    </Title>
    <Subtitle>
      {p.type}
    </Subtitle>
    <Text>
      {p.org}
    </Text>
  </Card>
);

export default User;
