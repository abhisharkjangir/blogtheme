import axios from "./axios";
import getApiEndPoint from "../apis";

const ApiService = ({ method = "GET", url, data, appendUrl = '' }) => {
  url = getApiEndPoint(url) + appendUrl;
  return new Promise((resolve, reject) => {
    axios({ url, method, data })
      .then(response => {
        resolve({ ...response });
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default ApiService;
