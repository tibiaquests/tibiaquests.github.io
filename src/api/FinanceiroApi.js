import { restApi } from 'boot/axios'

const resource = 'financeiro/'

export default {
  emissaoDeGuia: (filtro) => restApi.post(resource + 'emissao-guia', filtro),
  parcelasAVencer: (filtro) => restApi.post(resource + 'parcelas-a-vencer', filtro),
  multasAVencer: (filtro) => restApi.post(resource + 'multas-a-vencer', filtro)
}
