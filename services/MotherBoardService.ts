import axios from 'axios'
import $api from '~/http'

export default class MotherBoardService {
  static async getData() {
    return await axios.get('../motherboard.json')
  }
}
