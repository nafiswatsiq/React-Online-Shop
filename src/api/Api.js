import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getApi = async(path, param) => {
  const res = await axios.get(`${apiUrl}/${path}`, {
    params: param
  })
  
  return res;
}

export {
  getApi,
}