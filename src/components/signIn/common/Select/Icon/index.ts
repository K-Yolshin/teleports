import styled from 'styled-components';
import selectIcon from '@/assets/signIn/common/select.svg';

/**
 * Props for Icon component
 */
interface IconProps {
  /**
   * Turn icon if true
   */
  active: boolean;
}

/**
 * Component of the Icon
 */
const Icon = styled.div<IconProps>`
  flex: none;

  width: 15px;

  background: url(${selectIcon}) no-repeat center;

  text-align: center;
  font-size: 16px;
  line-height: 2.2;
  color: #9B9B9B;

  transform: rotate(${props => props.active ? '180deg' : '0'});
`;

export default Icon;
