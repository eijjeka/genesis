import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Video = styled.video`
  margin-top: 40px;
  width: 750px;
  height: 300px;
`;

export const Title = styled.h3`
  position: absolute;
  width: 100%;
  top: 0;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
`;

export const ListTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #4e4e4e;
  cursor: pointer;
  text-align: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
  border-radius: 10px;

  &:hover {
    box-shadow: 0px 0px 15px 0px rgb(255, 255, 255);
  }
`;
