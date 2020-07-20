import api from "./apiconfig"

export const getAllProducts = async () => {
  const resp = await api.get("/products")
  return resp.data
}

export const getProduct = async (id) => {
  const resp = await api.get(`/products/${id}`)
  return resp.data
}

export const updateProduct = async (id, productData) => {
  const resp = await api.put(`/products/${id}`, { product: productData })
  return resp.data
}

export const createProduct = async (productData) => {
  const resp = await api.post('/products', { product: productData })
  return resp.data
}

export const deleteProduct = async (id) => {
  const resp = await api.delete(`/products/${id}`)
  return resp
}
