import Vue from 'vue'
import AuthApi from '../api/AuthApi'
import ArtApi from '../api/ArtApi'
import ArtDomainApi from '../api/ArtDomainApi'
import FinanceiroApi from '../api/FinanceiroApi'

const api = {
  auth: AuthApi,
  art: ArtApi,
  artDomain: ArtDomainApi,
  financeiro: FinanceiroApi
}

Vue.prototype.$api = api

export default api
