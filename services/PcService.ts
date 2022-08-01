import axios from 'axios'
import $api from '~/http'

export default class PcService {
  static async getData() {
    return await axios.get('../pc.json')
  }
}
