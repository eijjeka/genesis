import {
  ContainerCourseDetails,
  CourseContainer,
} from "./CourseDetailsCard.styled";
import PropTypes from "prop-types";
import { Player } from "../../../Player/Player";

const CourseDetailsCard = ({ data }) => {
  return (
    <ContainerCourseDetails>
      <CourseContainer>
        <Player course={data} />
      </CourseContainer>
    </ContainerCourseDetails>
  );
};

export default CourseDetailsCard;

CourseDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
