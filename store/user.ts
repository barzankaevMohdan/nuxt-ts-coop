import api from '../services/AuthService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'


export interface IUser {
  id: string,
  name: string,
  email: string,
  isActivated: Boolean
}

export interface IUserData {
  email: string
  password: string
  name: string
}

export interface iRecoveryData {
  link: string
  password: string
}

export type RootState = ReturnType<typeof state>

export const state = () => ({
  user: {name:'halid'} as IUser,
  token: true,
  isLoading: false,
})

export const mutations: MutationTree<RootState> = {
  clear(state) {
    state.isLoading = false
    state.user = {} as IUser
    state.token = null
    localStorage.removeItem('token')
  },
  update(state, {token, user}) {
    if (user) {
      state.user = user
    }
    if (token) {
      state.token = token
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  registration({commit, rootGetters}, userData: IUserData) {
    return new Promise((resolve, reject) => {
      api
        .registration(
          userData.email,
          userData.name,
          userData.password
        )
        .then((data) => {
          localStorage.setItem('token', data.data.accessToken)
          commit('update', data.data)
          resolve(data.data)
        })
        .catch((error) => {
          if (error.response.data) {
            reject(error.response.data)
          }
          reject(error)
        })
    })
  },
  logIn({commit}, userData: IUserData) {
    return new Promise((resolve, reject) => {
      api
        .login(
          userData.email,
          userData.password,
        )
        .then((data) => {
          localStorage.setItem('token', data.data.accessToken)
          commit('update', data.data)
          resolve(data.data)
        })
        .catch((error) => {
          if (error.response.data) {
            reject(error.response.data)
          }
          reject(error)
        })
    })
  },
  checkAuth({commit, state}) {
    const token = localStorage.getItem('token') as string
    return new Promise((resolve, reject) => {
      api
        .refresh(token)
        .then((data) => {
          localStorage.setItem('token', data.data.accessToken)
          commit('update', data.data)
          resolve(data.data)
        })
        .catch((error) => {
          if (error.response.data) {
            reject(error.response.data)
          }
          reject(error)
        })
    })
  },
  forgotPassword({commit, state}, login: string) {
    return new Promise((resolve, reject) => {
      api
        .forgotPassword(login)
        .then((data) => {
          resolve(data.data)
        })
        .catch((error) => {
          if (error.response.data) {
            reject(error.response.data)
          }
          reject(error)
        })
    })
  },
  recovery({commit, state}, recoveryData: iRecoveryData) {
    return new Promise((resolve, reject) => {
      api
        .recovery(
          recoveryData.link,
          recoveryData.password
        )
        .then((data) => {
          localStorage.setItem('token', data.data.accessToken)
          commit('update', data.data)
          resolve(data.data)
        })
        .catch((error) => {
          if (error.response.data) {
            reject(error.response.data)
          }
          reject(error)
        })
    })
  },
  async logOut({commit}) {
    const token = localStorage.getItem('token') as string
    await api.logout(token)
    commit('clear')
  },
}

export const getters: GetterTree<RootState, RootState> = {
  user: (state) => state.user,
  token: (state) => state.token,
  isAuth: (state) => !!state.token,
  id: (state) => state.user.id,
}
