import { create } from "zustand";
import { getLikes, postLike } from "../api/Likes";

const likeStore = create(set => ({
  likes : [],
  fetchLikes: async (token) => {
    try {
      const likesData = await getLikes(token)
      set({ likes: likesData.data })

    } catch (error) {
      console.error('Error fetching likes data:', error)
      if (error.response.status === 401) {
      }
    }
  },
  addToLikes: async (token, productId) => {
    try {
      await postLike(token, productId)

      const updatedLikes = await getLikes(token)

      set({ likes: updatedLikes.data })

      return {
        error : false,
        status: 200
      }
    } catch (error) {
      return {
        error: true,
        status: error.response.status
      }
    }
  },
  checkLike: (productId) => {
    const likes = likeStore.getState().likes
    const chekck = likes.find(like => like.id == productId)
    return chekck ? true : false
  },
  resetLikes: () => set({ likes: [] })
}))

export default likeStore