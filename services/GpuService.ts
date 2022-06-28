import axios from 'axios'
import $api from '~/http'

export default class GpuService {
  static async getData() {
    return await axios.get('../gpu.json')
  }
}
