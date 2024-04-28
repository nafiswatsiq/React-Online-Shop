import { deleteApi, getApiAuth, postApi } from "./Api"

const getListAddress = async (token) => {
  const res = await getApiAuth(
    token,
    "address",
  )

  return res.data
}

const postAddress = async (token, data) => {
  const res = await postApi(
    token,
    "address",
    data
  )

  return res.data
}

const deleteAddress = async (token, id) => {
  const res = await deleteApi(
    token,
    `address/${id}`
  )

  return res.data
}

export {
  getListAddress,
  postAddress,
  deleteAddress
}