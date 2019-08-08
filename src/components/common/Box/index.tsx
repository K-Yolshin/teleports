import React, { ReactNode } from 'react';

import Root from './Root';
import Heading from './Heading';
import Title, { Props as TitleProps } from './Title';
import Content from './Content';
import Footer from './Footer';
import Notice from '@/components/common/Notice';
import NoticeButton from '@/components/common/NoticeButton';

/**
 * Props for the Box.
 */
interface Props {
  /**
   * Title of Box
   */
  title?: string;

  /**
   * Size of the title.
   */
  size?: TitleProps['textSize'];

  /**
   * Inner react element.
   */
  children?: ReactNode;

  /**
   * Footer element
   */
  footer?: ReactNode;

  /**
   * Node of tooltip popover.
   */
  notice?: string;
}

/**
 * Component of the Box
 */
const Box = (props: Props) => {
  const {
    children,
    footer,
    title,
    size,
    notice,
  } = props;

  return (
    <Root>
      <Heading>
        <Title textSize={size}>{title}</Title>
        {notice && (
          <Notice text={notice} positioning="bottom">
            <NoticeButton />
          </Notice>
        )}
      </Heading>
      <Content>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Root>
  );
};

export default Box;
