import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const Layout = lazy(() =>
  import("../Layout/Layout" /* webpackChunkName: "layout" */)
);

const HomePage = lazy(() =>
  import("../page/HomePage" /* webpackChunkName: "home-view" */)
);

const CourseDetailsPage = lazy(() =>
  import(
    "../page/CourseDetailsPage" /* webpackChunkName: "movie-details-view" */
  )
);

export default function App() {
  return (
    <Suspense
      fallback={Loading.circle({
        svgColor: "#ff6b01",
        cssAnimationDuration: 800,
      })}
    >
      {Loading.remove()}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":id" element={<CourseDetailsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
