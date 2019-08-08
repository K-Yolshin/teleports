import Props from './Props';

import Size from '@/helpers/Size';

const inputStyles = `
  padding: 0 ${Size.inputHorizPadding}px;
  height: ${Size.inputHeight}px;
  font-size: 16px;
`;

const textareaStyles = `
  padding: ${Size.textareaVertPadding}px ${Size.textareaHorizPadding}px;
  height: ${Size.textareaHeight}px;
  font-size: 14px;
  resize: none;
`;

/**
 * Returns styles of the Input.
 */
export default (p: Props) => `
  color: #323232;
  text-align: ${p.align};

  border-width: 1px;
  border-style: solid;
  border-color: ${p.error ? '#D0021B' : '#CCC'};
  border-radius: 2px;

  transition: 0.2s ease-in-out;

  width: 100%;

  &:hover {
    border-color: ${p.error ? '#D0021B' : '#00A8FF'};
  }

  &:focus {
    border-color: ${p.error ? '#D0021B' : '#00A8FF'};
    caret-color: #007AFF;
  }

  :placeholder {
    color: #9B9B9B;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    background-color: #F8F8F8;
    color: #DCDBDC;
  }

  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }

  ${p.isMultiline ? textareaStyles : inputStyles};
`;
