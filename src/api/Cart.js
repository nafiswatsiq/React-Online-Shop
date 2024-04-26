import axios from "axios"
import { deleteApi, getApi, getApiAuth, postApi } from "./Api"

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
  deleteCart
}