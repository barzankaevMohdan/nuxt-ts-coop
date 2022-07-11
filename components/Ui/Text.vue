<template lang="pug">
  span(
    class="text"
    :class="`text_size-${size}`"
  )
   <slot/>
</template>

<script>
export default {
  name: 'Text',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
  },
}
</script>

<style lang="scss">
:root {
  /* Размеры */
  --text-size-smallest: var(--main-smallest-text);
  --text-size-small: var(--main-small-text);
  --text-size-medium: var(--main-size);
  --text-size-big: var(main-big-size);
  --text-size-large: var(--main-large-size);
  --text-size-line-height: 1.33;
  --text-padding-vertical: 0;
  --text-padding-horizontal: 0;
  --text-margin-vertical: 0;
  --text-margin-horizontal: 0;
  --text-margin-bottom: 0;

  /* Цвета */
  --text-color: var(--main-light);
}
</style>


<style lang="scss" scoped>
.text {
  color: var(--text-color);
  font-size: var(--text-size-medium);
  line-height: var(--text-size-line-height);
  border: none;
  padding: var(--text-padding-vertical) var(--text-padding-horizontal);
  margin: var(--text-margin-vertical) var(--text-margin-horizontal);
  margin-bottom: var(--text-margin-bottom);

  &_size {

    &-smallest {
      font-size: var(--text-size-smallest);
    }

    &-small {
      font-size: var(--text-size-small);
    }

    &-medium {
      font-size: var(--text-size-medium);
    }

    &-big {
      font-size: var(--text-size-big);
    }

    &-large {
      font-size: var(--text-size-large);
    }
  }
}
</style>
