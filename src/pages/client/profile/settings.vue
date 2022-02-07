<template>
      <div class="uk-width-auto wrapper uk-flex">
        <div class="uk-width-1-1 uk-background-default brd6 uk-background-default uk-box-shadow uk-box-shadow-small uk-padding-small">
          <div>
            <form class="uk-width-medium">
              <div class="color_auth uk-text-left uk-margin-small-top">
                Введите новый пароль
              </div>
              <input class="uk-input uk-form-small" type="text" placeholder="Пароль">
              <div class="color_auth uk-text-left uk-margin-small-top">
                Повторите пароль
              </div>
              <input class="uk-input uk-form-small" type="text" placeholder="Пароль">
              <button class="btn show-animation:hover show-animation uk-margin-small-top uk-align-left cl-wh" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>
          <router-view/>
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

  }
}
</script>

<style>


</style>
