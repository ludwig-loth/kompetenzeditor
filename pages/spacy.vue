<template>
  <v-row class="pa-3">
    <v-col class="text-center">
      <v-btn color="primary" @click="getPOS()">foo1</v-btn>
      <v-btn color="primary" @click="foobar2()">foo2</v-btn>
      <v-btn color="primary" @click="foobar3()">foo3</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    inputTxt:
      'Nach erfolgreicher Teilnahme an dem Modul Research Forschungsprojekt. Sie verstehen die Prinzipien der Rechnerkommunikation, der relevanten Netztechnologien sowie die Funktionsweise des Internet und können diese in anderen Fächern während des Studiums einsetzen, um z.B. Internetanwendungen und -dienste zu konzipieren und zu realisieren. Die Studierenden erkennen die Notwendigkeit des Schutzes der Privatsphäre bei der Nutzung von Rechnernetzen und nutzen geeignete Schutzmaßnahmen. In den Praktika verwenden die Studierenden praxisnahe Werkzeuge in 2er- und 4er-Teams im Netzwerk-Labor. Durch dieses explorative Lernen werden zusätzlich Team- und Kommunikationsfähigkeiten verstärkt.',
  }),
  methods: {
    getPOS() {
      const sendPostRequest = async () => {
        try {
          const resp = await this.$axios.post('/api/dep', {
            text: this.inputTxt,
            model: 'de_core_news_sm',
          })
          console.log(resp.data)
        } catch (err) {
          // Handle Error Here
          console.error(err)
          console.error(err.request)
          console.error(err.message)
        }
      }
      sendPostRequest()
    },
    foobar1() {
      console.log('foobar1')
    },
    async foobar2() {
      console.log('foobar2')
      const res = await this.$axios.get('/api/ui')
      console.log(res.data)
      return res
    },
    async foobar3() {
      const res = await this.$axios.get('/api/version')
      console.log(res.data)
      return res
    },
  },
}
</script>
