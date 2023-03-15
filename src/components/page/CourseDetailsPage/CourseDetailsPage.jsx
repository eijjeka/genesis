import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import * as CoursesAPI from "../../../services/fetchCourses";
import CourseDetailsCard from "./CourseDetailsCard";
import {
  ButtonGoBackContainer,
  ButtonGoBack,
} from "./CourseDetailsPage.styled";
import { useLocation } from "react-router-dom";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(
    location?.state?.from ?? "/"
  );

  useEffect(() => {
    CoursesAPI.getCourseInfo(id)
      .then((data) => {
        console.log(data);
        Loading.circle({
          svgColor: "#ff6b01",
          cssAnimationDuration: 800,
        });
        setCourse(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, [id]);

  return (
    <>
      <ButtonGoBackContainer>
        <ButtonGoBack to={prevLocation}>Go back</ButtonGoBack>
      </ButtonGoBackContainer>
      {course && <CourseDetailsCard data={course} />}
      <Outlet />
    </>
  );
};

export default CourseDetailsPage;
