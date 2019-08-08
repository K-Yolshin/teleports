import React, { FC, ReactNode } from 'react';

import Root, { Props as RootProps } from './Root';
import Field, { Props as FieldProps } from './Field';
import Title from './Title';
import Inner from './Inner';
import Helper from './Helper';
import Mark from './Mark';
import NoticeContainer from './NoticeContainer';
import Notice from '@/components/common/Notice';
import NoticeButton from '@/components/common/NoticeButton';

/**
 * Properties of the Item.
 */
interface Props {

  /**
   * Title of the item.
   */
  title?: string;

  /**
   * Input element.
   */
  children?: ReactNode;

  /**
   * Width of the item.
   */
  width?: FieldProps['width'];

  /**
   * Aside content of the item.
   */
  aside?: ReactNode;

  /**
   * Helper content of the item.
   */
  helper?: ReactNode;

  /**
   * True if the item must has a required mark.
   */
  isRequired?: boolean;

  /**
   * True if the item must be faded.
   */
  isFade?: boolean;

  /**
   * Node of the notice content.
   */
  notice?: string;

  /**
   * Offset of the item.
   */
  offset?: RootProps['offset'];
}

/**
 * Item of the form.
 */
const Item: FC<Props> = ({
  isRequired,
  children,
  notice,
  isFade,
  helper,
  offset,
  title,
  width,
  aside,
}) => (
  <Root offset={offset}>
    <Inner>
      {title && (
        <Title isFade={isFade}>
          {title}
          {isRequired && (
            <Mark />
          )}
          {notice && (
            <NoticeContainer>
              <Notice text={notice} positioning="bottom">
                <NoticeButton />
              </Notice>
            </NoticeContainer>
          )}
        </Title>
      )}
      <Field width={width} isFade={isFade}>{children}</Field>
      {aside && (
        <Field width="auto">{aside}</Field>
      )}
    </Inner>
    {helper && (
      <Helper isTitle={Boolean(title)}>{helper}</Helper>
    )}
  </Root>
);

export default Item;
