import { getApi } from "./Api";

const getDetailProduct = async(id) => {
  const res = await getApi(
    `products/${id}`
  )

  return res.data
}

const getProductsDetailPage = async() => {
  const res = await getApi(
    "products",
    {
      limit : 4,
      offset : 0
    })
  
  return res.data
}

export {
  getDetailProduct,
  getProductsDetailPage
}