<template lang='pug'>
 UiModal(
      name='user-login'
      @beforeOpen='initData'
    )
  form.reg-form(
      @submit.prevent='submit'
    )
    UiInput(
      v-model.trim='data.login'
      :error='errors["login"]'
      placeholder="Логин"
    )
    UiInput.auth-form__field(
      v-model.trim='data.password'
      type="password"
      :error='errors["password"]'
      placeholder="Пароль"
    )
    span.auth-form__error(v-if='serverError') {{serverError}}
    .auth-form__footer
      UiButton(
        size='parent-width'
        :isLoading='isLoading'
      ) Войти
      UiButton(
        size='parent-width'
        theme='fill-additional'
        @click.prevent='forgotYourPassword'
      ) Напомнить пароль
</template>

<script lang="ts">
import Vue from 'vue'
import formsFunctions from '~/mixins/formsFunctions'
import {IUserData} from '~/store/user'

export default Vue.extend({
  name: 'LoginForm',
  data() {
    return {
      data: {
        login: '',
        password: '',
      },
    }
  },
  mixins: [formsFunctions],
  methods: {
    initData(event: any) {
      console.log(event);
      this.data.login = event.ref.params
    },
    // login functions
    async componentHandler(): Promise<void> {
      const userData = {
        email: this.data.login.toLowerCase().trim(),
        password: this.data.password,
      }

      await this.$store.dispatch('user/logIn', userData)

      this.$vfm.hide('authenticate')
    },
    forgotYourPassword(): void {
      this.$vfm.hide('authenticate')
      this.$vfm.show('password-forgot', this.data.login)
    },
  },
  computed: {
    rules() {
      return {
        login: 'required|email',
        password: 'required|min:6',
      }
    },
    attributeNames() {
      return {
        login: 'логин',
        password: 'пароль',
      }
    },
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

.auth-form {
  &__field {
    margin-top: 20px;
  }

  &__footer {
    margin-top: 30px;
  }

  &__error {
    display: block;
    font-size: var(--main-input-label-size);
    line-height: 1.4;
    color: var(--main-danger-color);
    margin: var(--main-input-label-offset-top) 0 0 var(--main-input-label-offset-left);
  }
}
</style>
