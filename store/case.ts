import api from '../services/CaseService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Case } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  case: [] as Case[]
})

export const mutations: MutationTree<RootState> = {
  addCase(state, data) {
    state.case = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getCase({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        commit('addCase', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  case: (state) => state.case,
}
