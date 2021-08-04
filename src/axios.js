import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, //  the api cloud fuction URL
});

export default instance;
