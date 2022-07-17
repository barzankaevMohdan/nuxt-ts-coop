import api from '../services/PcService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { Gpu, Cpu, Ssd, Cooller, HardDisc, MotherBoard, Case, Psu, Ram } from "~/types/pc/pc-interfaces"

export interface Pc {
  id: string,
  name: string,
  price: string,
  description: string,
  picture: string,
  gpu: Gpu,
  cpu: Cpu,
  ram: Ram,
  ssd: Ssd,
  cooller: Cooller,
  hard_disc: HardDisc,
  motherboard: MotherBoard,
  case: Case,
  psu: Psu
}

export type RootState = ReturnType<typeof state>

export const state = () => ({
  pc: [] as Pc[],
})

export const mutations: MutationTree<RootState> = {
  addPc(state, data) {
    state.pc = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getPc({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        commit('addPc', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  pc: (state) => state.pc,
  id: (state) => (id: string|number) => state.pc.find(el => el.id === id)
}
