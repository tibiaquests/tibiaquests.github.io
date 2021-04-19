import { restApi } from 'boot/axios'

const resource = 'art/'

export default {
  getCulturas: () => restApi.get(resource + 'culturas'),
  getUnidadesDeMedidaReceita: () => restApi.get(resource + 'unidades-medida-receita'),
  getDiagnosticos: () => restApi.get(resource + 'diagnosticos'),
  getRamosAgronomia: () => restApi.get(resource + 'ramos-agronomia')
}
