<template>
  <div>
    <q-input
      :label="label"
      :value="value"
      @input="atualizar"
      @keyup.enter="enter"
      mask="#########################"
      outlined dense
      required
    />
  </div>
</template>
<script>
export default {
  name: 'InputNome',
  props: ['value', 'label'],
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
