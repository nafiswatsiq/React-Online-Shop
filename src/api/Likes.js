import { getApiAuth, postApi } from "./Api"

const getLikes = async (token) => {
  const res = await getApiAuth(
    token,
    "likes"
  )

  return res.data
}

const postLike = async (token, productId) => {
  const res = await postApi(
    token,
    "likes",
    { product_id: productId }
  )

  return res.data
}

export {
  getLikes,
  postLike
}