<template lang="pug">
  div(ref='modalRoot')
    ModalsForgotPassword
    ModalsErrorLoginExist
    ModalsErrorUserNotFound
    ModalsRegistration
    ModalsLogin
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AllMainModalsHere',
})
</script>
