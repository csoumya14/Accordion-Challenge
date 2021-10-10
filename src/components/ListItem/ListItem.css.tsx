import styled, { keyframes } from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #0c74aa;
  margin-left: 0rem;
  &:hover {
    color: black;
  }
`;
const ShowHide = keyframes`
 0% { opacity:0 }
 1% { opacity:0: transform: scaleY(0)}
 100% { opacity:1: transform: scaleY(1)}
 `;

export const ListItemElement = styled.li`
  max-width: 100%;
  padding: 0.5rem;
  animation: ${ShowHide} 0.3s ease-in-out;
  opacity: 1;
  transform: scaleY(1);
`;
