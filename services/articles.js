import axios from 'axios'

export function allArticles() {
  return axios(`/api/articles`)
}

export function filterArticles({ limit, page, sort, category, q }) {
  return axios(
    `/api/articles?limit=${+limit || 6}&page=${+page || 1}&sort=${
      sort || 'desc'
    }&category=${category || ''}&q=${q || ''}`
  )
}

export function articleId({ id }) {
  return axios(`/api/articles/${id}`)
}

export function newArticle(headers) {
  return axios.post(`/api/articles`, headers)
}

export function editArticle([{ id, img_path }, headers]) {
  return axios.put(`/api/articles/${id}?img_path=${img_path}`, headers)
}

export function deleteArticle({ id, img_path }) {
  return axios.delete(`/api/articles/${id}?img_path=${img_path}`)
}
