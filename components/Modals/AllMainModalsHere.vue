<template lang="pug">
  div(ref='modalRoot')
    ModalsForgotPassword
    ModalsErrorLoginExist
    ModalsErrorUserNotFound
    ModalsRegistration
    ModalsLogin
    ModalsCase
    ModalsGpu
    ModalsSucces
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AllMainModalsHere',
})
</script>
