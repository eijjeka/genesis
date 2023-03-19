import {
  ContainerCourseDetails,
  CourseContainer,
  // Title,
  // PreTitle,
  ContainerMeta,
  // ImagePoster,
} from "./CourseDetailsCard.styled";
import PropTypes from "prop-types";
import { Player } from "../../../Player/Player";

const CourseDetailsCard = ({ data }) => {
  return (
    <ContainerCourseDetails>
      <CourseContainer>
        <Player course={data} />
        <ContainerMeta></ContainerMeta>
      </CourseContainer>
    </ContainerCourseDetails>
  );
};

export default CourseDetailsCard;

CourseDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
