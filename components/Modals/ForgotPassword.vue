<template lang='pug'>
  UiModal(
    name='password-forgot'
    @beforeOpen='initData'
  )
    UiInput(
      v-model.trim='data.login'
      :error='errors["login"]'
      placeholder="Логин"
    )
    template(v-slot:footer)
      UiButton(
        @click.prevent='submit'
        :isLoading='isLoading'
      ) Востановить пароль
</template>

<script lang="ts">
import Vue from 'vue'
import formsFunctions from '~/mixins/formsFunctions'

export default Vue.extend({
  name: 'ForgotPassword',
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
    close() {
      this.$vfm.hide('password-forgot')
    },
    async componentHandler() {
      await this.$store.dispatch('user/forgotPassword', this.data.login)
      this.close()
      this.$vfm.show('success', this.data.login)
    },
  },
  computed: {
    rules() {
      return {
        login: 'required|email',
      }
    },
    attributeNames() {
      return {
        login: 'логин',
      }
    },
  },
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";

.modal-icon {
  width: 70px;
  height: 70px;
  fill: var(--main-color);
}
</style>
