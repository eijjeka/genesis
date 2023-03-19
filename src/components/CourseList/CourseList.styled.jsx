import styled from "styled-components";

export const List = styled.ul`
  margin-top: 20px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  grid-gap: 1em;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;
