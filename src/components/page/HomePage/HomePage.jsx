import { useEffect, useState } from "react";
import Pagination from "components/Pagination/Pagination";
import * as CoursesAPI from "../../../services/fetchCourses";

const HomePage = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    if (!token) {
      CoursesAPI.fetchToken().then(setToken);
    } else {
      CoursesAPI.getCourses().then(setCourse);
    }
  }, [token]);

  return <Pagination data={courses} />;
};

export default HomePage;
