<template lang='pug'>
  .user(
    v-click-outside="closeDrop"
    @click="toggleDropDown"
  )
    .user__name {{user.name}}
    UiAvatar.user__photo(:userName="user.name" :src="user.picture" :size="45")

    .user__drop(v-show="isOpen")
      .user__drop-item(@click='toCart')
        SvgIcon.user__drop-svg(name='basket')
        a.user__drop-link Корзина
      .user__drop-item(@click.prevent='logout')
        SvgIcon.user__drop-svg(name='exit-mini')
        a.user__drop-link Выйти
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleDropDown() {
      this.$emit('click')
      this.isOpen = !this.isOpen
    },
    closeDrop() {
      this.isOpen = false
    },
    logout() {
      this.$store.dispatch('user/logOut')
        .then(() => {
          this.$router.go()
        })
    },
    toCart() {
      this.$router.push('/cart')
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/user']
    },
  },
}
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

.user {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &__coins {
    display: flex;
    align-items: center;
    padding: 6px 14px;
    background: var(--main-color);
    border-radius: 6px;
  }

  &__coins-svg {
    max-width: 22px;
    max-height: 20px;
    margin-right: 8px;
  }

  &__coins-counter {
    font-style: normal;
    font-weight: 600;
    font-size: var(--main-text-size);
    line-height: 1.3;
    color: var(--main-light);
  }

  &__name {
    font-style: normal;
    font-weight: 600;
    font-size: var(--main-text-size);
    line-height: 1.3;
    color: var(--main-light);
    margin: 0 15px;
  }

  &__drop {
    position: absolute;
    top: 115%;
    display: flex;
    flex-direction: column;
    left: -55px;
    background: var(--gray-1);
    border-radius: 10px;
    overflow: hidden;
    width: calc(100% + 55px);
  }

  &__drop-link {
    font-style: normal;
    font-weight: normal;
    font-size: var(--main-small-text);
    line-height: 1.4;

    &,
    &:focus,
    &:visited {
      color: var(--main-positive-color);
      text-decoration: none;
    }
  }

  &__drop-item {
    padding: 20px 17px;
    border-bottom: 1px solid var(--gray-2);
    display: flex;
    width: 100%;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;

    &:hover,
    &:active {
      background: var(--gray-2);

      .user__drop-link {
        color: var(--main-positive-color);
      }
    }

    &:last-of-type {
      border-bottom: 0;
    }
  }

  &__drop-svg {
    max-width: 20px;
    max-height: 20px;
    margin-right: 13px;
  }
}

</style>
