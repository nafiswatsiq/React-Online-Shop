import axios from "axios"
import { deleteApi, getApi, getApiAuth, postApi } from "./Api"

const postCart = async (cart) => {
  const res = await postApi(
    "cart",
    cart
  )

  return res.data
}

const getCart = async (token) => {
  const res = await getApiAuth(
    "cart",
    {},
    token
  )

  return res.data
}

const deleteCart = async (id) => {
  const res = await deleteApi(
    `cart/${id}`
  )

  return res.data
}

export {
  postCart,
  getCart,
  deleteCart
}