import styled from 'styled-components';

export const TextField = styled.input`
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  outline: none;
  border-radius: 3px;
  width: 300px;

  &:hover, &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`
