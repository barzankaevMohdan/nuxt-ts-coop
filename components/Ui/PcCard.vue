<template lang="pug">
  .card
    img.card__img(src='../../assets/pc/pc.png')
    UiHeadline.card__title(tag='h4') {{pc.name}}
    .card__block
      UiHeadline.card__subtitle(tag='h4') {{pc.price}}
      SvgIcon.card__svg(name="rub")
    .card__action
      UiButton.card__btn Купить
      UiButton(theme='outline') Подробнее
    p.card__description {{pc.description}}
    .card__components
      .card__info
          UiHeadline.card__components_title(tag='h4') Видео карта
          UiHeadline.card__components_subtitle(tag='h4') {{pc.gpu.name}}
          UiHeadline.card__components_title(tag='h4') Процессор
          UiHeadline.card__components_subtitle(tag='h4') {{pc.cpu.name}}
          UiHeadline.card__components_title(tag='h4') Охлаждение
          UiHeadline.card__components_subtitle(tag='h4') {{pc.cooller.name}}
          UiHeadline.card__components_title(tag='h4') Оперативная память
          UiHeadline.card__components_subtitle(tag='h4') {{pc.ram.name}}
          UiHeadline.card__components_title(tag='h4') Материнская плата
          UiHeadline.card__components_subtitle(tag='h4') {{pc.motherboard.name}}
          UiHeadline.card__components_title(tag='h4') Жёсткий диск
          UiHeadline.card__components_subtitle(tag='h4') {{pc.hard_disc.name}}
          UiHeadline.card__components_title(tag='h4') Диск SSD
          UiHeadline.card__components_subtitle(tag='h4') {{pc.ssd.name}}
          UiHeadline.card__components_title(tag='h4') Блок питания
          UiHeadline.card__components_subtitle(tag='h4') {{pc.psu.name}}
          UiHeadline.card__components_title(tag='h4') Корпус
          UiHeadline.card__components_subtitle(tag='h4') {{pc.case.name}}
</template>

<script>
export default {
  name: 'UiPcCard',
  props: {
    pc: {
      type: Object,
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/styles/mixins.scss';

.card {
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  background-color: #1c232e;

  &__img {
    width: 200px;

  }

  &__title {
    font-size: 20px;
    margin-top: 20px;
  }

  &__block {
    display: flex;
    align-items: center;
  }

  &__subtitle {
    color: var(--main-light-color);
    font-size: 20px;
  }

  &__action {
    display: flex;
    margin-top: 25px;
  }

  &__btn {
    margin-right: 15px;
  }

  &__description {
    color: #fff;
    font-size: 12px;
    line-height: 1.33;
    color: #8490a4;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  &__components {
    display: flex;
    flex-direction: column;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__svg {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  &__components_title {
    color: #fff;
    font-size: 12px;
    line-height: 1.33;
    color: #8490a4;
    margin-top: 20px;

  }

  &__components_subtitle {
    font-size: 15px;
  }
}
</style>
