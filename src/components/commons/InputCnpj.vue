<template>
  <div>
    <q-input
      label="CNPJ:"
      :value="value"
      @input="atualizar"
      @keyup.enter="enter"
      mask="##.###.###/####-##"
      unmasked-value
      fill-mask
      outlined dense
      required
    />
  </div>
</template>
<script>
export default {
  name: 'InputCnpj',
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
