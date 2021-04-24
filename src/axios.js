import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-851cd/us-central1/api", //cloud function
});
export default instance;
