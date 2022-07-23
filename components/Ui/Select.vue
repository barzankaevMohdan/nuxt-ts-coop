<template lang="pug">
  select.select(@input="$emit('input', $event.target.value)")
    option(
      :value='item.id'
      v-bind="$attrs"
      v-for='item in items'
    ) {{item.name}}
</template>

<script>
export default {
  name: 'Select',
  props: {
    items: {
      type: []
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  max-width: 30ch;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
</style>
