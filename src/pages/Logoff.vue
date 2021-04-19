<template>
  <div></div>
</template>

<script>
export default {
  name: 'Logoff',
  created () {
    this.logoff()
  },
  methods: {
    logoff () {
      this.$store.commit('user/setToken', null)
      localStorage.removeItem('token')
      this.$store.commit('user/logoff')
      this.$sucesso('Usuário saiu do sistema.')
      this.$router.push('app/home')
    }
  }
}
</script>
