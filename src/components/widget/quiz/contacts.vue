<template>


            <form-end v-if="end == 1"/>


          <div class="body__title"
          v-if="end == 0"
          >
            <div class="fs28@s fs20 uk-margin-medium-bottom uk-text-left">
            </div>
            <div class="uk-flex uk-flex-middle uk-height-1-1">
              <div class="uk-width-1-1 uk-grid-small uk-child-width-1-1">
                <div class="uk-flex-center uk-grid uk-grid-small">
                  <div class="uk-position-relative"
                  v-for="(mess, index) in messenger.data" :key="index">
                    <label class="uk-flex uk-flex-middle">
                      <input type="radio"
                      hidden>
                        <div class="uk-flex input__block uk-flex-column uk-flex-middle"
                        @click="getForm">
                        <img :src="`/images/icons/${messenger.data[index].type}.png`"/>
                        <div class="uk-margin-small-top">{{messenger.data[index].name}}</div>
                    </div>
                   </label>
                  </div>
                 </div>
                </div>
               </div>
              </div>
</template>

<script>
import formEnd from './form'

  export default {
    components: {
      formEnd
    },
    data() {
      return{
        end: 0,
        messenger: {
          checked:'',
          data:[
            {type:"tg", name:"Telegram", show: true},
            {type:"wh", name:"WhatsApp", show: false},
            {type:"tell", name:"Телефон", show: false},
            {type:"vb", name:"Viber", show: false}
          ]
        }
      }
    },
    methods: {
      getForm(){
        this.end = 1
      }
    }
  }
</script>

<style scoped>

.widget__cont {
  background: rgb(0 0 0 / 54%);
  overflow-y: auto;
}

.viber__icon {
  width: 40px !important;
  height: 40px !important;
}

.body__title {
  height: 400px;
  animation-duration: 1.2s;
  animation-name: slidein;
}

.modal {
  border-radius: 5px;
  padding: 15px;
  width: 900px;
  max-width: 900px !important;
  margin: auto;
  overflow-x: hidden;
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

.input__block:hover svg {
  border-radius: 50%;
  -webkit-box-shadow: 0px 5px 0px 10px rgb(70, 185, 180, 0.2);
  -moz-box-shadow: 0px 5px 0px 10px rgb(70, 185, 180, 0.2);
  box-shadow: 0px 1px 5px 10px rgba(70, 185, 180, 0.2);
  transition: 0.5s;
}

.input__block {
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  height: 100px;
  width: 125px;
  padding: 6px;
  cursor: pointer;
}

.input__block:hover {
  border: 1px solid #46b9b4;
}


</style>
