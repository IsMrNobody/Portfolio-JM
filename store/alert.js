export const state = () => ({
    alert: false
})

export const mutations = {
    setAlert(state, data){
        state.alert = data
        console.log(state.alert)
    }
}

export const actions = {
    activAlert({ commit }, data) {
        commit('setAlert', data)
        setTimeout(() => {
            commit('setAlert', false)
        }, 4000);
    }
}