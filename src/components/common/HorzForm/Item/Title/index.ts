import styled from 'styled-components';

/**
 * Properties of the Title.
 */
export interface Props {

  /**
   * True if the item must be faded.
   */
  isFade?: boolean;
}

/**
 * Title element of the form.
 */
const Title = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 302px;

  font-weight: normal;
  font-size: 16px;

  ${p => p.isFade && `
    opacity: .3;
  `}
`;

export default Title;
