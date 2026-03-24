import axios from "axios"

export const api = axios.create({
  baseURL: "https://admin.guadaye.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data)
    } else {
      console.error("API Network Error:", error.message)
    }
    return Promise.reject(error)
  }
)
