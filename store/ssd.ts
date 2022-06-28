import api from '../services/SsdService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Ssd } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  ssd: [] as Ssd[]
})

export const mutations: MutationTree<RootState> = {
  addSsd(state, data) {
    state.ssd = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getSsd({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        commit('addSsd', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  case: (state) => state.ssd,
}
