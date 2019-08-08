import styled from 'styled-components';
import { withContextConsumer } from '../withContext';

/**
 * Interface for props of the Cell
 */
interface CellProps {
  /**
   * Number of column of cell
   */
  column?: number;
  /**
   * True if this is cell of title
   */
  isTitle?: boolean;
  /**
   * True if this is cell of subtitle
   */
  isSubtitle?: boolean;
  /**
   * True if this is root cell
   */
  isRootCell?: boolean;
  /**
   * True if this is blue cell in header
   */
  isBlueCell?: boolean;
  /**
   * True if cell have border bottom
   */
  borderBottom?: boolean;
  /**
   * True if cell have border top
   */
  borderTop?: boolean;
  /**
   * True if cell have border left
   * True by default
   */
  borderLeft?: boolean;
  /**
   * True if cell have border right.
   * True by default
   */
  borderRight?: boolean;
  /**
   * True if cell have padding bottom.
   */
  paddingBottom?: boolean;
  /**
   * Height of cell in px.
   * @default 50
   */
  height?: number;
  /**
   * True if column of cell is highlighted
   * Provided by ContextConsumerWrapper
   */
  isActive?: boolean;
  /**
   * onMouseEnter handler
   * Provided by ContextConsumerWrapper
   */
  onMouseEnter?: (e: any) => void;
  /**
   * onMouseLeave handler
   * Provided by ContextConsumerWrapper
   */
  onMouseLeave?: (e: any) => void;
}

/**
 * Styles when isTitle = true
 */
const titleStyles = `
  font-size: 18px;
  font-weight: 500;
  color: #323232;
  padding: 14px 5px;
`;

/**
 * Styles when isSubitle = true
 */
const subtitleStyles = `
  font-size: 14px;
  font-weight: 300;
  color: #9B9B9B;
`;

/**
 * Styles when isRootCell = true
 */
const rootCellStyles = `
  font-size: 18px;
  font-weight: 300;
  color: #323232;
`;

/**
 * Styles when isBlueCell = true
 */
const blueCellStyles = `
  padding: 0px;
`;

/**
 * Styles when isTitle = false and isSubtitle = false
 */
const normalStyles = `
  font-size: 14px;
  font-weight: 300;
  color: #323232;
  padding: 0 5px;
`;

/**
 * Helping array for getBorders function
 */
const sides = ['Top', 'Right', 'Bottom', 'Left'];

/**
 * Return styles for borders
 */
const getBorders = (p: CellProps) => (
  sides.reduce((result: string, side: string) => {
    const value = p[`border${side}`] ? '1px solid #CCCCCC' : 'none';
    return `
      ${result}
      border-${side.toLowerCase()}: ${value};`;
  }, '')
);

/**
 * Component of the Cell
 */
const Cell = styled.td<CellProps>`
  position: relative;

  padding: 0;

  width: 235px;
  height: ${p => p.height}px;

  font-family: Museo Sans Cyrl;

  text-align: center;

  cursor: default;

  background: ${p => p.isActive ? 'rgba(0, 168, 255, 0.1)' : 'rgba(0, 168, 255, 0)'};

  transition: background-color .25s linear 0s;

  ${getBorders}

  ${p => p.isTitle ? titleStyles
    : p.isSubtitle ? subtitleStyles
    : p.isRootCell ? rootCellStyles
    : p.isBlueCell ? blueCellStyles
    : normalStyles
  }

  ${p => p.paddingBottom ? 'padding-bottom: 15px' : ''}
`;

/**
 * Default props for Cell
 */
Cell.defaultProps = {
  borderLeft: true,
  borderRight: true,
  height: 50,
};

export default withContextConsumer(true)(Cell);
