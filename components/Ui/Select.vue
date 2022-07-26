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
}
</script>

<style lang="scss">
:root {
  /* Размеры */
  --select-vertical-padding: var(--main-input-vertical-padding);
  --select-horizontal-padding: var(--main-input-horizontal-padding);
  --select-label-size: var(--main-input-label-size);
  --select-border-radius: var(--main-input-radius);
  --select-border-width: var(--main-input-border-width);
  --select-font-size: var(--main-size);

  /* Цвета */
  --select-background-color: var(--main-input-background-color);
  --select-border-color: var(--main-input-border-color);
  --select-text-color: var(--main-light);
}
</style>

<style lang="scss" scoped>
.select {
  width: 100%;
  max-width: 30ch;
  border: var(--select-border-width) var(--select-border-color);
  border-radius: var(--select-border-radius);
  padding: var(--select-vertical-padding) var(--select-horizontal-padding);
  font-size: var(--select-font-size);
  cursor: pointer;
  line-height: 1.1;
  background-color: var(--main-light);
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
</style>
