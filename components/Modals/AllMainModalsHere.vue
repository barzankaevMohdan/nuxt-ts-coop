<template lang="pug">
  div(ref='modalRoot')
    ModalsForgotPassword
    ModalsErrorLoginExist
    ModalsErrorUserNotFound
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AllMainModalsHere',
})
</script>
