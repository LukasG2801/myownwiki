import { createStore } from 'vuex'

export const store = createStore({
    state: {
        User: []
    },
    mutations: {
        set_user(state, user) {
            state.User = user
        }
    },
    getters: {
        get_user: state => state.User
    }
})