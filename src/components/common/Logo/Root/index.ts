/**
 * Properties of the Root.
 */
export interface Props {
  /**
   * Width of the icon.
   */
  width?: 'default';
}

/**
 * Abstract root element of the Logo.
 */
const Root = () => {
  const width = 74;

  return `
    display: block;
    width: ${width}px;
  `;
};

export default Root;
