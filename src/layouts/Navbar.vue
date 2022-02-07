<template>
  <div class="nav__menu-shadow"
    v-show="($store.state.activeNav && $store.state.winW <= 960)"
    @click="toggleNav()"
    >
  </div>
  <div class="nav__menu uk-background-default uk-box-shadow-medium z-index-10" :class="{'nav__menu-active': $store.state.winW > 960 && $store.state.activeNav}">
    <div class="uk-grid uk-flex-between uk-padding-small uk-flex-middle">
      <div>
        <span @click="toggleNav" class="material-icons uk-text-middle cr-pointer">menu</span>
      </div>

      <div class="">CRMSistem</div>

      <div class="uk-position-relative uk-visible@l">
        <form class="uk-width-medium">
          <div class="uk-position-relative">
            <div class="uk-form-icon">
              <span class="material-icons uk-visible@l uk-hidden-hover">search</span>
            </div>

            <input type="text" placeholder="Ваш телефон:" class="uk-input uk-form-width-large">
          </div>
        </form>
      </div>

      <div class="uk-flex uk-visible@m">
        <div class="avatar_nav cr-pointer uk-border-circle uk-margin-small-right uk-flex uk-flex-center uk-flex-middle">
          <span class="material-icons cl-vevanta uk-text-middle">notifications_none</span>
        </div>
        <div class="avatar_nav cr-pointer uk-border-circle uk-margin-small-right uk-flex uk-flex-center uk-flex-middle">
          <span class="material-icons cl-vevanta uk-text-middle">notifications_none</span>
        </div>
        <div class="avatar_nav cr-pointer uk-border-circle uk-margin-small-right uk-flex uk-flex-center uk-flex-middle">
          <span class="material-icons cl-vevanta uk-text-middle">notifications_none</span>
        </div>
      </div>

      <div>
        <router-link
          to="/profile"
          custom
          v-slot="{isActive, navigate}"
        >
          <img class="avatar_nav cr-pointer uk-border-circle" src="https://chelseablues.ru/images/news14/228c03bf904.jpg" :class="{active: isActive}" @click="navigate" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  // import UIkit from 'uikit'


  export default {
    data() {
      return {
      }
    },

    methods: {
      toggleNav() {
        this.$store.commit('setStatusBurger', 1) //Click one
        this.$store.dispatch('toggleNav')
      },
    },
}
</script>

<style scoped>
.avatar_nav {
  height: 35px;
  width: 35px;
  background: #f5f5f5
}

.avatar_nav span {
  font-size: 18px
}

.nav__menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  transition: 0.2s;
}

.nav__menu-active {
  width: calc(100% - 300px);
}

.nav__menu-shadow {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(0 0 0 / 44%);
}

</style>
