import api from "./apiconfig"

export const createReview = async (reviewData) => {
  const resp = await api.post('/reviews', { review: reviewData })
  return resp.data
}