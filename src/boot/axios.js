import Vue from 'vue'
import axios from 'axios'

const restApi = axios.create({ baseURL: process.env.API + '/rest-api/crea', headers: { Authorization: localStorage.getItem('token') } })

Vue.prototype.$axios = restApi

export { restApi }
