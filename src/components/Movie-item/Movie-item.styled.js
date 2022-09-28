import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled('div')`
  display: flex;
  gap: 30px;
  text-align: left;
`;

export const Thumb = styled('div')`
  width: 30%;
`;

export const Poster = styled('img')`
  width: 100%;
`;

export const Description = styled('div')`
  width: 70%;
`;

export const GenresItem = styled('li')`
  padding: 4px;
  font-size: 12px;
  border-radius: 2px;
  color: white;
  background-color: darkviolet;
`;

export const MovieNav = styled('ul')`
  display: flex;
  gap: 50px;
  padding: 20px 0;
  margin: 0;
  list-style: none;
`;

export const NavWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
`;

export const MovieLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: darkviolet;
`;

export const BackLink = styled(Link)`
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  font-size: 14px;
  color: darkviolet;
`;

export const GenresList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const GenresTitle = styled('h3')`
  display: inline-block;
`;
