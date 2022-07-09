<template lang="pug">
  section.detail
    LayoutsContainer
      .detail__content
        .detail__left
          UiHeadline.detail__title(tag='h4') Edelweiss
          UiHeadline(tag='h2') EDELWEISS FALCON
          p.detail__description Сверхпроизводительный компьютер EDELWEISS <br> FALCON. Многоядерный процессор INTEL десятой <br> серии обеспечит колоссальную вычислительную <br> скорость  в сложных профессиональных <br> программах. Тяжелая графика и обработка видео <br> основное кредо и визитная карточка этого монстра.
          .detail__action
            UiButton Купить
            .detail__wrapper
            span.detail__price 352 350
            SvgIcon.detail__svg(name="rub")
        .detail__right
          img.detail__img(src="../../assets/pc/pc.png", alt="")
      .detail__components
        UiHeadline(tag='h3') Комплектация
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Видео карта
          UiHeadline(tag='h4') NVIDIA GЕFORCE RTX 3090 24Гб
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Процессор
          UiHeadline(tag='h4') Intel Core i7-10700KF 3800 МГц
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Охлаждение
          UiHeadline(tag='h4') ID-COOLING AURAFLOW X 360
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Оперативная память
          UiHeadline(tag='h4') 16Гб Kingston HyperX Fury 3600МГц
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Материнская плата
          UiHeadline(tag='h4') ASUS TUF GAMING B560-PLUS WIFI
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Жёсткий диск
          UiHeadline(tag='h4') 2 Тб Toshiba
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Диск SSD
          UiHeadline(tag='h4') 480 Гб Kingston M.2
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Блок питания
          UiHeadline(tag='h4') Блок питания
        .detail__block
          UiHeadline.detail__components_title(tag='h4') Корпус
          UiHeadline(tag='h4') Deepcool Matrexx 70 ADD-RGB 3F Black
</template>

<script>
export default {
  name: 'Detail',

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
    font-size: var(--main-large-size);
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

  &__components_title {
    --headline-size-h4: var(--main-big-size);
    --headline-color: #8490a4;
  }
}

</style>
