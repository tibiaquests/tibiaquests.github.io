<template>
  <div>
    <q-select
      label="Unidade de Atendimento:"
      :value="value"
      :options="listOptionsFiltered"
      :loading="loading"
      @input="atualiza"
      @filter="filtro"
      use-input
      input-debounce="0"
      :multiple="multiple"
      :use-chips="multiple"
      outlined dense
      required
      :readonly="readonly"
    />
  </div>
</template>
<script>
export default {
  name: 'SelectUnidadesDeAtendimento',
  props: ['value', 'multiple', 'readonly'],
  created () {
    this.getListOptions()
  },
  data () {
    return {
      listOptionsFiltered: [],
      listOptions: [],
      loading: false
    }
  },
  methods: {
    async getListOptions () {
      this.loading = true
      await this.$axios
        .get('cadastro/unidades-atendimento')
        .then(response => {
          response.data.data.forEach(el => {
            this.listOptions.push({ value: el.id, label: el.nome })
          })
        })
        .finally(() => {
          this.loading = false
        })
      this.listOptionsFiltered = this.listOptions
    },
    atualiza (value) {
      this.$emit('input', value)
    },
    filtro (val, update, abort) {
      update(() => {
        this.listOptionsFiltered = this.listOptions.filter(v => v.label.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }
}
</script>
