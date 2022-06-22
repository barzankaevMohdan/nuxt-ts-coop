<template lang='pug'>
  UiModal(
    name='error-user-not-found'
    @beforeOpen='initData'
  )
    template(v-slot:title) Пользователь не найден!
    template(v-slot:default) Пользователь с почтой {{data.login}} не найден
    template(v-slot:footer)
      UiButton(
       @click.prevent='goToRegistration'
      ) Зарегистрироваться
</template>

<script lang="ts">
import Vue from 'vue'
import formsFunctions from '~/mixins/formsFunctions'

export default Vue.extend({
  name: 'ErrorUserNotFound',
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
    goToRegistration(): void {
      this.$vfm.show('user-registration', this.data.login)
      this.$vfm.hide('error-user-not-found')
    }
  },
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";

</style>
