import Validator from  'validatorjs'
import { ErrorHandler, GetValidation } from '~/ts/interfaces'
import {validationNames, validationRules } from '~/ts/ValidationTypes'
import Vue from 'vue'


export default Vue.extend({
  data() {
    return {
      errors: {},
      data: {},
      isValidate: false,
    }
  },
  methods: {
    validationFails(): boolean {
      const validation = this._getValidation()
      this.errors = {}
      console.log(this._getValidation());

      if (validation.fails()) {
        this.errors = Object.entries(validation.errors.errors).reduce((acc, [key, errors]: any ) => {    //тут any потому что не понял что там нужно
          acc[key] = errors[0]
          console.log([key, errors]);

          return acc
        }, {} as ErrorHandler)

        this.isValidate = true

        return true
      }

      return false
    },
    _getValidation(): GetValidation {
      Validator.useLang('ru')
      const validator = new Validator(this.data, this.rules)
      console.log(this.rules);

      validator.setAttributeNames(this.attributeNames)

      console.log(validator);
      return validator
    },
  },
  computed: {
    attributeNames(): validationNames {
      return {} as validationNames
    },
    rules(): validationRules {
      return {} as validationRules
    },
  },
  watch: {
    data: {
      handler(): void {
        if (this.isValidate) {
          this.validationFails()
        }
      },
      deep: true,
    },
  },
})
