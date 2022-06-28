import api from '../services/PsuService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Psu } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  psu: [] as Psu[]
})

export const mutations: MutationTree<RootState> = {
  addPsu(state, data) {
    state.psu = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getPsu({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        commit('addPsu', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  case: (state) => state.psu,
}
