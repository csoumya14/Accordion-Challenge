import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  width: 100%;
  display: flex;
  font-size: 16px;
  color: #0d7bb3;
  font-weight: bold;
  justify-content: space-between;
  border: none;
  &:hover {
    color: black;
  }
`;

export const TitleContainer = styled.h2`
  padding-top: 0.1rem;
  padding-left: 0.5rem;
  height: 1rem;
`;
