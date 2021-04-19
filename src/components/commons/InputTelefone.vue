<template>
  <div>
    <q-input
      label="Telefone de Contato:"
      :value="value"
      @input="atualiza"
      mask="(##) #####-####"
      fill-mask
      unmasked-value
      outlined dense
      required
    />
  </div>
</template>
<script>
export default {
  name: 'InputTelefone',
  props: ['value'],
  methods: {
    atualiza (val) {
      this.$emit('input', val)
    }
  }
}
</script>
