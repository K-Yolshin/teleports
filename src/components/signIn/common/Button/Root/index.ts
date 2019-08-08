/**
 * Properties of the Root.
 */
export interface Props {
  /**
   * Variant of the button.
   * @default "default"
   */
  variant?: 'default' | 'primary' | 'success';
  /**
   * Font size in px.
   */
  fontSize?: number;
  /**
   * Border radius in px.
   */
  borderRadius?: number;
  /**
   * True if button is flat.
   */
  flat?: boolean;
}

/**
 * If variant is default sets a specific styles.
 */
const setDefaultVariant = (props: Props) => (props.variant || 'default') === 'default'
  ? `
    background-color: white;

    color: #00a8ff;

    border-width: 1px;
    border-color: #00a8ff;
  `
  : '';

/**
 * If variant is primary sets a specific styles.
 */
const setPrimaryVariant = (props: Props) => props.variant === 'primary'
  ? `
    background-color: #00a8ff;

    color: white;

    border-color: #00a8ff;
    border-width: 2px;
  `
  : '';

/**
 * If variant is success sets a specific styles.
 */
const setSuccessVariant = (props: Props) => props.variant === 'success'
  ? `
    background-color: white;

    color: #00a8ff;

    border-width: 2px;
    border-color: #00a8ff;

    :hover {
      background-color: #5ABE2D;

      color: white;

      border-color: #5ABE2D;
    }
  `
  : '';

/**
 * Component of the Default Button.
 */
const Root = (props: Props) => `
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props.flat ? 40 : 50}px;

  padding-right: 24px;
  padding-left: 24px;

  font-size: ${props.fontSize}px;
  line-height: 20px;

  border-style: solid;
  border-radius: ${props.borderRadius}px;

  text-decoration: none;
  text-align: center;

  outline: none;

  width: 100%;

  transition: .25s ease-in-out;

  :hover {
    background-color: white;

    border-color: #9b9b9b;

    color: #9b9b9b;
  }

  ${setPrimaryVariant(props)}
  ${setDefaultVariant(props)}
  ${setSuccessVariant(props)}
`;

Root.defaultProps = {
  fontSize: 16,
  borderRadius: 2,
};

export default Root;
