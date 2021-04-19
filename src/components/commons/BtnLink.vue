<template>
  <div>
    <q-btn
      :label="links[tipo].text"
      :icon="links[tipo].icon"
      color="primary" flat size="11px"
      @click="goTo(links[tipo].link)"
    />
  </div>
</template>
<script>
import { openURL } from 'quasar'
import links from 'assets/links'
export default {
  name: 'BtnLink',
  props: ['tipo'],
  data () {
    return {
      links: links
    }
  },
  methods: {
    goTo (link) {
      openURL(link)
    }
  }
}
</script>
