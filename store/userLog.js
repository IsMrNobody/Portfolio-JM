export const state = () => ({
    animation: true
})

export const mutations = {
    setPlay(state, dat) {
        state.animation = dat
    }
}

export const actions = {
    play({ commit }, dat) {
        commit('setPlay', dat)
    }
}