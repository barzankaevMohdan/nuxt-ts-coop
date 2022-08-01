<template lang='pug'>
  UiModal(
    name='error-login-exist'
    @beforeOpen='initData'
  )
    template(v-slot:title) Пользователь уже существует!
    template(v-slot:default) Пользователь {{data.login}} уже существует
    template(v-slot:footer)
      UiButton(
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
      this.data.login = event.ref.params
    },
    goToLogin(): void {
      this.$vfm.hide('user-login', this.data.login)
      this.$vfm.show('error-login-exist')
    }
  },
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";

</style>
