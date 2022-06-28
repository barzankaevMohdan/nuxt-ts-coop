import api from '../services/HardDiscService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { HardDisc } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  disc: [] as HardDisc[]
})

export const mutations: MutationTree<RootState> = {
  addDisc(state, data) {
    state.disc = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getDisc({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        console.log(data);
        commit('addDisc', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  case: (state) => state.disc,
}
