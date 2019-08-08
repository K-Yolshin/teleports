import styled from 'styled-components';

export const Root = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;

  max-width: 520px;
  max-height: 327px;

  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0,0,0,.5);
`;

export const Header = styled.div`
  padding-left: 11px;
`;

export const Wrap = styled.div`
  padding: 4px 11px;

  width: 100%;
  min-height: 42px;

  background-color: #fff;

  cursor:pointer;

  &:hover {
    background-color: #efeff5;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
`;
