import axios from 'axios'
import $api from '~/http'

export default class RamService {
  static async getData() {
    return await axios.get('../ram.json')
  }
}
