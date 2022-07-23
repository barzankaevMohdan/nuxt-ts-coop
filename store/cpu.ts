import api from '../services/CpuService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Cpu } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  cpu: [] as Cpu[]
})

export const mutations: MutationTree<RootState> = {
  addCpu(state, data) {
    state.cpu = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getCpu({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        commit('addCpu', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  cpu: (state) => state.cpu,
}
