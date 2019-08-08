import styled from 'styled-components';

/**
 * Properties of the Header.
 */
interface Props {
  /**
   * True if the header has a bottom border.
   */
  hasLine?: boolean;
}

/**
 * Height of the header.
 */
const height = 66;

/**
 * Height of the bottom border of the header.
 */
const borderHeight = 1;

/**
 * Horizontal offset of header from the page's corners.
 */
const xOffset = 38;

/**
 * Header element of the Page.
 */
const Header  = styled.div<Props>`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: ${p => p.hasLine ? (height + borderHeight) : height}px;

  padding-right: ${xOffset}px;
  padding-left: ${xOffset}px;
  padding-bottom: ${p => p.hasLine ? borderHeight : 0}px;

  :before {
    position: absolute;
    left: ${xOffset}px;
    right: ${xOffset}px;
    bottom: 0;

    display: ${p => p.hasLine ? 'block' : 'none'};
    height: ${borderHeight}px;

    background-color: #e6e6e6;

    content: '';
  }
`;

export default Header;
