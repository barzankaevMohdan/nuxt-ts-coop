<template lang='pug'>
 UiModal(name='user-login')
    FormLogin
</template>

<script lang="ts">
import Vue from 'vue'
import {IUserData} from '~/store/user'

export default Vue.extend({
  name: 'LoginForm',

})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

</style>
