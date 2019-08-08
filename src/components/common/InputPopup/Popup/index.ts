import styled from 'styled-components';

/**
 * Width of the pointer.
 */
const POINTER_WIDTH = 9;

/**
 * The styled inner component.
 */
const Inner = styled.div`
  display: flex
  align-items: center;

  position: absolute;
  top: 50%;
  right: -${POINTER_WIDTH}px;

  transform: translate(100%, -50%);

  padding: 7px 32px;

  background-color: #D0021B;
  color: white;

  width: 226px;
  min-height: 48px;

  font-size: 14px;

  &:before {
    content: '';

    position: absolute;
    top: 50%;
    left: -${POINTER_WIDTH}px;

    transform: translate(0, -50%);

    display: inline-block;
    width: 0;
    height: 0;

    border-style: solid;
    border-width: 8px ${POINTER_WIDTH}px 8px 0;
    border-color: transparent #D0021B transparent transparent;
  }
`;

export default Inner;
