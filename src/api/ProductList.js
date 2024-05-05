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

const getSearchProduct = async (search) => {
  const res = await getApi(
    "products/search",
    {
      q : search
    })

  return res.data
}

export {
  getProductList,
  getSearchProduct
}