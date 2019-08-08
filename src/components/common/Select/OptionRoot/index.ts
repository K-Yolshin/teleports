import styled from 'styled-components';
import icon from '@/assets/select-check.svg';

/**
 * Props interface for the OptionRoot
 */
interface Props {
  /**
   * Selected flag of the Option
   */
  isSelected?: boolean;

  /**
   * True if it's option of multiselect
   */
  isMulti?: boolean;

  /**
   * Property for text align
   */
  align?: string;

  /**
   * Click handler
   */
  onClick?: (e: React.SyntheticEvent) => void;
}

/**
 * Component of the OptionRoot
 */
const OptionRoot = styled.div<Props>`
  position: relative;

  padding: ${p => p.isMulti ? '12px 30px' : '12px 14px 12px 11px'};

  text-align: ${p => p.align};
  font-size: 16px;
  line-height: 20px;
  color: #323232;

  border-bottom: 1px solid #ccc;

  cursor: pointer;

  user-select: none;

  :hover {
    background: #F5F5F5;
  }

  :last-child {
    border-bottom: none;
  }

  :before {
    display: ${p => (p.isMulti && p.isSelected) ? 'block' : 'none'};
    content: url(${icon});

    position: absolute;

    left: 10px;
  }
`;

export default OptionRoot;
