<template lang='pug'>
  UiModal(
    name='error-login-exist'
    @beforeOpen='initData'
  )
    .login-exist
     h2.login-exist__title Пользователь уже существует!
     p.login-exist__subtitle Пользователь {{data.login}} уже существует
     UiButton(
        size='parent-width'
        @click.prevent='goToLogin'
      ) Войти
</template>

<script lang="ts">
import Vue from 'vue'
import formsFunctions from '~/mixins/formsFunctions'

export default Vue.extend({
  name: 'ErrorLoginExist',
  mixins: [formsFunctions],
  data() {
    return {
      data: {
        login: '',
      },
    }
  },
  methods: {
    initData(event: any) {
      console.log(event);
      this.data.login = event.ref.params
    },
    goToLogin(): void {
      this.$vfm.show('user-login', this.data.login)
      this.$vfm.hide('error-login-exist')
    }
  },
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";

.login-exist {
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 25px;

  }

  &__subtitle {
    font-size: 16px;
  }
}
</style>
