import axios from "axios";

axios.defaults.baseURL = "https://api.wisey.app/api/v1/";

export async function fetchToken() {
  try {
    const { data } = await axios.get("auth/anonymous?platform=subscriptions");
    localStorage.setItem("token", data.token);
    return data.token;
  } catch (error) {
    console.error("An error occurred while fetching the token:", error);
    throw error;
  }
}

export async function getCourses() {
  try {
    const { data } = await axios.get("core/preview-courses", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data.courses;
  } catch (error) {
    if (error.response) {
      console.log(`Request failed with status code ${error.response.status}`);
    } else if (error.request) {
      console.log("Request failed to send");
    } else {
      console.log(`Error: ${error.message}`);
    }
  }
}

export async function getCourseInfo(courseId) {
  try {
    const { data } = await axios.get(`core/preview-courses/${courseId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
}
