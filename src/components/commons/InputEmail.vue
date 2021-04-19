<template>
  <div>
    <q-input
      type="email"
      label="E-mail:"
      :value="value"
      @input="atualiza"
      :rules="[isValidEmail]"
      outlined dense
      required
    />
  </div>
</template>
<script>
export default {
  name: 'InputEmail',
  props: ['value'],
  methods: {
    atualiza (val) {
      this.$emit('input', val)
    },
    isValidEmail (val) {
      if (val) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
        return emailPattern.test(val) || 'E-mail inválido'
      } else {
        return true
      }
    }
  }
}
</script>
