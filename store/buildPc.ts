import api from '../services/PcService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  buildPcCart: [] as any
})

export const mutations: MutationTree<RootState> = {
  addPcCart(state, data) {
    if(state.buildPcCart.length) {
      let productEx = false
      state.buildPcCart.map((el: { pc: { id: any }; amount: number }) => {
        if(el.pc.id === data.pc.id) {
          productEx = true
          el.amount++
        }
      })
      if(!productEx){
        state.buildPcCart.push(data)
       }
    }
    else {
      state.buildPcCart.push(data)
    }
  },
  buildIncrement(state, id) {
    state.buildPcCart.forEach((el: { pc: { id: any }; amount: number }) => {
      if(el.pc.id === id) {
        el.amount++
      }
    });
  },
  buildDiscrement(state, id) {
    state.buildPcCart.forEach((el: { pc: { id: any }; amount: number }) => {
      if(el.pc.id === id) {
        el.amount--
      }
    });
  },
  buildDeletePc(state, id) {
    state.buildPcCart = state.buildPcCart.filter((el: { pc: any }) => el.pc.id !== id)
  }
}

export const actions: ActionTree<RootState, RootState> = {

}


export const getters: GetterTree<RootState, RootState> = {
  newPc: (state) => state.buildPcCart,
}
