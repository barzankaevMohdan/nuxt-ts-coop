import axios from 'axios'
import $api from '~/http'

export default class PsuService {
  static async getData() {
    return await axios.get('../psu.json')
  }
}
