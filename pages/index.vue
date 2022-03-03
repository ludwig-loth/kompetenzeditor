<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" sm="9">
      <v-sheet outlined color="black">
        <v-card class="pa-0" tile flat height="calc(70vh - 104px)">
          <v-toolbar flat dense tile>
            <v-toolbar-title>Texteditor</v-toolbar-title>
            <!-- <v-btn tile color="success" class="mr-1" @click="text = testtext">
              test-text
            </v-btn> -->
            <v-spacer></v-spacer>
            <v-btn
              tile
              outlined
              color="primary"
              class="mr-1"
              @click="dialogAction = true"
            >
              <v-icon>mdi-content-save</v-icon>
              speichern
            </v-btn>
            <v-btn
              color="primary"
              class="mr-1"
              outlined
              tile
              @click="text = ''"
            >
              <v-icon>mdi-delete-sweep</v-icon> leeren</v-btn
            >
            <!-- <v-btn
              tile
              outlined
              color="primary"
              class="mr-1"
              @click="selectCopyText()"
            > 
              <v-icon>mdi-content-copy</v-icon>
              Text kopieren
            </v-btn> -->
            <v-btn
              tile
              depressed
              color="primary"
              @click="
                dialogInfo = true
                textareaInfo = true
              "
            >
              <v-icon>mdi-information-outline</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text class="pa-1" height="calc(70vh - 184px)">
            <highlightable-input
              id="textBox"
              v-model="text"
              highlight-style="background-color:lightgreen; padding:4px"
              :highlight-enabled="highlightEnabled"
              :highlight="highlight"
              :placeholder="textareaPlaceholder"
              caseSensitive
              @input="tokenizeIt(text)"
            />
            <!-- <v-textarea
              id="textArea"
              v-model="text"
              counter
              class="rounded-0"
              filled
              name="input-7-4"
              height="calc(70vh - 184px)"
              no-resize
            ></v-textarea> -->
          </v-card-text>
        </v-card>
      </v-sheet>
      <v-col cols="12" sm="12" class="pa-0">
        <v-sheet outlined color="black">
          <v-card outlined tile height="30vh">
            <v-toolbar flat dense tile>
              <v-toolbar-title>Bewertung</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                tile
                outlined
                color="primary"
                class="mr-1"
                @click="foobar('some btn')"
              >
                <v-icon>mdi-content-copy</v-icon>
                some btn
              </v-btn>
              <v-btn tile depressed color="primary" @click="dialogInfo = true">
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text style="overflow-y: auto; min-height: 230px">
              <v-row>
                <v-col cols="12">
                  <v-chip class="ma-2" color="blue-grey lighten-4">
                    Sätze
                    <v-avatar right class="blue-grey lighten-3">
                      {{ sentences.length }}
                    </v-avatar>
                  </v-chip>
                  <v-chip class="ma-2" color="blue-grey lighten-4">
                    Einleitung
                    <v-avatar right style="background-color: yellow">
                      {{ einleitungenCount }}
                    </v-avatar>
                  </v-chip>
                  <v-chip class="ma-2" color="blue-grey lighten-4">
                    Verben
                    <v-avatar right style="background-color: lightgreen">
                      {{ goodVerbenCount }}
                    </v-avatar>
                  </v-chip>
                  <v-chip class="ma-2" color="blue-grey lighten-4">
                    ungeeigente Verben
                    <v-avatar right style="background-color: lightcoral">
                      {{ badVerbenCount }}
                    </v-avatar>
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3" class="d-flex justify-center">
                  <v-progress-circular
                    :rotate="270"
                    :size="120"
                    :width="15"
                    :value="score"
                    color="blue-grey"
                  >
                    {{ score }}
                  </v-progress-circular>
                </v-col>
                <v-col cols="3">
                  <v-card tile outlined class="thickBorderCard" height="120px">
                    <v-card-title class="text-h6">Spezifizierung</v-card-title>
                    <v-card-subtitle>
                      <v-progress-linear
                        :value="spezVal"
                        color="blue-grey"
                        height="15"
                      ></v-progress-linear>
                    </v-card-subtitle>
                  </v-card>
                </v-col>
                <v-col cols="3">
                  <v-card tile outlined class="thickBorderCard" height="120px">
                    <v-card-title class="text-h6"
                      >Performanz
                      <v-spacer></v-spacer>
                      <v-avatar v-if="perfVal === 100" size="25" color="green">
                        <v-icon>mdi-check</v-icon>
                      </v-avatar>
                    </v-card-title>
                    <v-card-subtitle>
                      <v-progress-linear
                        :value="perfVal"
                        color="blue-grey"
                        height="15"
                      ></v-progress-linear
                    ></v-card-subtitle>
                  </v-card>
                </v-col>
                <v-col cols="3">
                  <v-card tile outlined class="thickBorderCard" height="120px">
                    <v-card-title class="text-h6">Domäne</v-card-title>
                    <v-card-subtitle>
                      <v-progress-linear
                        :value="domVal"
                        color="blue-grey"
                        height="15"
                      ></v-progress-linear
                    ></v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-col>
    <v-col cols="12" sm="3">
      <v-sheet outlined color="black">
        <v-card outlined tile height="calc(100vh - 102px)">
          <!-- <v-card min-height="calc(80vh - 126px)" outlined> -->
          <v-toolbar flat dense tile>
            <v-toolbar-title>Vorschläge</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn tile depressed color="primary" @click="dialogInfo = true">
              <v-icon>mdi-information-outline</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text style="overflow-y: auto; height: calc(100vh - 162px)">
            <v-expansion-panels v-model="suggentionPanels" focusable multiple>
              <v-expansion-panel v-if="badVerbRule" @click="sperateHighlight()">
                <v-expansion-panel-header
                  >ungeeignete Verben</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <v-card flat>
                    <v-card-subtitle
                      >Vermeiden Sie verben wie "wissen". Es ist nicht
                      garantiert, dass die Studierenden nach Teilnahme am Modul
                      Sachverhalte direkt wissen.</v-card-subtitle
                    >
                    <v-card-actions>
                      <v-btn tile depressed color="error">ablehnen</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn tile depressed color="success">anwenden</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
    <v-dialog v-model="dialogInfo" width="1000" persistent>
      <v-card tile>
        <v-card-title class="text-h5 grey lighten-2">
          Information/Erklärung
        </v-card-title>
        <v-card-text>
          <div v-if="textareaInfo">
            <p>Dies ist das Eingabefeld für Ihre Kompetenztbeschreibung.</p>
            <p>
              Hier können Sie einen Freitext mit der Tastatur eigeben oder einen
              bereits geschieben Text einfügen.
            </p>
            <p>In dieser Version gibt es einige Einschränkungen:</p>
            <ul>
              <li>
                Es werden keine Zeilenumbrüche registriert. Bitte beachten Sie
                die vor und nach dem Einfügen.
              </li>
              <li>
                Es wird nur reiner Text unterstützt und keine Listen oder andere
                Formatierungmöglichkeiten.
              </li>
            </ul>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" tile @click="closeDialog()"> schließen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogAction" width="500" persistent>
      <v-card tile>
        <v-card-title class="text-h5 grey lighten-2"> Speichern </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12">
              Bitte geben Sie einen geeigenten Namen für Ihre
              Kompetenztbeschreibung an. Im Normafall ist der Name das Modul,
              für das die Kompentenzbeschreibung erstellt wurde.
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="compName"
                label="Name"
                placeholder="Name ggfs. Modul"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="error" tile @click="dialogAction = false">
            abbrechen</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="success" tile @click="saveComp()"> speichern</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import tokenizer from '../plugins/tokenizer'
import { db } from '../plugins/db'
// import levenshtein from '../plugins/levenshtein'

export default {
  data: () => ({
    highlightEnabled: true,
    textareaPlaceholder:
      'Schreiben Sie hier Ihre kompetenzbeschreibungen, fügen Sie einen Text mit STRG+V ein oder wählen Sie aus der rechten Leiste eine bestehende Beschreibung aus...',
    text: '',
    // selectedText: '',
    sentences: [],
    einleitungenWords: [],
    badVerben: [],
    goodVerben: [],
    tempScore: 0,
    einleitungenCount: 0,
    goodVerbenCount: 0,
    badVerbenCount: 0,
    highlight: [],
    score: 0,
    dialogInfo: false,
    textareaInfo: false,
    dialogAction: false,
    compName: null,
    statusFinal: false,
    spezVal: 0,
    perfVal: 0,
    domVal: 0,
    badVerbRule: false,
    suggentionPanels: [],
  }),
  computed: {
    compID() {
      return this.$store.getters.getCurrCompetenceID
    },
  },
  watch: {
    compID() {
      db.kompetenzbeschreibungen
        .where('id')
        .equals(this.compID)
        .toArray((result) => {
          this.text = result[0].text
        })
    },
    text() {
      // kleiner Workaround um die Verben zu zählen
      // da diese eine spezielle Farbe haben im Conteneditable werden sie darüber gesucht und in einer Nodelist abgelegt.
      // NodeList.length
      setTimeout(() => {
        const texBox = document.querySelector('#textBox')
        const goodVerbenCount = texBox.querySelectorAll(
          'span[style^="background-color:lightgreen;"]'
        )
        const badVerbenCount = texBox.querySelectorAll(
          'span[style^="background-color:lightcoral;"]'
        )
        const einleitungenCount = texBox.querySelectorAll(
          'span[style^="background-color:yellow;"]'
        )
        this.score = 0
        this.perfVal = 0
        this.goodVerbenCount = goodVerbenCount.length
        this.badVerbenCount = badVerbenCount.length
        this.einleitungenCount = einleitungenCount.length

        this.checkEinleitung()
        this.checkVerben()
      }, 500)
    },
  },
  mounted() {
    this.fillHighlight()
    // console.log(levenshtein.getDistance('auf', 'aufda'))
  },
  methods: {
    foobar(val) {
      alert(val)
      // console.log(val)
      // console.log(this.compID)
    },
    closeDialog() {
      // schließe Info-Dialog
      this.dialogInfo = false
      // setze alle Alternativen Dialoginfotext auf unsichtbar
      setTimeout(() => {
        this.textareaInfo = false
      }, 500)
    },
    selectCopyText() {
      // momentan nicht genutzt
      this.selectedText = document.getElementById('textBox')
      this.selectedText.select()
      document.execCommand('copy')
    },
    tokenizeIt(valTxt) {
      // sätze zählen und identifizieren pro satz
      setTimeout(() => {
        this.sentences = tokenizer.tokenizeSentence(valTxt)
        if (this.badVerbenCount > 0) {
          this.badVerbRule = true
        } else {
          this.badVerbRule = false
        }
      }, 200)
    },
    fillHighlight() {
      // entsprechende Einträge aus Tabelle holen und in Array pushen
      db.verben
        .toArray((verbenArr) => {
          verbenArr.forEach((item) => {
            this.goodVerben.push(item.verb)
            this.highlight.push({
              text: item.verb,
              style: 'background-color:lightgreen; padding:3px',
              caseSensitive: true,
            })
          })
        })
        .then(
          db.schlechteVerben.toArray((verbenArr) => {
            verbenArr.forEach((item) => {
              this.badVerben.push(item.verb)
              this.highlight.push({
                text: item.verb,
                style: 'background-color:lightcoral; padding:3px',
                caseSensitive: true,
              })
            })
          })
        )
        .then(
          db.einleitungen.toArray((einleitungen) => {
            einleitungen.forEach((item) => {
              this.einleitungenWords.push(item.person)
              this.einleitungenWords.push(item.adjektiv)
              this.einleitungenWords.push(item.teilnahme)
              this.highlight.push({
                text: item.person,
                style: 'background-color:yellow; padding:3px 0px 3px 3px',
                caseSensitive: false,
              })
              this.highlight.push({
                text: item.adjektiv,
                style: 'background-color:yellow; padding:3px 0px 3px 3px',
                caseSensitive: false,
              })
              this.highlight.push({
                text: item.teilnahme,
                style: 'background-color:yellow; padding:3px 0px 3px 3px',
                caseSensitive: false,
              })
            })
          })
        )
    },
    checkEinleitung() {
      const words = this.einleitungenWords
      const text = this.sentences[0].toLowerCase()
      for (let i = 0; i < words.length; i++) {
        if (text.includes(words[i])) {
          this.score = this.score + 10
        }
      }
    },
    checkVerben() {
      if (this.goodVerbenCount === this.sentences.length) {
        this.score = this.score + 70
        this.perfVal = this.perfVal + 25
      }
      const words = this.goodVerben
      this.tempScore = 0
      for (let i = 0; i < this.sentences.length; i++) {
        const text = this.sentences[i].toLowerCase()
        console.log(text)
        words.forEach((el) => {
          if (text.includes(el)) {
            // console.log(true)
            console.log(el)
            // this.score = this.score + 10
            this.tempScore = this.tempScore + 10
            this.perfVal = this.perfVal + 5
          } else {
            // this.tempScore = this.tempScore - 10
            console.log('bad')
          }
        })
        console.log(this.tempScore)
      }
    },
    sperateHighlight() {
      this.highlight.forEach((element) => {
        if (element.style === 'background-color:lightgreen; padding:3px') {
          // element.style = "background-color:white; padding:3px";
        } else {
          console.log(element.style)
        }
      })
    },
    saveComp() {
      this.dialogAction = false
      db.kompetenzbeschreibungen
        .add({
          name: this.compName,
          text: this.text,
          saetze: this.sentences.length,
          wertung: this.score,
          final: this.statusFinal,
        })
        .then((resID) => {
          this.$store.commit('setLastSavedCompetenceID', resID)
        })
    },
  },
}
</script>
<style scoped>
#textBox {
  padding: 15px;
  height: calc(70vh - 184px);
  overflow: auto;
  border: 1px solid black;
  font-size: 16px;
  color: black;
}
#textBox:focus {
  outline: 2px solid #1976d2;
  border-color: #1976d2;
}
[contenteditable='true']:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  color: grey;
  display: block; /* For Firefox */
}
.thickBorderCard {
  border-width: 2px !important;
}
</style>