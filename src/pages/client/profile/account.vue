<template>
      <div class="uk-width-auto wrapper uk-flex">
        <div class="uk-width-1-1 uk-background-default brd6 uk-background-default uk-box-shadow uk-box-shadow-small uk-padding-small">
          <div>
            <form class="uk-width-medium">
              <div class="color_auth uk-text-left uk-margin-small-top">
                E-mail
              </div>
              <input class="uk-input uk-form-small" type="text" placeholder="E-mail">
              <div class="color_auth uk-text-left uk-margin-small-top">
                Фамилия
              </div>
              <input
              class="uk-input uk-form-small"
              type="text"
              placeholder="Фамилия"
              v-model="titleSurname"
              >
              <div class="color_auth uk-text-left uk-margin-small-top">
                Имя
              </div>
              <input
              class="uk-input uk-form-small"
              type="text"
              placeholder="Имя"
              v-model="titleName"
              >
              <div class="color_auth uk-text-left uk-margin-small-top">
                Отчество
              </div>
              <input
              class="uk-input uk-form-small"
              type="text"
              placeholder="Отчество"
              v-model="titlePatronymic"
              >
              <div class="uk-flex">
                <div>
                  <div class="color_auth uk-text-left uk-margin-small-top">
                    Пол
                  </div>
                  <div class="uk-align-left">
                    <label class="uk-margin-right"><input class="uk-radio" type="radio" name="radio2" checked>  м</label>
                    <label><input class="uk-radio" type="radio" name="radio2">  ж</label>
                  </div>
                </div>
                <div class="uk-width-expand">
                  <div class="color_auth uk-text-left uk-margin-small-top">
                    Дата рождения
                  </div>
                  <input class="uk-input uk-form-small" type="date" placeholder="Дата рождения">
                 </div>
                </div>

              <button class="btn show-animation:hover show-animation uk-margin-small-top uk-align-left cl-wh" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
  // import UIkit from 'uikit'


  export default {
    data() {
      return {
        titlePatronymic: '',
        titleSurname: '',
        titleName: '',
        datePerson: [

        ]
      }
    },

    methods: {

  }
}
</script>

<style>


</style>
