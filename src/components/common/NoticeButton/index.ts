import styled from 'styled-components';
import noticeBtnImage from '@/assets/help-icon.svg';

const NoticeButton = styled.button.attrs({ type: 'button' })`
  border: none;
  background-image: url(${noticeBtnImage});
  background-position: center;
  background-repeat: no-repeat;
  background-color: initial;
  height: 26px;
  width: 26px;
  padding: 0;
`;

export default NoticeButton;
