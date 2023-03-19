import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Item = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);
  background-color: RGBA(0, 0, 0, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const MetaWrapper = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 14px;
`;

export const PreTitle = styled.p`
  font-size: 12px;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
`;

export const Rating = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.value >= 4 ? "#138000" : "#FDD700")};
  color: #fff;
  font-size: 16px;
`;
