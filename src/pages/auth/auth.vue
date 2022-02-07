<template >
  <div>
    <div class="uk-position-center preload__cont z-index-10" v-show="statusLeads === 1">
      <div class="uk-position-center">
        <img src="/images/icons/preload.svg" alt="">
      </div>
    </div>
    <div class="opacity uk-container uk-width-1-4 uk-padding uk-panel uk-border-rounded uk-box-shadow-medium uk-position-center">
        <div class="uk-margin-small-bottom uk-margin-small-top uk-text-normal uk-text-large cl-wh">
          Авторизация
        </div>
      <div class="uk-text-center uk-margin-large-top" uk-grid>

        <form
          class="uk-width-1-1"
          id="app"
          @submit.prevent="checkForm"
          >
          <div class="uk-position-relative">
            <input
            class="uk-input"
            type="tel"
            name="tel"
            placeholder="Логин"
            id="login"
            v-model="login"
            >
            <span
            class="material-icons uk-position-absolute uk-position-center-right uk-margin-small-right cl-wg"
            >phone_iphone
            </span>
            </div>
          <div class="uk-position-relative uk-margin-small-top">
              <input
              class="uk-input"
              :type="statusPassword ? 'password' : 'text'"
              placeholder="Пароль"
              id="login"
              v-model="password"
              >
              <span
              @click="statusPassword = !statusPassword"
              class="material-icons cr-pointer uk-position-absolute uk-position-center-right uk-margin-small-right cl-wg"
              >
              <template v-if="statusPassword">
                visibility
              </template>
              <template v-else
              >
                visibility_off
              </template>
              </span>
          </div>
          <button class="btn uk-margin-medium-top uk-width-1 cl-wh show-animation show-animation:hover fs16" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import UIkit from 'uikit'
import axios from 'axios'

  export default {
    data() {
      return {
        login: '',
        password: '',
        statusPassword: true,
        statusLeads: 0
      }
    },
    created() {
     document.body.setAttribute('uk-img', '');
     document.body.setAttribute("data-src", 'https://images.wallpaperscraft.ru/image/single/gory_ozero_vershiny_129263_1920x1080.jpg');
    },
    methods: {
      checkForm() {
      let phone = this.login.replace(/[^+\d]/g, '')


      if (!phone) {
        UIkit.notification({
          message: 'Некорректный номер',
          status: 'danger',
          pos: 'top-right',
        });
        return
      }

      if (!this.password || this.password.length < 5) {
        UIkit.notification({
          message: 'Введите пароль',
          status: 'danger',
          pos: 'top-right',
        });
          return
        }
        this.statusLeads = 1

        this._auth(phone, this.password)
    },

    _auth(login, password) {
      this.$api.post('logins', {
        login,
        password
      }).then(r => {
        localStorage.setItem('auth_token', r.data.token);
        this.$api.defaults.headers.Authorization = `Bearer ${r.data.token}`
        this.$router.push({name: 'CRM'})
      }).catch(r => {
        this.statusLeads = 0 // default
        UIkit.notification({
          message: r.data.errors[0],
          status: 'danger',
          pos: 'top-right',
        });
      })
    }
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

.preload__cont img {
  width: 60px;
  margin: auto;
}
</style>
