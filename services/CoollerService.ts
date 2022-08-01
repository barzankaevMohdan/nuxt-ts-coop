import axios from 'axios'
import $api from '~/http'

export default class CoollerService {
  static async getData() {
    return await axios.get('../cooller.json')
  }
}
