import styled from 'styled-components';

/**
 * Properties of the ContentBox.
 */
interface Props {
  /**
   * True if an aside content is exists.
   */
  hasAside?: boolean;
}

/**
 * Content container of the Page.
 */
const ContentBox = styled.div<Props>`
  padding-top: 16px;
  padding-bottom: 39px;

  ${p => p.hasAside && `
    display: flex;
    align-items: flex-start;
  `}
`;

export default ContentBox;
