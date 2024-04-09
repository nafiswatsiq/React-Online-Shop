import { getApi } from "./Api"

const getProductList = async (limit, offset) => {
  const res = await getApi(
    "products",
    {
      limit : limit,
      offset : offset
    })

  return res.data
}

export {
  getProductList
}