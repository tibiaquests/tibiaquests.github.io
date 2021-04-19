<template>
  <div>
    <q-card
      class="card-informativo"
    >
      <q-card-section>
        <div class="text-h6 card-informativo-title text-grey-8">{{textoCard[tipo].title}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div
          :class="'card-informativo-text ' + infoColor"
          v-for="info in textoCard[tipo].infos" :key="info"
        >
          - {{info}}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import textoCard from 'assets/textoCardsInformativos'
export default {
  name: 'CardInformativo',
  props: {
    tipo: {
      type: String,
      required: true
    },
    infoColor: {
      type: String,
      default: 'text-grey-8'
    }
  },
  data () {
    return {
      textoCard: textoCard
    }
  }
}
</script>

<style scoped>
.card-informativo {
  background-color: #e4eaec;
}

.card-informativo-title {
  font-weight: 700;
  font-size: 18px;
}

.card-informativo-text {
  padding-left: 10px;
}
</style>
