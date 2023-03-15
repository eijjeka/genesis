import {
  ContainerCourseDetails,
  CourseContainer,
  Title,
  PreTitle,
  ContainerMeta,
  ImagePoster,
} from "./CourseDetailsCard.styled";
import PropTypes from "prop-types";

const CourseDetailsCard = ({ data }) => {
  const { title, tagline, previewImageLink } = data;
  return (
    <ContainerCourseDetails>
      <CourseContainer>
        <ImagePoster src={`${previewImageLink}/cover.webp`} alt="poster" />

        <ContainerMeta>
          <Title>{title}</Title>
          <PreTitle>{tagline}</PreTitle>
        </ContainerMeta>
      </CourseContainer>
    </ContainerCourseDetails>
  );
};

export default CourseDetailsCard;

CourseDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
