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

export {
  getProvince,
  getCity,
}