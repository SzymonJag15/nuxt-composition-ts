import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  name: 'Me',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  name: (state) => state.name,
}

export const mutations: MutationTree<RootState> = {
  CHANGE_NAME: (state, newName: string) => (state.name = newName),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchThings({ commit }) {
    await this.$axios.$get('/things')
    commit('CHANGE_NAME', 'New name')
  },
}
