<template>
  <div>
    <q-input
      label="Registro no Crea-RJ:"
      :value="value"
      @input="atualizar"
      @keyup.enter="enter"
      mask="##########"
      unmasked-value
      fill-mask
      outlined dense
      required
    />
  </div>
</template>
<script>
export default {
  name: 'InputRegistro',
  props: ['value'],
  methods: {
    atualizar (val) {
      this.$emit('input', val)
    },
    enter () {
      this.$emit('enter')
    }
  }
}
</script>
