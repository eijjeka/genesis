import axios from "axios";

axios.defaults.baseURL = "https://api.wisey.app/api/v1/";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
// };

axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3NjNlNzc0Yy02ZjUwLTQ0MmUtOGFiYi00NmZlM2Q5ZGEwZGEiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MzgwNzEsImV4cCI6MTY3OTczODA3MX0.kygEXReZ_A6OjBThcocOmD-ZqN6UrlMnZbjCsrhqmNI`;

export async function fetchToken() {
  try {
    const { data } = await axios.get("auth/anonymous?platform=subscriptions");
    // token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCourses() {
  try {
    const { data } = await axios.get("core/preview-courses");
    return data.courses;
  } catch (error) {
    console.log(error);
  }
}

export async function getCourseInfo(courseId) {
  const { data } = await axios.get(`core/preview-courses/${courseId}`);
  return data;
}
