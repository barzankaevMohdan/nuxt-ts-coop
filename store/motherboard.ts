import api from '../services/MotherBoardService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { MotherBoard } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  motherBoard: [] as MotherBoard[]
})

export const mutations: MutationTree<RootState> = {
  addMotherBoard(state, data) {
    state.motherBoard = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getMotherBoard({commit}) {
    return new Promise((resolve, reject) => {
      api
       .getData().then((data) => {
        commit('addMotherBoard', data.data)
       })
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  motherBoard: (state) => state.motherBoard,
}
