<template>
  <div class="widget__cont uk-height-1-1 uk-flex uk-padding uk-position-fixed uk-width-1-1">
    <div class="uk-margin-auto uk-margin-auto-vertical">
      <div class="modal uk-background-muted">
        <div class="uk-flex uk-flex-middle uk-margin-small-bottom uk-margin-small-top">
          <div class="">
            <i class="material-icons q-icon notranslate fs20 header__icon">
              list_alt
            </i>
          </div>
          <div class="fs16@s fs12 uk-margin-left">
            Пройди тест за 2 минуты и получи проекты домов с точной стоимостью
          </div>
        </div>
            <div v-for="(item, keyQuestion, index) in list" :key="index" v-show="keyQuestion == step && end === 0">
              <checkBox v-if="item.typeCheckbox" :item='item' :keyQuestion="keyQuestion" :index="index"/>
              <radio v-on:listUpdate="nkj"  :item='item' :keyQuestion="keyQuestion" :index="index" v-else-if="!item.answer[0]['img']"/>
              <radioGallery :item='item' :keyQuestion="keyQuestion" :index="index" v-else-if="item.answer[0]['img']"/>
            </div>
                <contacts v-if="end == 1"/>
        <hr>
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <div class="fs12 cl-dark fnt-semi">Веванта</div>
            <div v-if="end == 0">
              {{ numberSlide }} / {{keysList.length}}
            </div>
          <div class="uk-flex uk-flex-middle">
            <div class="uk-flex circle uk-margin-small-right uk-position-relative"
            @click="backSlide"
            v-show="list[step] && list[step]['back'] && !this.end"
            >
              <i class="material-icons q-icon notranslate uk-position-absolute uk-position-center">
                keyboard_arrow_left
              </i>
            </div>
            <div class="uk-margin">
              <button class="btn fs14 uk-box-shadow-medium"
              @click="nextSlide"
              v-show="list[this.step] && `${this.list[this.step].checked}`.length && !this.end"
              >
                <span class="uk-text-middle">Далее</span>
                  <i aria-hidden="true" role="img" class="uk-text-middle material-icons q-icon notranslate on-right uk-margin-left">
                    arrow_forward
                  </i>
              </button>
              <button class="btn fs14 uk-box-shadow-medium cr-no op05"

              v-show="list[this.step] && !`${this.list[this.step].checked}`.length && !this.end"
              >
                <span class="uk-text-middle">Далее</span>
                  <i aria-hidden="true" role="img" class="uk-text-middle material-icons q-icon notranslate on-right uk-margin-left">
                    arrow_forward
                  </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>


import radio from './radio'
import contacts from './contacts'
import radioGallery from './radioGallery'
import checkBox from './checkBox'



  export default {

    components: {
      radio,
      contacts,
      radioGallery,
      checkBox,
    },
    data() {
      return {
        step: '',
        list: {},
        numberSlide: 1,
        keysList: '',
        end: 0,
        getAnswer:'',
        inputs: {
          phone: '',
          email: '',
          name: '',
          comment: '',
        }
      }
    },

    created() {
      this._getQuestions()
    },

    watch: {
      end(item) {
       if( item == 1  ) {
         for (let key in this.list) {
           if (!Array.isArray(this.list[key].checked)) {
             this.getAnswer += this.list[key].name + ":" + this.list[key].answer[this.list[key].checked]['value']
           } else {
             let checked = this.list[key].checked

             checked.forEach((answerIndex, i) => {

             this.getAnswer += `${this.list[key].name}: ${this.list[key].answer[answerIndex].value}`
             console.log(this.getAnswer)

             // this.messenger.forEach((item, index) => {
             //
             //   console.log(item["type"])
             //   console.log(item["show"])
             // })
             });
            }
          }
       }
      }
    },

    methods: {
      nkj(info) {


      },
      _getQuestions () {
        this.$api.post('/widget/get/get_info_project', {id: 40})
       .then(rs => {
         this.list = rs.data.project_info.list
         this.step = rs.data.project_info.keysList[0]
         this.keysList = rs.data.project_info.keysList

       })
     },

       nextSlide() {
         if (!this.list[this.list[this.step].next] || (this.list[this.step] && Array.isArray(this.list[this.step].checked))) {
           this.end = 1
           return
         }

         this.numberSlide++
         this.step = this.list[this.step].next



       },
       backSlide() {
         if (!this.list[this.list[this.step].back]) {
           return
         }

         this.numberSlide--
         this.step = this.list[this.step].back
       }
     }
    }

</script>

<style>

.widget__cont {
  background: rgb(0 0 0 / 54%);
  overflow-y: auto;

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

svg {
  width: 20px;
  height: 20px;
  fill: #525858;
}

.btn {
  background-color: #46b9b4;
  border: none;
  color: #fff;
  border-radius: 2rem;
}

.btn:hover {
  background-color: #5dd3ce;
  transition: 0.5s;
}

.header__icon {
  color: #46b9b4;
}

.circle {
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 50%;
  border: solid 1px rgba(54,54,54,0.7);
  cursor: pointer;
}

.circle:hover {
  width: 40px;
  height: 40px;
  background-color: #e6e6e6;
  border: 50%;
  border: solid 1px rgba(54,54,54,0.7);
  cursor: pointer;
  transition: 0.5s;
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
