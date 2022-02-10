export const state = () => ({
    reality: []
})

export const mutations = {
    setDat(state, data) {
        state.reality = data
    }
}

export const actions = {
    sendDat({commit}, data) {
        commit('setDat', data)
    }
}