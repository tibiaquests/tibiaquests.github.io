<template>
  <div>
    <q-btn
      icon="far fa-file-pdf"
      @click="download(numeroArt)"
      round flat color="red-10"
    />
  </div>
</template>
<script>
import { openURL } from 'quasar'
export default {
  name: 'BtnDownloadArt',
  props: ['numeroArt'],
  methods: {
    download (numeroArt) {
      openURL(process.env.CREAONLINE + '/home/realizarAtendimentoPublico.do?funcao=imprimirARTpdf&art=' + numeroArt)
    }
  }
}
</script>
