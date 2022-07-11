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
          UiText.detail__components-title(size='big') Видео карта
          UiText(size='large') NVIDIA GЕFORCE RTX 3090 24Гб
        .detail__block
          UiText.detail__components-title(size='big') Процессор
          UiText(size='large') Intel Core i7-10700KF 3800 МГц
        .detail__block
          UiText.detail__components-title(size='big') Охлаждение
          UiText(size='large') ID-COOLING AURAFLOW X 360
        .detail__block
          UiText.detail__components-title(size='big') Оперативная память
          UiText(size='large') 16Гб Kingston HyperX Fury 3600МГц
        .detail__block
          UiText.detail__components-title(size='big') Материнская плата
          UiText(size='large') ASUS TUF GAMING B560-PLUS WIFI
        .detail__block
          UiText.detail__components-title(size='big') Жёсткий диск
          UiText(size='large') 2 Тб Toshiba
        .detail__block
          UiText.detail__components-title(size='big') Диск SSD
          UiText(size='large') 480 Гб Kingston M.2
        .detail__block
          UiText.detail__components-title(size='big') Блок питания
          UiText(size='large') Блок питания
        .detail__block
          UiText.detail__components-title(size='big') Корпус
          UiText(size='large') Deepcool Matrexx 70 ADD-RGB 3F Black
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

  &__components-title {
    --text-color: #8490a4;
  }
}

</style>
