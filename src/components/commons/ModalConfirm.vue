<template>
  <div>
    <div style="margin-bottom: -30px;">
      <q-btn
        :label="toggleBtnProps.label"
        :icon="toggleBtnProps.icon"
        :color="toggleBtnProps.color"
        size="9px"
        @click="toggle()"
        :title="toggleBtnProps.title"
        :disabled="toggleBtnProps.disabled"
      />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="fade"
        transition-hide="fade"
      >
        <q-card>
          <q-bar class="bg-white text-bold q-ma-sm">
            <span class="text-orange-9">{{toggleBtnProps.title}}</span>
            <q-space />
            <q-btn dense flat icon="close" color="grey-6" v-close-popup />
          </q-bar>
          <div class="q-pa-md">
            {{texto}}<br />
          </div>
          <q-separator />
          <q-card-section class="q-gutter-md row justify-end">
            <BtnConfirmar @click="confirm()" ref="btnConfirmar" />
            <BtnCancelar />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import BtnConfirmar from 'components/commons/BtnConfirmar'
import BtnCancelar from 'components/commons/BtnCancelar'
export default {
  name: 'ModalConfirm',
  components: { BtnConfirmar, BtnCancelar },
  props: ['toggleBtnProps', 'texto'],
  data () {
    return {
      dialog: false,
      maximizedToggle: false
    }
  },
  methods: {
    toggle () {
      this.dialog = !this.dialog
    },
    confirm () {
      this.$emit('click')
    },
    startLoading () {
      this.$refs.btnConfirmar.loading = true
    },
    stopLoading () {
      if (this.$refs.btnConfirmar) {
        this.$refs.btnConfirmar.loading = false
      }
    }
  }
}
</script>
