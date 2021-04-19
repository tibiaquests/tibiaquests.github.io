import { restApi } from 'boot/axios'

export function setUser (state, user) {
  state.user = user
}

export function setToken (state, token) {
  localStorage.setItem('token', token)
  restApi.defaults.headers.Authorization = localStorage.getItem('token')
  state.token = token
}

export function setTelefone (state, telefone) {
  state.telefone = telefone
}

export function logoff (state) {
  state.user = {}
}
