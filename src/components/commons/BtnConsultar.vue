<template>
  <div>
    <q-btn
      label="Consultar"
      icon="search"
      @click="consultar()"
      :disabled="disabled"
      color="primary" size="11px"
      class="full-width"
    />
  </div>
</template>
<script>
export default {
  name: 'BtnConsultar',
  props: ['disabled'],
  methods: {
    consultar () {
      this.$emit('click')
    }
  }
}
</script>
