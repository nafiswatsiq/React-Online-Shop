import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL
// const localToken = localStorage.getItem("site") || ""

const getApi = async(path, param) => {
  const res = await axios.get(`${apiUrl}/${path}`, {
    params: param
  })
  
  return res
}

const getApiAuth = async(token, path, param) => {

  const res = await axios.get(`${apiUrl}/${path}`, {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${token}`
    },
    params: param
  })
  
  return res
}

const postApi = async(token, path, data, param) => {
  const res = await axios.post(`${apiUrl}/${path}`, data, {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${token}`
    },
    params: param
  })
  
  return res
}

const deleteApi = async(token, path, param) => {
  const res = await axios.delete(`${apiUrl}/${path}`, {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${token}`
    },
    params: param
  })

  return res
}

export {
  getApi,
  postApi,
  getApiAuth,
  deleteApi
}