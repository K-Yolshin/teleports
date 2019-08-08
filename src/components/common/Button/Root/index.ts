/**
 * Properties of the Root.
 */
export interface Props {
  /**
   * Variant of the button.
   * @default "default"
   */
  variant?: 'default' | 'primary' | 'success' | 'greenHover' | 'gray';

  /**
   * Font size in px.
   */
  fontSize?: number;

  /**
   * Border radius in px.
   * @default 2
   */
  borderRadius?: number;

  /**
   * True if button is flat.
   */
  flat?: boolean;

  /**
   * Size of the offsets.
   * @default "normal"
   */
  offset?: 'normal' | 'small';

  /**
   * True if the element must be disabled.
   */
  isDisabled?: boolean;
}

/**
 * If variant is default sets a specific styles.
 */
const setDefaultVariant = (props: Props) => (props.variant || 'default') === 'default'
  ? `
    background-color: white;
    color: #00A8FF;
    border-color: #00A8FF;
    border-width: 2px;

    &:hover {
      background-color: #4CC2FF;
      border-color: #4CC2FF;
      color: white;
    }

    &:active {
      background-color: #079BE8;
      border-color: #079BE8;
    }
  `
  : '';

/**
 * If variant is primary sets a specific styles.
 */
const setPrimaryVariant = (props: Props) => props.variant === 'primary'
  ? `
    background-color: #00A8FF;
    color: white;
    border: none;

    &:hover {
      background-color: #4CC2FF;
    }

    &:active {
      background-color: #079BE8;
    }
  `
  : '';

/**
 * If variant is greenHover sets a specific styles.
 * If variant is success sets a specific styles.
 */
const setSuccessVariant = (props: Props) => props.variant === 'success'
  ? `
    background-color: #5ABE2D;
    color: white;
    border: none;

    &:hover {
      background-color: #8BD16C;
    }

    &:active {
      background-color: #52AC2A;
    }
  `
  : '';

/**
 * If variant is greenHover sets a specific styles.
 */
const setGreenHoverVariant = (props: Props) => props.variant === 'greenHover'
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
 * If variant is gray sets a specific styles.
 */
const setGrayVariant = (props: Props) => props.variant === 'gray'
  ? `
    background-color: #f1f1f1;

    color: #323232;

    border-width: 1px;
    border-color: #e2e2e2;
  `
  : '';

const setDisabledStyles = (props: Props) => props.isDisabled
  ? `
    cursor: default;
    pointer-events: none;

    background-color: white;
    color: #9B9B9B;

    border: 2px solid #9B9B9B;
  `
  : '';

/*
 * Offsets of the button.
 */
const offsets = {
  normal: 24,
  small: 8,
};

/**
 * Component of the Default Button.
 */
const Root = (props: Props) => `
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props.flat ? 40 : 45}px;

  padding-right: ${offsets[props.offset || 'normal']}px;
  padding-left: ${offsets[props.offset || 'normal']}px;

  font-size: ${props.fontSize || 16}px;
  font-weight: 500;
  line-height: 20px;

  border-style: solid;
  border-radius: ${props.borderRadius || 2}px;

  text-decoration: none;
  text-align: center;
  user-select: none;

  outline: none;

  appearance: none;

  width: 100%;

  transition: .25s ease-in-out;

  ::-moz-focus-inner {
    border: 0;
  }

  ${setPrimaryVariant(props)}
  ${setDefaultVariant(props)}
  ${setSuccessVariant(props)}
  ${setGreenHoverVariant(props)}
  ${setGrayVariant(props)}

  ${setDisabledStyles(props)}
`;

export default Root;
