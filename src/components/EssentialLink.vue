<template>
  <q-item
    clickable
    :to="menu.link"
    active-class="menu-ativo"
    :class="ehSubmenu ? 'q-pl-xl' : ''"
  >
    <div :class="ehSubmenu ? 'q-pl-md row' : 'row'">
      <q-item-section v-if="menu.icon" avatar>
        <q-icon :name="menu.icon" class="text-grey-9 q-ml-sm" size="16px" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-grey-9">{{ menu.text }}</q-item-label>
      </q-item-section>
    </div>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: ['menu', 'ehSubmenu']
}
</script>
<style scoped>
.menu-ativo {
  background-color: rgba(195, 195, 195, 0.123);
  border-left: 3px solid #16346a;
}
</style>
