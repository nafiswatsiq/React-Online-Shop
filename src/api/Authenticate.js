import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL
// const token = localStorage.getItem("site") || ""

const login = async (email, password) => {
  const res = await axios.post(`${apiUrl}/auth`, {
    email: email,
    password: password
  })

  return res.data
}

const logout = async (token) => {
  const res = await axios.post(`${apiUrl}/logout`,
  {},
  {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  
  return res.data
}

export {
  login,
  logout
}