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
  buildPc: {},
  buyPc: [] as any
})

export const mutations: MutationTree<RootState> = {
  addPc(state, data) {
    state.pc = data
  },
  addBuildPc(state, data) {
    state.buildPc = data
  },
  addBuyPc(state, data) {
    if(state.buyPc.length) {
      let productEx = false
      state.buyPc.map((el: { pc: { id: any }; amount: number }) => {
        if(el.pc.id === data.pc.id) {
          productEx = true
          el.amount++
        }
      })
      if(!productEx){
        state.buyPc.push(data)
       }
    }
    else {
      state.buyPc.push(data)
    }
  },
  increment(state, index) {
    state.buyPc[index].amount++
  },
  discrement(state, index) {
    state.buyPc[index].amount--
  },
  deletePc(state, id) {
    state.buyPc = state.buyPc.filter((el: { pc: any }) => el.pc.id !== id)
  }
}

export const actions: ActionTree<RootState, RootState> = {
  getPc({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        commit('addPc', data.data)
       })
    })
  },
}

export const getters: GetterTree<RootState, RootState> = {
  pc: (state) => state.pc,
  newPc: (state) => state.buildPc,
  id: (state) => (id: string|number) => state.pc.find(el => el.id === id),
  buyPc: (state) => state.buyPc
}
