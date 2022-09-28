import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled('ul')`
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  text-align: center;
  gap: 10px;
  list-style: none;
`;

export const ListItem = styled('li')`
  width: 100%;
  padding-top: 5%;
  text-align: center;
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0 23px 2px rgba(120, 40, 40, 0.3);
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Image = styled('img')`
  display: block;
  margin: 0 auto;
  width: 170px;
`;
