import { restApi } from 'boot/axios'

const resource = 'corporativo/'

export default {
  usuarioSessao: (token) => restApi.get(resource + 'usuario-sessao', { headers: { Authorization: token } })
}
