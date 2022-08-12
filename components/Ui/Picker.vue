<template lang='pug'>
  div.picker
    UiInput(
      @handleKeypress='handleKeypress'
      v-model='tag'
      v-bind="$attrs"
    )
    .picker__tags
      span.picker__tag(v-for='tag in tags') {{tag}}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Picker',
  props: {
    tags: {
      type: Array
    }
  },
  data() {
    return {
      tag: ''
    }
  },
  methods: {
    handleKeypress(): any {
      if (!this.tag) return
      this.$emit('handleKeypress', this.tag)
    }
  }
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.picker {
  color: #fff;

  &__tags {
    display: flex;
    margin-top: 15px;
  }

  &__tag {
    margin-right: 25px;
    font-size: 25px;
  }
}
</style>
