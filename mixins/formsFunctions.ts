import validation from './validation'
import Vue from 'vue'
import { DataType, Messages } from '~/ts/interfaces'
import { LoaderOptionsPlugin } from 'webpack'


export default Vue.extend({
  mixins: [validation],
  data() {
    return {
      data: {} as DataType,
      isLoading: false,
      serverError: ''
    }
  },
  methods: {
    async submit():Promise<void> {
      if (this.isLoading) {
        return
      }

      if (this.validationFails()) {
        return
      }
      this.serverError = ''
      this.isLoading = true

      try {
        await this.componentHandler()
      } catch (error : any) {   // цхьа clutch бохш бид буьц поэтлму any
        console.log(error);

        if (error.message) {
          try {
            this.errorHandler(error)
          } catch (e : any) {     // цхьа clutch бохш бид буьц поэтлму any
            console.log('base error catcher', e)
            this.serverError = e.message
          }
          return
        }

        this.serverError = error.toLocaleString()
      } finally {
        this.isLoading = false
      }
    },
    errorHandler(serverError : Messages) {
      console.log('try to detect error', serverError)
      console.log(this.data);


      if (['Возникли ошибки: Login уже существует'].includes(serverError.message)) {
        this.$vfm.show('error-login-exist', this.data.login)
        return
      }

      if (['user not found'].includes(serverError.message)) {
        this.$vfm.show('error-user-not-found', this.data.login)
        return
      }

      // если не удалось найти соответствующую модалку - выводим ошибку под формой по умолчанию
      throw new Error(serverError.message)
    },
    async componentHandler() {},
  },
})


