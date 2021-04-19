<template>
  <div>
    <q-input
      label="Nome:"
      :value="value"
      @input="atualizar"
      @keyup.enter="enter"
      maxlength="100"
      :hint="hint"
      outlined dense
      required
    />
  </div>
</template>
<script>
export default {
  name: 'InputNome',
  props: ['value', 'hint'],
  methods: {
    atualizar (val) {
      this.$emit('input', val.toLocaleUpperCase())
    },
    enter () {
      this.$emit('enter')
    }
  }
}
</script>
<style>
.q-field__messages {
  color: red;
}
</style>
