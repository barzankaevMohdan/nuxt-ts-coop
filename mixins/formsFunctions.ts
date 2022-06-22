import validation from './validation'
import mixins from 'vue-typed-mixins'
import { DataType, Messages } from '~/types/validation/validation-interface'

export default mixins(validation).extend({
  data() {
    return {
      data: {} as DataType,
      isLoading: false,
      serverError: '',
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
      } catch (error : any) {

        if (error.message) {
          try {
            this.errorHandler(error)
          } catch (e : any) {
            console.log('base error catcher')
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

      if (['Возникли ошибки: Login уже существует'].includes(serverError.message)) {
        this.$vfm.show('error-login-exist', this.data.login)
        return
      }

      if (['user not found'].includes(serverError.message)) {
        this.$vfm.show('error-user-not-found', this.data.login)
        console.log(this.data);
        return
      }

      // если не удалось найти соответствующую модалку - выводим ошибку под формой по умолчанию
      throw new Error(serverError.message)
   },
    async componentHandler() {},
 },
})


