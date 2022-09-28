import styled from 'styled-components';

export const StyledForm = styled('form')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledInput = styled('input')`
  height: 30px;
  min-width: 300px;
  outline-color: darkviolet;
  outline-offset: 1px;
`;

export const StyledButton = styled('button')`
  display: block;
  height: 35px;
  width: 80px;
  border: none;
  border-radius: 2px;
  color: white;
  background-color: darkviolet;
  opacity: 1;
  transition: opacity 300ms ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
