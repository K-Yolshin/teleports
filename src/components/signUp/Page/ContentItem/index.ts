import styled from 'styled-components';

/**
 * Properties of the ContentItem.
 */
interface Props {
  /**
   * True if this item is aside.
   */
  isAside?: boolean;
}

/**
 * Item of a content of the page.
 */
const ContentItem = styled.div<Props>`
  ${p => p.isAside
    ? `
      flex: 0 0 auto;

      width: 327px;

      padding-left: 65px;
    `
    : `
      flex: 1 1 0%;
    `
  }
`;

export default ContentItem;
