import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL
// const token = localStorage.getItem("site") || ""

const login = async (email, password) => {
  try {
    const res = await axios.post(`${apiUrl}/auth`, {
      email: email,
      password: password
    })

    return res.data
  } catch (err) {
    return err.response.data
  }
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

const register = async (name, email, password) => {
  try {
    const res = await axios.post(`${apiUrl}/register`, {
      name: name,
      email: email,
      password: password
    })

    return res.data
  } catch (err) {
    return err.response.data
  }
}

const getUser = async (token) => {
  const res = await axios.get(`${apiUrl}/user`,
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
  logout,
  register,
  getUser
}