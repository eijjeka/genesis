import CardCourse from "../CardCourse";
import { List } from "./CourseList.styled";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { ItemLink } from "../CardCourse/CardCourse.styled";

const CourseList = ({ data }) => {
  const location = useLocation();

  return (
    <List>
      {data.map((el) => (
        <ItemLink to={`${el.id}`} state={{ from: location }} key={el.id}>
          <CardCourse itemData={el} />
        </ItemLink>
      ))}
    </List>
  );
};

export default CourseList;

CourseList.propTypes = {
  data: PropTypes.array.isRequired,
};
