# Kompetenzeditor

## KNOWN BUGS

- `kennen` und `erkennen` im gleichen Test führen zu unerwartetem Verhalten
  - kennen wird dann icht mehr als gutes Verb erkannt :(

## Setup

### **spaCy Server**

Dies ist ein vorgefertigter Docker-Container mit einer REST-API. 

Das wird diese Möglichkeit genutzt die eine vollständige REST API in einem Docker Container mit sich bringt https://github.com/bbieniek/spacy-api-docker

Die REST API Dokumentation ist hier zu finden: https://hub.docker.com/r/bbieniek/spacyapi/


#### **Lokale Möglichkeit:**

- Docker installieren
- Docker Container runterladen in der deutschen Version
- dazu in die Konsole eintippen:
  - `docker pull bbieniek/spacyapi:de_v3`
- in diesem Projekt wird standardmäßig der PORT `8080` genutzt
- Docker starten auf `http://127.0.0.1:8080/`:
  - `docker run -p "127.0.0.1:8080:80" bbieniek/spacyapi:de_v3`

#### **Digital Ocean:**

- App erstellen mit DockerHub direkt
- Repository: `bbieniek/spacyapi`
- Tag: `bbieniek/spacyapi:de_v3` für deutsches Model
- getestet mit `$5.00/mo – Basic 512 MB RAM | 1 vCPU  x  1`
- Problem ist, dass die UI nicht funktioniert hier

An dem `/ui` Endpoint wird eine UI zur Kontrolle erstellt.
Aus bis jetzt unerklärlichen Gründen funktioniert es jedoch nicht.
http://127.0.0.1:8080/ui/


-----------------------------------------------------


## NLP 

### **Liste der Tags/Abkuerzungen/POS**

| Tag | Description | Example |
|---|---|---|
| ADJA | attributive adjective (including participles used adjectivally) | das **große** Haus die **versunkene** Glocke |
| ADJD | predicate adjective; adjective used adverbially | der Vogel ist **blau** er fährt **schnell** |
| ADV | adverb (never used as attributive adjective) | sie kommt **bald** |
| APPR | preposition left hand part of double preposition | **auf** dem Tisch an der Straße entlang |
| APPRART | preposition with fused article | **am** Tag |
| APPO | postposition | meiner Meinung **nach** |
| APZR | right hand part of double preposition | an der Straße **entlang** |
| ART | article (definite or indefinite) | **die** Tante; **eine** Tante |
| CARD | cardinal number (words or figures); also declined | **zwei; 526; dreier** |
| FM | foreign words (actual part of speech in original language may be appended, e.g. FMADV/ FM-NN) | **semper fidem** |
| ITJ | interjection | **Ach**! |
| KON | co-ordinating conjunction | **oder** ich bezahle nicht |
| KOKOM | comparative conjunction or particle | er arbeitet **als** Straßenfeger, so gut **wie** du |
| KOUI | preposition used to introduce infinitive clause | **um** den König zu töten |
| KOUS | subordinating conjunction | **weil** er sie gesehen hat |
| NA | adjective used as noun | der **Gesandte** |
| NE | names and other proper nouns | **Fulda** |
| NN | noun (but not adjectives used as nouns) | der **Abend** |
| PAV [PROAV] | pronominal adverb | sie spielt **damit** |
| PAVREL | pronominal adverb used as relative | die Puppe, **damit** sie spielt |
| PDAT | demonstrative determiner | **dieser** Mann war schlecht |
| PDS | demonstrative pronoun | **dieser** war schlecht |
| PIAT | indefinite determiner (whether occurring on its own or in conjunction with another determiner) | **einige** Wochen, **viele solche** Bemerkungen |
| PIS | indefinite pronoun | sie hat **viele** gesehen |
| PPER | personal pronoun | **sie** liebt **mich** |
| PRF | reflexive pronoun | ich wasche **mich**, sie wäscht **sich** |
| PPOSS | possessive pronoun | das ist **meins** |
| PPOSAT | possessive determiner | **mein** Buch, das ist der **meine/meinige** |
| PRELAT | relative depending on a noun | der Mann, **dessen** Lied ich singe […], **welchen** Begriff ich nicht verstehe |
| PRELS | relative pronoun (i.e. forms of der or welcher) | der Herr, **der** gerade kommt; der Herr, **welcher** nun kommt |
| PTKA | particle with adjective or adverb | **am** besten, **zu** schnell, **aufs** herzlichste |
| PTKANT | answer particle | **ja, nein** |
| PTKNEG | negative particle | **nicht** |
| PTKREL | indeclinable relative particle | **so** |
| PTKVZ | separable prefix | sie kommt **an** |
| PTKZU | infinitive particle | **zu** |
| PWS | interrogative pronoun | **wer** kommt? |
| PWAT | interrogative determiner | **welche** Farbe? |
| PWAV | interrogative adverb | **wann** kommst du? |
| PWAVREL | interrogative adverb used as relative | der Zaun, **worüber** sie springt |
| PWREL | interrogative pronoun used as relative | etwas, **was** er sieht |
| TRUNC | truncated form of compound | **Vor-** und Nachteile |
| VAFIN | finite auxiliary verb | sie **ist** gekommen |
| VAIMP | imperative of auxiliary | **sei** still! |
| VAINF | infinitive of auxiliary | er wird es gesehen **haben** |
| VAPP | past participle of auxiliary | sie ist es **gewesen** |
| VMFIN | finite modal verb | sie **will** kommen |
| VMINF | infinitive of modal | er hat es sehen **müssen** |
| VMPP | past participle of auxiliary | sie hat es **gekonnt** |
| VVFIN | finite full verb | sie **ist** gekommen |
| VVIMP | imperative of full verb | **bleibt** da! |
| VVINF | infinitive of full verb | er wird es **sehen** |
| VVIZU | infinitive with incorporated zu | sie versprach **aufzuhören** |
| VVPP | past participle of full verb | sie ist **gekommen** |

*Tabelle-Quelle: https://www.sketchengine.eu/german-stts-part-of-speech-tagset/*


-----------------------------------------------------------

## Libaries/Frameworks
### used / unused
- [x] [vue.js](https://vuejs.org/)
- [x] [vuetify](https://vuetifyjs.com/en/)
- [ ] [vue-word-highlighter](https://github.com/kawamataryo/vue-word-highlighter)
- [ ] [vue-text-highlight](https://github.com/AlbertLucianto/vue-text-highlight)
- [ ] [wink-nlp ](https://github.com/winkjs/wink-nlp)
- [ ] [natural](http://naturalnode.github.io/natural/)
- [ ] [nlp.js](https://github.com/axa-group/nlp.js)
- [ ] [vue-contenteditable](https://github.com/hl037/vue-contenteditable)
- [x] [vue-highlightable-input](https://github.com/SyedWasiHaider/vue-highlightable-input)
- [x] [dexie](https://dexie.org/)
- [x] [js-levenshtein](https://github.com/gustf/js-levenshtein)
- [ ] [nnsplit](https://github.com/bminixhofer/nnsplit) 
- [ ] [spacy](https://github.com/ines/spacy-js)
- [ ] [spacy-nlp](https://github.com/kengz/spacy-nlp)
- [x] [vue-contenteditable](https://github.com/hl037/vue-contenteditable) 

## Ideen
- evtl. doch auf eine Client Server Arch setzen
  - so kann man zb auf **spacy** oder **opennlp** setzen und von diesen auf einem Server eine Rest API zur Verfügung stellen lassen
  - https://spacy.io/usage/rule-based-matching
    - https://github.com/ines/spacy-js
  - https://opennlp.apache.org/
    - https://github.com/rbehzadan/opennlp-service


# From here it's just nuxt.js default stuff:

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
