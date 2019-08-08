import styled from 'styled-components';

/**
 * Component of User Card.
 */
export default styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  border: 1px solid #ccc;

  min-width: 244px;
  height: 325px;

  margin-bottom: 15px;
  margin-left: 7.5px;
  margin-right: 7.5px;

  cursor: pointer;

  transform: translate(0, 0);
  transition: .2s ease-out 0s;

  :hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 2px 20px 2px rgba(0,0,0,0.1);
  }
`;
