<template lang='pug'>
  UiModal(name='user-login')
    FormLogin
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginForm',

})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

</style>
