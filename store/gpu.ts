import api from '../services/GpuService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Gpu } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

interface gpuData {
  name: string,
  description: string,
  img: string,
  manufacturer: string,
  memory: number,
  gpu_manufacturer: string,
  memory_type: string
}

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
        commit('addGpu', data.data)
       })
    })
  },
  postGpu({}, gpuData: gpuData) {
    return new Promise((resolve, reject) => {
      api
        .postData(
          gpuData.name,
          gpuData.description,
          gpuData.img,
          gpuData.manufacturer,
          gpuData.memory,
          gpuData.gpu_manufacturer,
          gpuData.memory_type
        )
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  gpu: (state) => state.gpu,
  gpuById:(state) => (id: string | number) => state.gpu.find(el => el.id === id)
}
