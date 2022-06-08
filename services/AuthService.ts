import $api from '~/http'

export default class AuthService {
  static async login(email: string, password: string) {
    return await $api.post('/user/login', {email, password})
  }

  static async registration(email: string, password: string, name: string) {
    return await $api.post('/user/registration', {email, password, name})
  }

  static async logout(token: string) {
    return await $api.post('/user/logout', {token})
  }

  static async refresh(token: string) {
    return await $api.post('/user/refresh', {token})
  }

  static async forgotPassword(login: string) {
    return await $api.post('/user/recovery', {login})
  }

  static async recovery(link: string, password: string) {
    return await $api.post(`/user/recovery/${link}`, {password})
  }
}
