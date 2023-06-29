import axios from 'axios'

export function allWebinars() {
  return axios(`/api/webinars`) // GET
}

export function filterWebinars({ limit, page, sort, category, q }) {
  return axios(
    `/api/webinars?limit=${+limit || 6}&page=${+page || 1}&sort=${
      sort || 'desc'
    }&category=${category || ''}&q=${q || ''}`
  )
}

export function webinarId({ id }) {
  return axios(`/api/webinars/${id}`)
}

export function newWebinar(headers) {
  return axios.post(`/api/webinars`, headers)
}

export function editWebinar([{ id, img_path }, headers]) {
  return axios.put(`/api/webinars/${id}?img_path=${img_path}`, headers)
}

export function deleteWebinar({ id, img_path }) {
  return axios.delete(`/api/webinars/${id}?img_path=${img_path}`)
}
