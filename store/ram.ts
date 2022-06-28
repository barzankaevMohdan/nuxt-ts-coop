import api from '../services/RamService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Ram } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  ram: [] as Ram[]
})

export const mutations: MutationTree<RootState> = {
  addRam(state, data) {
    state.ram = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getRam({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        console.log(data);
        commit('addRam', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  case: (state) => state.ram,
}
