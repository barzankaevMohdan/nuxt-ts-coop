import axios from 'axios'
import $api from '~/http'

export default class SsdService {
  static async getData() {
    return await axios.get('../ssd.json')
  }
}
