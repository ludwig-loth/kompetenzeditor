// import Vue from 'vue'
// Vue.mixin({
//   methods: {
//     removeLineBreaks(txt) {
//       return txt.replace(/[\n\r\t\s]+/g, ' ').trim();
//     },
//     getSentences(txt) {
//       console.log(txt)
//     },
//   },
// })

// const sentenceDelimiters = /\.|!|\?/;

class Tokenizer {
    // remove all sorts of line breaks from the input text
  removeLineBreaks(valTxt) {
    return valTxt.replace(/[\n\r\t\s]+/g, ' ').trim()
  }

  tokenizeSentence(valTxt) {
    // return this.removeLineBreaks(valTxt).split(/\.\B|!|\?/g);
    // return this.removeLineBreaks(valTxt).split(/((?:[A-Z]\.|[^.!?])+)[.!?]/g)
  
    // TODO find a better RegEX that handles shorthands better
    return this.removeLineBreaks(valTxt).split(/(?<!\w\.!?\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/gm);
    // return valTxt.split(/(?<!\w\.!?\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/gm);
  }
}

export default new Tokenizer()
