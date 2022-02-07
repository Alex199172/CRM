<template>

            <hr>
          <div class="body__title uk-flex">
              <div class="uk-margin-auto-vertical uk-margin-auto">
                <div class="fs14 uk-text-italic">
                  По вашим параметрам найдено 10 проектов домов. Заполните форму, чтобы получить результаты
                </div>
                <div class="">
                  <form class="uk-grid uk-flex-column uk-flex-middle" @submit.prevent>
                    <div class="uk-width-large  uk-margin-small-top">
                      <!-- <div class="uk-position-relative">
                        <span class="uk-form-icon">
                          <i aria-hidden="true" role="presentation" class="icon__color material-icons">person</i>
                        </span>
                        <input class="uk-input"
                        type="text"
                        placeholder="Ваше имя"
                        v-model="name"
                        >
                      </div> -->
                    </div>
                    <div class="uk-width-large uk-margin-small-top">
                      <div class="uk-position-relative">
                        <span class="uk-form-icon">
                          <i aria-hidden="true" role="presentation" class="icon__color material-icons">phone</i>
                        </span>

                        <input class="uk-input"
                        type="tel"
                        placeholder="Телефон"
                        v-model="tel"
                        >
                      </div>
                    </div>
                    <div class="uk-width-large">
                      <button class="btn__form uk-margin-small-top uk-width-1-1 cr-pointer"
                      type="button"
                      name="button"
                      @click="getData"
                      >
                        <span class="cl-wh uk-text-uppercase uk-text-bolder">Получить результаты</span>
                      </button>
                    </div>

                  </form>
                  <div class="">
                    <input class="uk-checkbox"
                    type="checkbox"
                    v-model="require">
                    <a class="text-caption uk-text-italic uk-text-top uk-margin-small-left" href="https://vevanta.com/politika-konfidencialnosti">С политикой конфиденциальности</a>
                    <span class="text-caption uk-text-italic uk-text-top">  ознакомлен(а)</span>
                  </div>
                </div>
              </div>
            </div>

</template>

<script>



  export default {


    data() {
      return {
        step: '',
        list: {},
        numberSlide: 1,
        keysList: '',
        require: true,
        tel: '',
        name: '',
      }
    },


    methods: {
      getData() {
        let phone = this.tel.replace(/[^+\d]/g, '')

        if (this.require && phone){
          alert('Данные отправлены')
        }

        this.$api.post('https://api.vevanta.com/api/lead/add', {
         phone: this.tel,
         form: this.formName,
         msg: this.getAnswer,
         url: location.href,
         origin: 1,
       })
       .then(rs => {
         console.log(rs.data)
       })
      }
     }
    }

</script>


<style scoped>

.widget__cont {
  background: #525858;
  overflow-y: auto;

}

.body__title {
  height: 400px;
  animation-duration: 1.2s;
  animation-name: slidein;
}

.modal {
  height: 100%;
  border-radius: 5px;
  padding: 15px;
  min-width: 400px;
}

a {
  color: #46b9b4;
  text-decoration: underline !important;
}

svg {
  width: 20px;
  height: 20px;
  fill: #525858;
}

.text-caption {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.03333em;
}

.icon__color {
  color: #a5a5a5;
  position: absolute;
}

.input {
  position: relative;
    outline:0;
}


.btn__form{
  background: #46b9b4;
  border: none;
  height: 40px;
}

.btn__form:hover {
  background-color: #5dd3ce;
  transition: 0.5s;
}

.header__icon {
  color: #46b9b4;
}



@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

</style>
