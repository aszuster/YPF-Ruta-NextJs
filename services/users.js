import axios from 'axios'

export function allUsers() {
  return axios(`/api/user`)
}

export function userId({ id }) {
  return axios(`/api/user/${id}`)
}

export function newUser(headers) {
  return axios.post(`/api/user`, headers)
}

export function editUser([{ id }, headers]) {
  return axios.put(`/api/user/${id}`, headers)
}

export function deleteUser(id) {
  return axios.delete(`/api/user/${id}`)
}
