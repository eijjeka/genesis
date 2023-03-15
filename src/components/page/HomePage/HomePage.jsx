import { useState, useEffect } from "react";
import CourseList from "../../CourseList";
import * as CoursesAPI from "../../../services/fetchCourses";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const HomePage = () => {
  const [course, setCourses] = useState([]);

  useEffect(() => {
    CoursesAPI.getCourses()
      .then((data) => {
        Loading.circle({
          svgColor: "#ff6b01",
        });
        setCourses(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, []);

  return <CourseList data={course} />;
};

export default HomePage;
