import { restApi } from 'boot/axios'

const resource = 'art/'

export default {
  getArtsReceitaAgronomica: () => restApi.get(resource + 'receitas/arts-disponiveis')
}
