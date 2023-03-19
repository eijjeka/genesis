import axios from "axios";

axios.defaults.baseURL = "https://api.wisey.app/api/v1/";

export async function fetchToken() {
  try {
    const { data } = await axios.get("auth/anonymous?platform=subscriptions");
    localStorage.setItem("token", data.token);
    return data.token;
  } catch (error) {
    console.log(error);
  }
}

export async function getCourses() {
  try {
    const { data } = await axios.get("core/preview-courses", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data.courses;
  } catch (error) {
    console.log(error);
  }
}

export async function getCourseInfo(courseId) {
  try {
    const { data } = await axios.get(`core/preview-courses/${courseId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
