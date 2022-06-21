<template lang='pug'>
  UiModal(
    name='error-user-not-found'
    @beforeOpen='initData'
  )
   .not-found
     h2.not-found__title Пользователь не найден!
     p.not-found__subtitle Пользователь с почтой {{data.login}} не найден
     UiButton(
        size='parent-width'
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
      console.log(event);
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

.not-found {
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
