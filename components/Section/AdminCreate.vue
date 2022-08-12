<template lang="pug">
  section.s-admin-create
    LayoutsContainer
      .s-admin-create__form
        UiButton(@click.prevent="openModal('create-gpu')").s-admin-create__btn добавить видеокарту
        UiButton(@click.prevent="openModal('create-case')").s-admin-create__btn добавить корпус
</template>

<script>
export default {
  name: 'AdminCreate',
  methods: {
    openModal(name) {
      this.$vfm.show(name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/styles/mixins.scss";
.s-admin-create {
  padding: var(--main-section-padding);
  background-color: var(--dark-2);
  &__form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    background: var(--main-positive-color);
  }
  &__btn {
    margin-bottom: 30px;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
