import Vue from 'vue'

function sucesso (mensagem, tempo = 2000) {
  this.$q.notify({ message: mensagem, type: 'positive', position: 'center', timeout: tempo })
}

function info (mensagem, tempo = 2000) {
  this.$q.notify({ message: mensagem, type: 'info', position: 'center', timeout: tempo })
}

function alerta (mensagem, tempo = 2000) {
  this.$q.notify({ message: mensagem, type: 'negative', position: 'center', timeout: tempo })
}

Vue.prototype.$sucesso = sucesso
Vue.prototype.$info = info
Vue.prototype.$alerta = alerta
