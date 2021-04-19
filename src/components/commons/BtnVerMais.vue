<template>
  <div>
    <q-btn push color="primary" icon="visibility" round size="10px" flat title="ver mais">
      <q-popup-proxy>
        <q-banner class="bg-info text-white">
          <template v-slot:avatar>
            <q-icon name="info" color="white" size="20px" class="q-py-sm" />
          </template>
          <small>{{texto}}</small>
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>
</template>
<script>
export default {
  name: 'BtnVerMais',
  props: ['texto']
}
</script>
