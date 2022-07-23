import api from '../services/CoollerService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Cooller } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  cooller: [] as Cooller[]
})

export const mutations: MutationTree<RootState> = {
  addColler(state, data) {
    state.cooller = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getCooller({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        commit('addColler', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  cooller: (state) => state.cooller,
}
