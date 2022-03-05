<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="([icon, link, text], i) in drawerItems"
          :key="i"
          link
          :to="link"
          color="primary"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-list>
        <v-list-item-group v-model="currentComp" color="primary">
          <v-list-item
            v-for="(item, i) in compLinks"
            :key="i"
            exact
            link
            @click="setCurrCompID(item.id)"
          >
            <v-list-item-action class="d-inline">
              <v-icon>mdi-text-box</v-icon>
              <span class="text-subtitle-2">{{ item.nmbr }}</span>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list> -->
      <template v-slot:append>
        <div class="py-2">
          <v-btn block depressed tile @click.stop="miniVariant = !miniVariant">
            <v-icon
              >mdi-{{
                `arrow-collapse-${miniVariant ? 'right' : 'left'}`
              }}</v-icon
            >
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed flat app dark color="#004A7E">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <NuxtLink
        to="/"
        style="text-decoration: none; color: rgba(0, 0, 0, 0.87)"
      >
        <v-toolbar-title class="white--text" v-text="title" />
      </NuxtLink>
      <v-chip color="red" class="ml-3 rounded-0" label dark>Beta</v-chip>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
// import { db } from '../plugins/db'

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      compLinks: [],
      drawerItems: [
        ['mdi-home', '/', 'Meine Texte'],
        ['mdi-text-box-plus', '/editor', 'Texteditor'],
        ['mdi-cog', '/settings', 'Einstellungen'],
      ],
      miniVariant: false,
      title: 'Kompetenzeditor',
      currentComp: null,
    }
  },
  computed: {
    // lastSavedID() {
    //   return this.$store.getters.getLastSavedCompetenceID
    // },
  },
  watch: {
    // lastSavedID() {
    //   db.kompetenzbeschreibungen
    //     .where('id')
    //     .equals(this.lastSavedID)
    //     .toArray((result) => {
    //       this.compLinks.unshift(result)
    //     })
    // },
  },
  created() {
    // this.fillCompLinkList()
  },
  methods: {
    // fillCompLinkList() {
    //   db.kompetenzbeschreibungen.toArray((comp) => {
    //     comp.forEach((item) => {
    //       const temp = {
    //         nmbr: item.id,
    //         title: item.name,
    //         id: item.id,
    //         final: item.final,
    //       }
    //       this.compLinks.unshift(temp)
    //     })
    //   })
    // },
    // setCurrCompID(id) {
    //   this.$store.commit('setCurrCompetenceID', id)
    // },
  },
}
</script>
<style>
html {
  min-width: 850px !important;
}
</style>
