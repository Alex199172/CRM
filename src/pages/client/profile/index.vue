<template>
  <div class="uk-margin-top">

    <div class="uk-grid uk-grid-small">
      <div class="uk-width-medium@m uk-flex">
        <div class="brd6 uk-background-default uk-box-shadow uk-box-shadow-small">
          <div class="uk-flex uk-flex-center">
            <div class="uk-margin-medium-top cr-pointer avatar-sec uk-position-relative">
              <img class="avatar cr-pointer uk-border-circle" src="https://chelseablues.ru/images/news14/228c03bf904.jpg" alt="">
                <div class="shadow uk-border-circle uk-height-1-1 uk-width-1-1 uk-position-absolute uk-position-top">
                  <span class="material-icons cl-wh uk-position-absolute uk-position-center">
                    photo_camera
                  </span>
                </div>
              </div>
          </div>


            <ul class="uk-grid-collapse uk-text-left uk-margin-medium-top uk-list uk-list-striped menu__profile">
              <router-link
                to="/profile"
                custom
                v-slot="{ navigate }"
              >

              <li class="color_auth uk-grid uk-grid-small uk-flex-middle cr-pointer" :class="{active: $route.path == '/profile' ? true : false}" @click="navigate">
                <span  class="material-icons cl-wg uk-margin-small-right">
                  settings
                </span>
                Аккаунт
              </li>
              </router-link>

              <router-link
                to="/profile/password"
                custom
                v-slot="{isActive, navigate}"
              >
              <li class="color_auth uk-grid uk-grid-small uk-flex-middle cr-pointer" :class="{active: isActive}" @click="navigate">
                <span class="material-icons cl-wg uk-margin-small-right">
                  lock
                </span>
                Изменение пароля
              </li>
              </router-link>

              <router-link
              to="/profile/person"
              custom
              v-slot="{isActive, navigate}"
              >
              <li class="color_auth uk-grid uk-grid-small uk-flex-middle cr-pointer" :class="{active: isActive}" @click="navigate">
                <span class="material-icons cl-wg uk-margin-small-right">
                  switch_account
                </span>
                Персональные данные
              </li>
              </router-link>

              <router-link
              to="/profile/right"
              custom
              v-slot="{isActive, navigate}"
              >
              <li class="color_auth uk-grid uk-grid-small uk-flex-middle cr-pointer" :class="{active: isActive}" @click="navigate">
                <span class="material-icons cl-wg uk-margin-small-right">
                  lock
                </span>
                Права доступа к модулям
              </li>
              </router-link>

              <router-link
              to="/profile/settings"
              custom
              v-slot="{isActive, navigate}"
              >
              <li class="color_auth uk-grid uk-grid-small uk-flex-middle cr-pointer" :class="{active: isActive}" @click="navigate">
                <span class="material-icons cl-wg uk-margin-small-right">
                  notifications
                </span>
                Настройка уведомлений
              </li>
              </router-link>
              <router-link
              to="/profile/service"
              custom
              v-slot="{isActive, navigate}"
              >
              <li class="color_auth uk-grid uk-grid-small uk-flex-middle cr-pointer" :class="{active: isActive}" @click="navigate">
                <span class="material-icons cl-wg uk-margin-small-right">
                  miscellaneous_services
                </span>
                Связанные сервисы
              </li>
              </router-link>
            </ul>
        </div>

      </div>
        <router-view/>
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
    created() {
     document.body.setAttribute('uk-img', '');
     document.body.setAttribute("data-src", 'https://images.wallpaperscraft.ru/image/single/gory_ozero_vershiny_129263_1920x1080.jpg');
    },
    methods: {

  }
}
</script>

<style>
.btn {
  background-color: #3cada3;
  border: none;
  border-radius: 2px;
}
.opacity {
background: rgb(0 0 0 / 44%)
}
.cl-wg {
  color: #57dace;
}
.preload__cont {
  width: 100%;
  height: 100%;
  background: rgb(255 255 255 / 74%);
}

.avatar-sec .shadow{
  opacity: 0;
}
.avatar-sec:hover .shadow{
  opacity: 1;
  transition: 0.3s;
}
.avatar {
  width: 150px;
  height: 150px;
}
.shadow {
  background: rgb(64 62 62 / 46%)
}
.preload__cont img {
  width: 60px;
  margin: auto;
}
.color_auth {
  color: #afb3c2;
  font-size: 16px;
}
.uk-input {
  background-color: #f5f5f5;
  border: none;
  border-radius: 3px;
}
.menu__profile > li {
  margin: 0 !important;
  position: relative;
  color: #6d6d6d;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.menu__profile > li.active {
  background: #eeeded;
  color: hsl(185deg 64% 51%);
}

.menu__profile li.active::after {
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

.menu__profile
.menu__profile > li:hover::before {
  background: #00bab6
}


</style>
