import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL
const token = localStorage.getItem("site") || ""

const getApi = async(path, param) => {
  const res = await axios.get(`${apiUrl}/${path}`, {
    params: param
  })
  
  return res
}

const postApi = async(path, data, header, param) => {
  const res = await axios.post(`${apiUrl}/${path}`, data, {
    headers: header,
    params: param
  })
  
  return res
}

export {
  getApi,
  postApi
}