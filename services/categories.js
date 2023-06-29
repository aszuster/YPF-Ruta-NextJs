import axios from 'axios'

export function allCategories() {
  return axios(`/api/categories`)
}

export function filterCategories({ limit, page, sort }) {
  return axios(
    `/api/categories?limit=${+limit || 6}&page=${+page || 1}&sort=${
      sort || 'desc'
    }`
  )
}

export function createCategory(headers) {
  return axios.post(`/api/categories`, headers)
}

export function updateCategory([{ id }, headers]) {
  return axios.put(`/api/categories/${id}`, headers)
}

export function deleteCategory(id) {
  return axios.delete(`/api/categories/${id}`)
}
