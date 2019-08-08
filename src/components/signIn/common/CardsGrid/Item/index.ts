import styled from 'styled-components';

/**
 * Component of the Item for CardsGird.
 */
const Item = styled.div`
  display: inline-flex;

  margin-right: 15px;
  margin-bottom: 15px;

  cursor: pointer;

  transform: translate(0, 0);
  transition: 0.2s ease-out 0s;

  :hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 2px 20px 2px rgba(0,0,0,0.1);
  }

  :nth-child(4n) {
    margin-right: 0;
  }
`;

export default Item;
