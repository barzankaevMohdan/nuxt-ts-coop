<template lang="pug">
  .card
    img.card__img(src='../../assets/pc/pc.png')
    UiHeadline.card__title( tag='h4') {{pc.name}}

    .card__block
      UiHeadline.card__subtitle(tag='h4') {{pc.price}}
      SvgIcon.card__svg(name="rub")
    .card__action
      UiButton.card__btn Купить
      UiButton(theme='outline' @click='toDetail(pc.id)' v-if='pc.id') Подробнее
    p.card__description {{pc.description}}
    .card__components
      .card__info
          UiText.card__components-title(size='small') Видео карта
          UiText.card__components-subtitle(v-if='pc.gpu') {{pc.gpu.name}}
          template(v-else)
            UiText.card__components-subtitle Не выбрано

          UiText.card__components-title(size='small') Процессор
          UiText.card__components-subtitle(v-if='pc.cpu') {{pc.cpu.name}}
          template(v-else)
           UiText.card__components-subtitle Не выбрано

          UiText.card__components-title(size='small') Охлаждение
          UiText.card__components-subtitle(v-if='pc.cooller') {{pc.cooller.name}}
          template(v-else)
           UiText.card__components-subtitle Не выбрано

          UiText.card__components-title(size='small') Оперативная память
          UiText.card__components-subtitle(v-if='pc.ram') {{pc.ram.name}}
          template(v-else)
           UiText.card__components-subtitle Не выбрано

          UiText.card__components-title(size='small') Материнская плата
          UiText.card__components-subtitle(v-if='pc.motherboard') {{pc.motherboard.name}}
          template(v-else)
            UiText.card__components-subtitle Не выбрано

          UiText.card__components-title(size='small') Жёсткий диск
          UiText.card__components-subtitle(v-if='pc.hard_disc') {{pc.hard_disc.name}}
          template(v-else)
           UiText.card__components-subtitle Не выбрано

          UiText.card__components-title(size='small') Диск SSD
          UiText.card__components-subtitle(v-if='pc.ssd') {{pc.ssd.name}}
          template(v-else)
           UiText.card__components-subtitle Не выбрано

          UiText.card__components-title(size='small') Блок питания
          UiText.card__components-subtitle(v-if='pc.psu') {{pc.psu.name}}
          template(v-else)
           UiText.card__components-subtitle Не выбрано

          UiText.card__components-title(size='small') Корпус
          UiText.card__components-subtitle(v-if='pc.case') {{pc.case.name}}
          template(v-else)
           UiText.card__components-subtitle Не выбрано
</template>

<script>
export default {
  name: 'UiPcCard',
  props: {
    pc: {
      type: Object,
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  computed: {
    cpu() {
      return this.pc.cooller?.name
    }
  }
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
    --headline-size-h4: 20px;
    margin-top: 20px;
  }

  &__block {
    display: flex;
    align-items: center;
  }

  &__subtitle {
    --headline-color: var(--main-light-color);
    --headline-size-h4: 20px;
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
    font-size: var(--main-smallest-text);
    line-height: 1.33;
    color: #8490a4;
    margin-bottom: 35px;
    margin-top: 25px;
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

  &__components-title {
    --text-color: #8490a4;
  }

  &__components-subtitle {
    --text-margin-bottom: 20px;
  }
}
</style>
