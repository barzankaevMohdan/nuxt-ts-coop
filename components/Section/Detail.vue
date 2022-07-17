<template lang="pug">
  section.detail
    LayoutsContainer
      .detail__content
        .detail__left
          UiHeadline.detail__title(tag='h4') Edelweiss
          UiHeadline(tag='h2') {{pc.name}}
          p.detail__description {{pc.description}}
          .detail__action
            UiButton Купить
            .detail__wrapper
            span.detail__price {{pc.price}}
            SvgIcon.detail__svg(name="rub")
        .detail__right
          img.detail__img(src="../../assets/pc/pc.png", alt="")
      .detail__components
        UiHeadline(tag='h3') Комплектация
        .detail__block
          UiText.detail__components-title(size='big') Видео карта
          UiText(size='large') {{pc.gpu.name}}
        .detail__block
          UiText.detail__components-title(size='big') Процессор
          UiText(size='large') {{pc.cpu.name}}
        .detail__block
          UiText.detail__components-title(size='big') Охлаждение
          UiText(size='large') {{pc.cooller.name}}
        .detail__block
          UiText.detail__components-title(size='big') Оперативная память
          UiText(size='large') {{pc.ram.name}}
        .detail__block
          UiText.detail__components-title(size='big') Материнская плата
          UiText(size='large') {{pc.motherboard.name}}
        .detail__block
          UiText.detail__components-title(size='big') Жёсткий диск
          UiText(size='large') {{pc.hard_disc.name}}
        .detail__block
          UiText.detail__components-title(size='big') Диск SSD
          UiText(size='large') {{pc.ssd.name}}
        .detail__block
          UiText.detail__components-title(size='big') Блок питания
          UiText(size='large') {{pc.psu.name}}
        .detail__block
          UiText.detail__components-title(size='big') Корпус
          UiText(size='large') {{pc.case.name}}
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    pc() {
      return this.$store.getters['pc/id'](this.$route.params.id)
    }
  },
}
</script>

<style scoped lang="scss">
@import '~/styles/mixins.scss';
.detail {
  padding-top: var(--main-section-padding);

  &__content {
    display: flex;
  }

  &__left {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-top: 50px;
  }

  &__title {
    --headline-size-h4: var(--main-big-size);
    --headline-color: var(--main-light-color);
  }

  &__description {
    font-size: var(--main-big-size);
    line-height: 1.33;
    color: #8490a4;
  }

  &__action {
    display: flex;
    align-items: center;
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__price {
    font-size: var(--main-large-size);
    color: var(--main-light-color);
    margin-left: 25px;
  }

  &__svg {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  &__right {
    margin-left: auto;
  }

  &__img {
    width: 500px;
  }

  &__components {
    display: flex;
    flex-direction: column;
    margin-top: 75px;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
  }

  &__components-title {
    --text-color: #8490a4;
  }
}

</style>
