<template>
  <div>
    <q-btn
      label="Confirmar"
      icon="thumb_up"
      color="green" size="11px"
      @click="confirmar()"
      :loading="loading"
      :disabled="disabled"
    >
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
  </div>
</template>
<script>
export default {
  name: 'BtnConfirmar',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    confirmar () {
      this.$emit('click')
    }
  }
}
</script>
