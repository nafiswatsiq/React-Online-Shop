import axios from "axios"
import { deleteApi, getApi, getApiAuth, postApi } from "./Api"

const apiUrl = process.env.REACT_APP_API_URL

const postCart = async (cart, token) => {
  const res = await postApi(
    token,
    "cart",
    cart
  )

  return res.data
}

const getCart = async (token) => {
  const res = await getApiAuth(
    token,
    "cart",
  )

  return res.data
}

const updateCart = async (id, cart, token) => {
  const res = await axios.patch(
    `${apiUrl}/cart/${id}`,
    cart,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return res.data
}

const deleteCart = async (id, token) => {
  const res = await deleteApi(
    token,
    `cart/${id}`
  )

  return res.data
}

export {
  postCart,
  getCart,
  updateCart,
  deleteCart
}