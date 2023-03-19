import CardCourse from "../CardCourse";
import { List } from "./CourseList.styled";
import PropTypes from "prop-types";

const CourseList = ({ data, firstContentIndex, lastContentIndex }) => {
  return (
    <>
      <List>
        {data.slice(firstContentIndex, lastContentIndex).map((el) => (
          <CardCourse itemData={el} key={el.id} />
        ))}
      </List>
    </>
  );
};

export default CourseList;

CourseList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      previewImageLink: PropTypes.string,
      title: PropTypes.string.isRequired,
      lessonsCount: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
