<template>
  <div id="menu" class="uk-width-medium uk-height-1-1 uk-position-fixed uk-box-shadow-medium z-index-5" :class="{'menu__active': $store.state.activeNav}">
    <div class="uk-grid uk-grid-small uk-padding-small uk-flex-middle">
      <div>
        <a><img class="uk-border-circle" src="https://cdn.vevanta.com/stages/1194/10728006198e6cd05740a1fb519da6a8.jpg?w=48&h=48" alt=""></a>
      </div>
      <div class="fnt-bld">
        Климов П.А 
      </div>
      <div class="">
        Сп
      </div>
    </div>
    <div class="uk-margin-top">
      <ul class="uk-list uk-text-left menu__items uk-width-1-1" uk-nav>
        <router-link
          to="/"
          custom
          v-slot="{navigate}"
        >
          <li class="uk-padding-small cr-pointer" :class="{active: $route.path == '/' ? true : false}" @click="navigate">Домашняя</li>
        </router-link>

          <li class="uk-padding-small cr-pointer uk-parent">
            <a href="#">
              Виджеты
            </a>
              <ul class="uk-nav-sub">
                <router-link
                  to="/widget/quiz/list"
                  custom
                  v-slot="{isActive, navigate}"
                >
                  <li class="uk-position-relative p8" :class="{active: isActive}" @click="navigate">
                    <span class="nav__circle uk-flex uk-position-absolute uk-position-center-left uk-border-circle"></span>
                    <a class="uk-margin-small-left" href="#">Квизы</a>
                  </li>
                </router-link>
                  <li class="uk-position-relative p8">
                    <span class="nav__circle uk-flex uk-position-absolute uk-position-center-left uk-border-circle"></span>
                    <a class="uk-margin-small-left" href="#">Форма захвата</a>
                  </li>
                  <li class="uk-position-relative p8">
                    <span class="nav__circle uk-flex uk-position-absolute uk-position-center-left uk-border-circle"></span>
                    <a class="uk-margin-small-left" href="#">Сайты</a>
                  </li>
              </ul>
          </li>

        <router-link
          to="/users"
          custom
          v-slot="{isActive, navigate}"
        >
          <li class="uk-padding-small cr-pointer" :class="{active: isActive}" @click="navigate">Пользователи</li>
        </router-link>

        <router-link
          to="/CRM"
          custom
          v-slot="{isActive, navigate}"
        >
          <li class="uk-padding-small cr-pointer" :class="{active: isActive}" @click="navigate">CRM</li>
        </router-link>

        <router-link
          to="/settings"
          custom
          v-slot="{isActive, navigate}"
        >
          <li class="uk-padding-small cr-pointer" :class="{active: isActive}" @click="navigate">Настройки</li>
        </router-link>

        <router-link
          to="/media"
          custom
          v-slot="{isActive, navigate}"
        >
          <li class="uk-padding-small cr-pointer" :class="{active: isActive}" @click="navigate">Библиотека</li>
        </router-link>

        <router-link
          to="/auth"
          custom
          v-slot="{isActive, navigate}"
        >
          <li class="uk-padding-small cr-pointer" :class="{active: isActive}" @click="navigate">Выход</li>
        </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'
export default {
  data() {
    return {
      nav: false
    }
  },

  created() {
    window.addEventListener('resize', () => {
      this.$store.commit('setWinW')
    })
  },

  methods: {
    showMenu(state) {
      this.nav = !this.nav
    },

  }
}
</script>

<style scoped>

  .p8 {
    padding: 8px
  }

  ul.uk-nav-sub {
    padding: 0
  }

  .nav__circle {
    width: 10px;
    height: 10px;
    border: 3px solid #5cc6d2
  }

  .uk-nav a {
    color: #6d6d6d
  }

  #menu {
    top: 0;
    padding-left: 20px;
    background: #fff;
    transition: 0.2s;
    transform: translateX(-100%)
  }

  .menu__active {
    transform: translateX(0%) !important
  }

  .menu__items > li {
    margin: 0 !important;
    position: relative;
    color: #6d6d6d;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px
  }

  .menu__items > li.active {
    background: #f5f5f5;
    color: hsl(185deg 64% 51%);
  }

  .menu__items li.active::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 5px;
    border-radius: 12px;
    background: hsl(185deg 64% 51%);
  }

  .menu__items
  .menu__items > li:hover::before {
    background: #00bab6
  }



</style>
