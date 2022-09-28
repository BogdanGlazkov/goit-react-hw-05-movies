import styled from 'styled-components';

export const CastItem = styled('li')`
  list-style: none;
`;

export const CastImage = styled('img')`
  width: 120px;
  height: 180px;
`;

export const List = styled('ul')`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  text-align: center;
  font-size: 12px;
`;
