<template>
  <q-layout view="lHh LpR lff">
    <q-header class="bg-black barra-titulo">
      <q-toolbar>
        <div v-if="!leftDrawerOpen">
        </div>
        <q-btn
          flat
          round size="11px"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <div class="row text-bold" style="font-size: 14px;">
            Tibia Quests
            <div class="q-gutter-sm">
              <q-radio v-model="quest" val="Banshee" label="Banshee" dark color="red" />
              <!--

              <q-radio v-model="quest" val="PoI" label="PoI" dark color="red" />
              <q-radio v-model="quest" val="Inq" label="Inq" dark color="red" />
              <q-radio v-model="quest" val="WotE" label="WotE" dark color="red" />
              -->
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-1"
      :width="222"
    >
      <div class="bg-black" style="height: 55px; padding: 10px 15px 10px 15px;">
      </div>
      <div>
        <q-list>
          <div
            v-for="menu in menus[quest]"
            :key="menu.id"
          >
            <EssentialLink v-if="!menu.submenu" :menu="menu" />
            <q-expansion-item
              v-if="menu.submenu"
              :icon="menu.icon"
              :label="menu.text"
              group="menu"
              class="text-grey-9"
              expand-icon="none"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar :icon="menu.icon" text-color="grey-9" size="35px" />
                </q-item-section>
                <q-item-section>
                  {{ menu.text }}
                </q-item-section>
              </template>
              <EssentialLink v-for="submenu in menu.submenu" :key="submenu.label" :menu="submenu" ehSubmenu="true" />
            </q-expansion-item>
          </div>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-blue-grey-1 text-grey-9 text-center">
      <div class="row justify-between">
        <div class="col-12 q-pa-xs">
          @ {{ ano }} - Criado pela ATEC / Crea-RJ
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import menus from 'assets/menu'
import EssentialLink from 'components/EssentialLink.vue'
export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: true,
      menus: menus,
      ano: (new Date()).getFullYear(),
      quest: 'PoI'
    }
  },
  methods: {
    logoff () {
      this.$router.push('/app/logoff')
    }
  }
}
</script>

<style scoped>
.barra-titulo {
  min-height: 55px;
}
@media only screen and (min-width: 1025px) {
  .nome-sistema {
    display: block;
  }
}
@media only screen and (max-width: 1024px) {
  .nome-sistema {
    display: none;
  }
  .saudacao {
    white-space: normal;
   }
}
</style>
