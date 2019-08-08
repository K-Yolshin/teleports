import styled from 'styled-components';

/**
 * Props interface of the Text
 */
interface Props {
  /**
   * Flag for display placeholder
   */
  isPlaceholder: boolean;

  /**
   * Property for text align
   */
  align?: string;

  isDisabled?: boolean;
}

/**
 * Component of the Text
 */
const Text = styled.p<Props>`
  flex: 1 1 auto;
  height: 100%;

  margin: 0 11px 0 0;

  vertical-align: top;

  text-align: ${p => p.align};
  font-size: 16px;
  line-height: 2.7;
  color: ${p => p.isDisabled  ? '#DCDBDC' : (p.isPlaceholder ? '#9B9B9B' : '#323232')};

  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Text;
