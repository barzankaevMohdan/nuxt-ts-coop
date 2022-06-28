import api from '../services/GpuService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Gpu } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  gpu: [] as Gpu[]
})

export const mutations: MutationTree<RootState> = {
  addGpu(state, data) {
    state.gpu = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getGpu({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        console.log(data);
        commit('addGpu', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  case: (state) => state.gpu,
}
