import axios from 'axios'
import $api from '~/http'

export default class CaseService {
  static async getData() {
    return await axios.get('../case.json')
  }
}
