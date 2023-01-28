import styled from 'styled-components';

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background: gray;
  color: white;
  border-radius: 10px;
  outline: none;
  border: none;
`;
