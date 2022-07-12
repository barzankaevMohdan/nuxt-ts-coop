import api from '../services/CaseService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Case } from '~/types/pc/pc-interfaces'

export type RootState = ReturnType<typeof state>

interface caseData {
  name: string,
  description: string,
  img: string,
  manufacturer: string,
  dimension_type: string,
  power_placement: string,
  cpu_cooller_height: number,
  height: number,
  board_form_factor: [string],
  color: string
}

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
  },
  postCase({}, caseData) {
    return new Promise((resolve, reject) => {
      api
        .postData(
          caseData.name,
          caseData.description,
          caseData.img,
          caseData.manufacturer,
          caseData.dimension_type,
          caseData.power_placement,
          caseData.color,
          caseData.cpu_cooller_height,
          caseData.board_form_factor
        )
    })
  }
}

export const getters: GetterTree<RootState, RootState> = {
  case: (state) => state.case,
}
