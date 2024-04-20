import { getApi } from "./Api"

const getProductList = async (limit, offset, category) => {
  const res = await getApi(
    "products",
    {
      limit : limit,
      offset : offset,
      category : category
    })

  return res.data
}

export {
  getProductList
}