<template lang='pug'>
 UiModal(
      name='user-registration'
      @beforeOpen='initData'
    )
  form.reg-form(
      @submit.prevent='submit'
    )
    UiInput(
        v-model.trim='data.name'
        :error='errors["name"]'
        placeholder="Имя"
      )

    UiInput.reg-form__field(
        v-model.trim='data.last_name'
        :error='errors["last_name"]'
        placeholder='Фамилия'
      )

    UiInput.reg-form__field(
        v-model.trim='data.login'
        :error='errors["login"]'
        placeholder='Ваш e-mail'
      )

    UiInput.reg-form__field(
        v-model.trim='data.password'
        :error='errors["password"]'
        :type='typeOfPasswordInput'
        placeholder="Пароль"
      )
      template(#btn)
        button.reg-form__button-eye(
          @click.prevent="showPassword"
        )
          SvgIcon.reg-form__eye-icon(name="eye-icon")

    UiInput.reg-form__field(
      v-model.trim='data.password_confirmation'
      :error='errors["password_confirmation"]'
      :type='typeOfPasswordInput'
      placeholder="Повторите пароль"
    )
      template(#btn)
        button.reg-form__button-eye(
          @click.prevent="showPassword"
        )
          SvgIcon.reg-form__eye-icon(name="eye-icon")

    .reg-form__footer
      span.reg-form__error(v-if='serverError') {{serverError}}
      UiButton(
        size='parent-width'
        :isLoading='isLoading'
      ) Регистрация
</template>

<script lang="ts">
import Vue from 'vue'
import formsFunctions from '~/mixins/formsFunctions'

export default Vue.extend({
  name: 'RegistrationModal',
  mixins: [formsFunctions],
  data() {
    return {
      data: {
        login: '',
        password: '',
        name: '',
        last_name: '',
      },
      typeOfPasswordInput: 'password',
    }
  },
  methods: {
    async componentHandler(): Promise<void> {
      const userData = {
        email: this.data.login.toLowerCase().trim(),
        login: this.data.login.toLowerCase().trim(),
        name: `${this.data.name} ${this.data.last_name}`,
        password: this.data.password,
      }

      await this.$store.dispatch('user/registration', userData)
    },
    showPassword(): void {
      this.typeOfPasswordInput = this.typeOfPasswordInput === 'password' ? 'text' : 'password'
    },
  },
  computed: {
    rules() {
      const baseFieldsRules = {
        name: 'required|min:2',
        last_name: 'required|min:2',
        login: ['required', 'email'],
        password: 'required|min:8|confirmed',
      }
      return baseFieldsRules
    },
    attributeNames() {
      return {
        name: "имя",
        last_name: 'фамилия',
        login: 'e-mail',
        password: 'пароль',
      }
    },
  },
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";

</style>
