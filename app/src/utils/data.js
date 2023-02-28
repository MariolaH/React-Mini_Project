import axios from "axios";

async function getData(endpoint) {
  let response = await axios.get(`https://wizard-world-api.herokuapp.com/${endpoint}`);
  return response.data;
}