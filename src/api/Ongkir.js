import { getApiAuth, postApi } from "./Api"

const getProvince = async (token) => {
  const res = await getApiAuth(
    token,
    "delivery/province"
  )

  return res.data
}

const getCity = async (token, provinceId) => {
  const res = await getApiAuth(
    token,
    `delivery/province/${provinceId}/city`
  )

  return res.data
}

const getExpedition = async (token) => {
  const res = await getApiAuth(
    token,
    "delivery/expedition"
  )

  return res.data
}

const getCost = async(token, data) => {
  const res = await postApi(
    token,
    "delivery/cost",
    data
  )

  return res.data
}

export {
  getProvince,
  getCity,
  getExpedition,
  getCost
}