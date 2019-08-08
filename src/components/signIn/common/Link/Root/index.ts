/**
 * Properties of the Root.
 */
interface Props {
  /**
   * Variant of the link.
   */
  variant?: 'default' | 'gray' | 'plain';
}

/**
 * Sets the styles of the defeault variant.
 */
const setDefaultVariant = (props: Props) => (props.variant || 'default') === 'default'
  ? `
    color: #00a8ff;
  `
  : '';

/**
 * Sets the styles of the plain variant.
 */
const setPlainVariant = (props: Props) => props.variant === 'plain'
  ? `
    color: inherit;
  `
  : '';

/**
 * Sets the styles of the gray variant.
 */
const setGrayVariant = (props: Props) => props.variant === 'gray'
  ? `
    color: #9b9b9b;
  `
  : '';

/**
 * Abstract Root element of the link.
 */
const Root = (props: Props) => `
  ${setDefaultVariant(props)}
  ${setPlainVariant(props)}
  ${setGrayVariant(props)}

  transition: .25s ease-in-out;

  text-decoration: none;
`;

export default Root;
export { Props };
