import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 30px;
  font-size: 20px;
  text-decoration: none;
  color: black;

  &.active {
    color: darkviolet;
  }
`;

export const NavBar = styled('nav')`
  display: flex;
  border-bottom: 2px solid black;
`;
