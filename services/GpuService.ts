import axios from 'axios'
import $api from '~/http'

export default class GpuService {
  static async getData() {
    return await axios.get('../gpu.json')
  }

  static async postData(name: string, description: string, img: string, manufactures: string, memory: number, gpu_manufactures: string, memory_type: string) {
    return await axios.post('')
  }
}
