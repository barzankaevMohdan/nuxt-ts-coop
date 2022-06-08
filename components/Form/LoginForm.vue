<template lang='pug'>
  form.auth-form(
    @submit.prevent='submit'
  )
    UiInput(
      v-model.trim='data.email'
      :error='errors["email"]'
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
        email: '',
        password: '',
      },
    }
  },
  mixins: [formsFunctions],
  methods: {
    // login functions
    async componentHandler(): Promise<void> {
      const userData = {
        email: this.data.email.toLowerCase().trim(),
        password: this.data.password,
      }

      await this.$store.dispatch('user/logIn', userData)

      this.$vfm.hide('authenticate')
    },
    forgotYourPassword(): void {
      this.$vfm.hide('authenticate')
      this.$vfm.show('password-forgot', this.data.email)
    },
  },
  computed: {
    rules() {
      return {
        email: 'required|email',
        password: 'required|min:6',
      }
    },
    attributeNames() {
      return {
        email: 'логин',
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
