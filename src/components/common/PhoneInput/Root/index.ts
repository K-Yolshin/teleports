import styled from 'styled-components';

import { Root as InputBox, MaskInput } from '../../Input';
import { Text as Select } from '../../Select';

interface Props {
  error: boolean | string;
  isActive: boolean;
  isDisabled: boolean;
}

/**
 * Base layout of the Phone.
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
    border-left: none;
    &:hover {
      z-index: 1;
    }
  }

  ${Select} {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right-width: 1px;
    &:hover {
      z-index: 1;
    }
  }

  :hover {
    ${p => !p.isDisabled ? `
      ${MaskInput} {
        border-color: ${p.error ? '#D0021B' : '#00A8FF'};
        border-left: none;
      }
      ${Select} {
        border-color: ${p.error ? '#D0021B' : '#00A8FF'};
      }
      ` : ''}
  }

  ${p => p.isActive ? `
      ${MaskInput} {
        border-color: ${p.error ? '#D0021B' : '#00A8FF'};
        border-left: none;
      }
      ${Select} {
        border-color: ${p.error ? '#D0021B' : '#00A8FF'};
      }
    ` : ''}
`;

export default Root;
