import axios from 'axios'
import $api from '~/http'

export default class HardDiscService {
  static async getData() {
    return await axios.get('../hard-disc.json')
  }
}
