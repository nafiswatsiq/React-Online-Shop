import { getApi } from "./Api";

const getCategory = async() => {
  const res = await getApi(
    "categories",
    {
      limit : 10,
    });
  
  return res.data;
}

const getProducts = async() => {
  const res = await getApi(
    "products",
    {
      limit : 12,
      offset : 0
    });
  
  return res.data;
}

export {
  getCategory,
  getProducts
}