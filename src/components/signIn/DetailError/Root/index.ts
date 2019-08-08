import styled from 'styled-components';

/**
 * Horizontal padding.
 */
const xPadding = 20;

/**
 * Vertical padding.
 */
const yPadding = 25;

/**
 * Font size.
 */
const fontSize = 16;

/**
 * Border radius
 */
const borderRadis = 4;

/**
 * Color of background
 */
const backgroundColor = '#FCF2F2';

/**
 * Color of text.
 */
const textColor = '#323232';

/**
 * Component of the error text in mobile signIn.
 */
const ErrorMessage = styled.div`
  padding: ${yPadding}px ${xPadding}px;
  background-color: ${backgroundColor};
  color: ${textColor};
  border-radius: ${borderRadis}px;
  font-size: ${fontSize}px;
  line-height: normal;
`;

// Export.
export default ErrorMessage;
