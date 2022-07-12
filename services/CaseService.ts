import axios from 'axios'
import $api from '~/http'

export default class CaseService {
  static async getData() {
    return await axios.get('../case.json')
  }

  static async postData(name: string, description: string, img: string, manufactures: string,  dimension_type: string, power_placement: string, color: string, cpu_cooller_height: string, board_form_factor: [string]) {
    return await axios.post('')
  }
}
