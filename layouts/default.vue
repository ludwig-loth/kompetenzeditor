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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      flat
      app
      color="blue-grey lighten-4"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <NuxtLink
        to="/"
        style="text-decoration: none; color: rgba(0, 0, 0, 0.87)"
      >
        <v-toolbar-title v-text="title" />
      </NuxtLink>
      <v-chip color="red" class="ml-3 rounded-0" label dark>Beta</v-chip>
      <v-spacer />
      <v-btn to="/spacy" text tile class="mx-3">
        TEST spaCy
      </v-btn>
      <v-btn icon to="/settings"><v-icon>mdi-cog</v-icon></v-btn>
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
import { db } from '../plugins/db'

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      compLinks: [],
      miniVariant: false,
      title: 'Kompetenzeditor',
      currentComp: null,
    }
  },
  computed: {
    lastSavedID() {
      return this.$store.getters.getLastSavedCompetenceID
    },
  },
  watch: {
    lastSavedID() {
      db.kompetenzbeschreibungen
        .where('id')
        .equals(this.lastSavedID)
        .toArray((result) => {
          this.compLinks.unshift(result)
        })
    },
  },
  created() {
    this.fillCompLinkList()
  },
  methods: {
    fillCompLinkList() {
      db.kompetenzbeschreibungen.toArray((comp) => {
        comp.forEach((item) => {
          const temp = {
            nmbr: item.id,
            title: item.name,
            id: item.id,
            final: item.final,
          }
          this.compLinks.unshift(temp)
        })
      })
    },
    setCurrCompID(id) {
      this.$store.commit('setCurrCompetenceID', id)
    },
  },
}
</script>
<style>
html {
  min-width: 850px !important;
}
</style>
