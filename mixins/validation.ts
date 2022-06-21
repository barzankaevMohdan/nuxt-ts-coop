import Validator from  'validatorjs'
import { ErrorHandler, GetValidation } from '~/validation/validation-interface'
import {AttributeNamesType, RulesTypes } from '~/validation/validation-types'
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

      if (validation.fails()) {
        this.errors = Object.entries(validation.errors.errors).reduce((acc, [key, errors]: any ) => {
          acc[key] = errors[0]

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
      validator.setAttributeNames(this.attributeNames)
      return validator
    },
  },
  computed: {
    attributeNames(): AttributeNamesType {
      return {} as AttributeNamesType
    },
    rules(): RulesTypes {
      return {} as RulesTypes
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
