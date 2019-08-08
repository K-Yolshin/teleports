import React from 'react';
import Root from './Root';
import Item from './Item';

/**
 * Props of the ButtonGroup component.
 */
interface ButtonGroupProps {
  /**
   * Elements in the ButtonGroup.
   */
  children: React.ReactNode | React.ReactNodeArray;
  /**
   * ButtonsGroup direction.
   */
  horizontal?: boolean;
}

/**
 * Component of the ButtonsGroup.
 */
function ButtonsGroup(props: ButtonGroupProps) {
  const { children, horizontal } = props;

  return (
    <Root
      horizontal={horizontal}
    >
      {React.Children.map(children, (child: React.ReactNode) => (
        <Item horizontal={horizontal}>
          {child}
        </Item>
      ))}
    </Root>
  );
}

export { Item };

export default ButtonsGroup;
