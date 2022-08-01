import axios from 'axios'
import $api from '~/http'

export default class CpuService {
  static async getData() {
    return await axios.get('../cpu.json')
  }
}
