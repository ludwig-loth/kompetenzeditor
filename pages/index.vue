<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
        <v-card height="200" outlined elevation="1"
          ><v-card-text style="height: 148px" class="d-flex justify-center"
            ><v-icon style="font-size: 60px"
              >mdi-text-box-plus</v-icon
            ></v-card-text
          >
          <v-card-actions
            ><v-btn
              color="success"
              block
              depressed
              @click="setCurrCompID(0)"
              >neu hinzufügen</v-btn
            ></v-card-actions
          >
        </v-card>
      </v-col>
      <v-col
        v-for="(item, index) in compLinks"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card height="200" outlined elevation="1">
          <v-card-title>
            <span class="d-inline-block text-truncate">
              {{ item.title }}
            </span>
          </v-card-title>
          <v-card-text style="height: 84px">
            <v-chip>
              ID:
              {{ item.nmbr }}
            </v-chip>
            <v-chip>
              final:
              {{ item.final }}
            </v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="col-10"
              color="primary"
              depressed
              @click="setCurrCompID(item.id)"
              >öffnen</v-btn
            >
            <v-btn
              color="error"
              icon
              depressed
              @click="deleteComp(item.id, index)"
              ><v-icon>mdi-delete</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '../plugins/db'

export default {
  data: () => ({
    compLinks: [],
  }),
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
      this.$router.push({
        path: '/editor',
      })
    },
    deleteComp(id, i) {
      this.compLinks.splice(i, 1)
      db.kompetenzbeschreibungen
        .delete(id)
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>