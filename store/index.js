// holds your root state
export const state = () => ({
  currCompetenceID: null,
  lastSavedCompetenceID: null,
  // contentEditableTxt: [''],
})

// contains your actions
export const actions = {}

// contains your mutations
export const mutations = {
  setCurrCompetenceID(state, id) {
    state.currCompetenceID = id
  },
  setLastSavedCompetenceID(state, id) {
    state.lastSavedCompetenceID = id
  },
  // setCreatePostText(state, payload) {
  //   state.contentEditableTxt[0] = payload
  // },
}
// your root getters
export const getters = {
  getCurrCompetenceID(state) {
    return state.currCompetenceID
  },
  getLastSavedCompetenceID(state) {
    return state.lastSavedCompetenceID
  },
}
