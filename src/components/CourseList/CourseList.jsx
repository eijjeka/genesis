import CardCourse from "../CardCourse";
import { List } from "./CourseList.styled";
import PropTypes from "prop-types";
import usePagination from "../../hooks/usePagination";

const CourseList = ({ data }) => {
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    // page,
    // setPage,
    // totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: data,
  });

  return (
    <>
      <List>
        {data.slice(firstContentIndex, lastContentIndex).map((el) => (
          <CardCourse itemData={el} key={el.id} />
        ))}
      </List>
      {data && (
        <div className="pagination">
          <button onClick={prevPage} className="page">
            &larr;
          </button>
          <button onClick={nextPage} className="page">
            &rarr;
          </button>
        </div>
      )}
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
      meta: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
