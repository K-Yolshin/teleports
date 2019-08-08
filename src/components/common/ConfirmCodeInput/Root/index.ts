import styled from 'styled-components';

import { Root as InputBox, MaskInput } from '../../Input';

interface Props {
  error: boolean | string;
  isActive: boolean;
  isDisabled: boolean;
}

/**
 * Base layout of the input.
 */
const Root = styled.div<Props>`
  position: relative;

  display: flex;

  ${InputBox} {
    flex: 1 1 0%;
  }

  ${MaskInput} {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    text-align: left;
  }

  :hover {
    ${p => !p.isDisabled ? `
      ${MaskInput} {
        border-color: ${p.error ? '#D0021B' : '#00A8FF'};
      }
      ` : ''}
  }

  ${p => p.isActive ? `
      ${MaskInput} {
        border-color: ${p.error ? '#D0021B' : '#00A8FF'};
      }
    ` : ''}
`;

export default Root;
