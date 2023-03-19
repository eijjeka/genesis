import styled from "styled-components";

export const ContainerCourseDetails = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 30px;
  border: 0.5px solid #fff;
  background-color: #9a8f8f;
  color: #fff;

  @media screen and (max-width: 480px) {
    max-width: 310px;
  }
`;

export const CourseContainer = styled.div`
  display: flex;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
