<template>
  <div>


    <div class="">
      <div class="fnt-bld fs26 uk-text-left">
        Название квиза
      </div>
    </div>
    <div class="uk-position-relative uk-margin-bottom uk-padding-small uk-margin-top">
      <div class="uk-grid uk-child-width-1">
        <div class="brd12">
          <div class="list" v-if="statusList === 2">
              <div class="">
                 Список пуст
              </div>
          </div>
          <div class="list" v-show="!statusList">
            <div class="uk-margin-top">
              <div class="uk-grid uk-grid-small uk-flex-middle">
                <div>
                  <div class="uk-text-center list__index fnt-bld uk-flex">
                    <span class="uk-margin-auto uk-margin-auto-vertical"></span>
                  </div>
                </div>

                <div class="fs18 fnt-med uk-text-left uk-width-expand">
                  <div style="height: 30px" class="uk-width-large uk-background-muted">
                  </div>
                </div>

                <div class="uk-width-auto">
                  <div class="uk-grid uk-grid-small">
                    <div>
                      <div class="uk-border-circle circle-l bg-grey uk-flex" >
                      </div>
                    </div>

                    <div>
                      <div class="uk-border-circle circle-l bg-grey uk-flex">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="uk-grid uk-grid-small uk-flex-middle">
                <div>
                  <div class="uk-margin-small-bottom">
                    <div class="uk-width-small uk-background-muted" style="height: 40px">
                    </div>
                  </div>
                </div>

                <div>
                  <div class="uk-margin-small-bottom">
                    <div class="uk-width-small uk-background-muted" style="height: 40px">
                    </div>
                  </div>
                </div>
                <div>
                  <div class="uk-margin-small-bottom">
                    <div class="uk-width-small uk-background-muted" style="height: 40px">
                    </div>
                  </div>
                </div>
                <div>
                  <div class="uk-margin-small-bottom">
                    <div class="uk-width-small uk-background-muted" style="height: 40px">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="list uk-position-relative" v-if="statusList === 1">

            <div class="uk-position-absolute uk-width-1-1 uk-height-1-1 preload__cont" v-show="statusSaveProject === 2">
              <div class="uk-position-center">
                <img src="/images/icons/preload.svg" alt="">
              </div>
            </div>

            <div :class="{'op05': statusSaveProject === 2}">

              <template v-for="(keyQuestion, indexKeyQuestion) in keysList" :key="indexKeyQuestion">
                <div class="uk-margin-top uk-box-shadow-medium uk-background-default uk-padding-small brd12"
                 :class="{'op02': !list[keyQuestion].status}">

                <div v-if="list[keyQuestion].moreAnswer !== undefined">
                  Дополнительный вопрос
                </div>
                  <div class="uk-grid uk-grid-small uk-flex-middle">
                    <div>
                      <div class="uk-text-center list__index fnt-bld uk-flex">
                        <span class="uk-margin-auto uk-margin-auto-vertical">{{ indexKeyQuestion + 1 }}</span>
                      </div>
                    </div>

                    <div class="fs18 fnt-med uk-text-left uk-width-expand">
                      <input
                        type="text"
                        name="materials"
                        class="uk-input cl-dark border-none"
                        v-model="list[keyQuestion].name"
                      >
                    </div>

                    <div class="uk-width-auto">
                      <div class="uk-grid uk-grid-small">
                        <div>
                          <div class="uk-border-circle circle-l bg-grey uk-flex" @click="toggleShowQuestion(indexKeyQuestion)">
                            <span class="m-auto material-icons cl-green cr-pointer" v-if="list[keyQuestion] .status">
                              visibility
                            </span>
                            <span class="m-auto material-icons cr-pointer" v-else>
                              visibility_off
                            </span>
                          </div>
                        </div>

                        <div>
                          <div class="uk-border-circle circle-l bg-grey uk-flex" @click="delQuestion(indexKeyQuestion)">
                            <span class="m-auto material-icons cl-red2 cr-pointer">delete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="uk-grid uk-grid-small uk-flex-middle">
                    <div v-for="(answer, answerIndex) in list[keyQuestion].answer" :key="answerIndex">

                      <div
                        class="uk-width-1-1 uk-height-small uk-border-rounded uk-margin-bottom uk-background-center-center uk-background-cover"
                        v-if="answer.img" :data-src="`https://cdn.vevanta.com/sk/media_libs/${answer.img  }`" uk-img
                        >

                      </div>

                        <div class="uk-margin-small-bottom uk-position-relative ">
                          <span
                            class="del__btn uk-position-absolute material-icons cr-pointer"
                            @click="delAnswer(indexKeyQuestion, answerIndex)"
                            uk-tooltip="Удалить вариант"
                            >
                            remove_circle
                          </span>
                          <input
                            type="text"
                            name="materials"
                            class="uk-input"
                            v-model="answer.value"
                          >
                        <div class="uk-grid uk-grid-small uk-margin-top">
                             <!-- <div class="cr-pointer" uk-tooltip="Создать связь" @click="createBindToAnswer(indexKeyQuestion, answerIndex)" v-if="!answer.next">
                              <span class="material-icons">earbuds</span>
                            </div>
                            <div class="cr-pointer" uk-tooltip="Создать связь" v-else-if="answer.next && list[answer.next]">
                              <span class="material-icons cl-green cr-no">earbuds</span>
                            </div>
                            <div class="cr-pointer" uk-tooltip="Восстановить связь" v-else @click="showModalRestoreBindAnswer">
                              <span class="material-icons cl-red cr-pointer">earbuds</span>
                            </div> -->
                            <div class="cr-pointer">
                              <span class="material-icons cr-pointer" @click="setImg($event, keyQuestion, answerIndex)">crop_original</span>
                            </div>

                          </div>
                        </div>
                    </div>
                    <div class="cr-pointer uk-margin-small-bottom uk-flex uk-flex-middle" @click="addAnswerToQuestion(indexKeyQuestion)">
                      <span class="material-icons uk-margin-small-right">add_circle</span> Добавить ответ
                    </div>
                  </div>

                  <div class="uk-grid uk-text-left uk-margin-top uk-width-1-1 uk-flex-middle">
                    <div class="uk-flex uk-flex-middle cr-pointer" @click="toggleShowMoreSettings(indexKeyQuestion)" :class="{'cl-blue': list[keyQuestion].statusMoreSettings}">
                      <span class="material-icons uk-margin-small-right">settings</span>
                      Настройки
                    </div>
                    <div class="uk-flex uk-flex-middle cr-pointer" @click="addDoubleQuestion(indexKeyQuestion)"  v-show="false">
                      <span class="material-icons uk-margin-small-right">content_copy</span> Дублировать
                    </div>
                  </div>

                  <div class="uk-margin-top">
                    <div v-show="list[keyQuestion].statusMoreSettings" class="uk-text-left">
                      <div class="label label__item uk-margin-small-bottom">
                        <label>
                          <input type="checkbox" name="materials" class="uk-checkbox" v-model="list[keyQuestion].typeCheckbox">
                          <span class="uk-margin-small-left">Множественный вопрос</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr v-if="list.length > (indexKeyQuestion + 1)">
                </div>
              </template>

            </div>


          </div>

        </div>
      </div>


      <div class="uk-text-left uk-position-relative uk-margin-top">
        <div class="uk-position-absolute uk-width-1-1 uk-height-1-1 preload__cont" v-show="statusSaveProject === 2">
        </div>

        <div class="btn bg-yellow brd36 fnt-med cl-wh" @click="saveWidget">
          <div class="uk-grid uk-grid-small uk-flex-middle">
            <div class="uk-flex">
              <span class="material-icons">update</span>
            </div>
            <div>
              <span>Сохранить проект</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="uk-background-default uk-margin-top uk-margin-bottom uk-padding-small">
      <div class="uk-grid uk-grid-small">
        <div>
          <div class="uk-flex uk-flex-middle cr-pointer" @click="addQuestion">
            <span class="material-icons uk-margin-small-right">add_circle</span>  Добавить вопрос
          </div>
        </div>
      </div>
    </div>



    <div ref="modalBindAnswer" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <div class="uk-grid uk-grid-small uk-flex-middle">

          <div class="uk-width-expand">
            <select class="uk-select" v-model="indexKeyQuestionBind">
              <option disabled value="">Выберите вопрос</option>
              <template v-for="(keyQuestion, indexKeyQuestion) in keysList" :key="indexKeyQuestion">
                <option v-if="typeof list[keyQuestion].moreAnswer === 'number'"  :value="indexKeyQuestion">
                  {{ list[keyQuestion].name }}
                </option>
              </template>
            </select>
          </div>

          <div class="">
            <div class="uk-flex uk-flex-middle cr-pointer" @click="addQuestion">
              <span class="material-icons uk-margin-small-right">add_circle</span>
            </div>
          </div>
        </div>


        <div class="uk-margin-top uk-grid uk-grid-small uk-flex-middle uk-flex-right">

          <div>
            <div class="btn bg-grey brd36 fnt-med cl-dark" @click="cancelBindAnswer">
              <div class="uk-grid uk-grid-small uk-flex-middle">
                <div>
                  <span>Отменить</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="btn bg-yellow brd36 fnt-med cl-wh" @click="restoreBindAnswer">
              <div class="uk-grid uk-grid-small uk-flex-middle">
                <div class="uk-flex">
                  <span class="material-icons">update</span>
                </div>
                <div>
                  <span>Сохранить</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div ref="mediaLib" class="uk-modal-container" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <media v-on:selectImg="selectImg"/>
      </div>
    </div>
  </div>

</template>

<script>
  import UIkit from 'uikit'
  import Media from '@/components/media/index'
  export default {
    components: {
      Media
    },
    data() {
      return {
        id: '',
        statusSaveProject: 1,
        indexKeyQuestionBind:  '', // Хранит ключ связи вопроса
        backKeyList: '', // Хранит ключ предыдущего шага
        nextKeyList: Date.now(), // Хранит ключ следующего шага
        keysList: [],
        statusList: 0,
        list: {},
        trash: [],
        files: {},
        activeElemQuestionImg: {} // Активный элемент загрузки изображения варианта ответа
      }
    },

    created() {

      this.id = this.$route.params.id.replace(/\D/g, '')

      if (this.id) {
        this._getInfoProject()
      } else {
        this.statusList = 2
      }
    },

    methods: {

      //Получаем информацию по данному проекту
      _getInfoProject() {
        this.$api.post('widget/get/get_info_project', {
          id: this.id
        }).then(rs => {
          if (Object.keys(rs.data.project_info).length) {
            this.list = rs.data.project_info.list
            this.keysList = rs.data.project_info.keysList

            if (this.keysList.length) {
              let keyLastQuestion = this.keysList[this.keysList.length - 1]

              this.nextKeyList = this.list[keyLastQuestion].next
              this.backKeyList = keyLastQuestion

            }

            this.statusList = 1
          } else {
            this.statusList = 2
          }
        })
      },

      // Добавление варианта ответа
      addAnswerToQuestion(keyQuestionIndex) {
        this.list[this.keysList[keyQuestionIndex]].answer.push({
          value: '',
          statusEdit: 1,
          next: '',
          img: '',
        })
      },


      /**
       * Создание дополнительного вопроса на ответ
       * indexKeyQuestion индекс массива this.keysList
       * keyAnswer индекс варианта ответа
       */
      createBindToAnswer(indexKeyQuestion, keyAnswer) {
        let next = Date.now()

        // Добавим вопрос
        this.list[next] = {
          name: 'Ваш вопрос', // Название вопроса
          typeCheckbox: false, // Тип варианта ответа
          back: this.keysList[indexKeyQuestion], // Предыдущий шаг,
          next: this.list[this.keysList[indexKeyQuestion]].next, // Следующий шаг,
          status: 1,
          statusMoreSettings: 0,
          answer: [],
          img: '',
          moreAnswer: keyAnswer, // Ключ варианта ответа, обознает что является дополнительным вопросом
        }

        this.list[this.keysList[indexKeyQuestion]].answer[keyAnswer].next = next // Запишим следующий шаг на ответ
        this.keysList.splice(indexKeyQuestion + 1, 0, next) // Вставляем ID связанного вопроса
      },

      // Удаление варианта ответа из вопроса
      delAnswer(indexKeyQuestion, answerIndex) {
        UIkit.modal.confirm(`Подтвердите удаление: "${this.list[this.keysList[indexKeyQuestion]].answer[answerIndex].value}"`).then(() => {
          this.list[this.keysList[indexKeyQuestion]].answer.splice(answerIndex, 1)
        })
      },

      toggleShowMoreSettings(indexKeyQuestion) {
        if (this.list[this.keysList[indexKeyQuestion]].statusMoreSettings) {
          this.list[this.keysList[indexKeyQuestion]].statusMoreSettings = 0
        } else {
          this.list[this.keysList[indexKeyQuestion]].statusMoreSettings = 1
        }
      },

      toggleShowQuestion(indexKeyQuestion) {
        if (this.list[this.keysList[indexKeyQuestion]].status) {
          this.list[this.keysList[indexKeyQuestion]].status = 0
        } else {
          this.list[this.keysList[indexKeyQuestion]].status = 1
        }
      },

      //Удаление вопроса из списка
      delQuestion(indexKeyQuestion) {
        let keyQuestion = this.keysList[indexKeyQuestion] // Ключ удаляемого элемента
        let questionInfo = this.list[keyQuestion] // Удаляемый элемент

        if (typeof questionInfo.moreAnswer === 'number') {

          UIkit.modal.confirm(`Сохранить цепочку вопроса: "${questionInfo.name}"`)
          .then(() => {

        //    this.list[questionInfo.back].answer[questionInfo.moreAnswer].next = questionInfo.next

            questionInfo.answer.forEach((answer) => {
              if (typeof answer.next === 'number' && this.list[answer.next]) {
                this.list[answer.next].back = questionInfo.back
              }
            });


           // Следующий вопрос
        /*   if (this.list[questionInfo.next] && typeof this.list[questionInfo.next].moreAnswer === 'number') {
             this.list[questionInfo.back].answer[questionInfo.moreAnswer].next = questionInfo.next
           } else {
             this.list[questionInfo.back].answer[questionInfo.moreAnswer].next = ''
           } */

            this._delQuestion(keyQuestion, questionInfo, indexKeyQuestion)
          })
        } else {
          UIkit.modal.confirm(`Подтвердите удаление: "${questionInfo.name}"`).then(() => {
            this._delQuestion(keyQuestion, questionInfo, indexKeyQuestion)
          })
        }
      },

      _delQuestion(keyQuestion, questionInfo, indexKeyQuestion) {
        this.keysList.splice(indexKeyQuestion, 1)
        delete this.list[keyQuestion]
        /**
         * Восстанавливаем порядок вопросов
         */

        // Если это единственный вопрос
        if (questionInfo.back) {
          this.list[questionInfo.back].next = questionInfo.next
        }

        // Существует ли следующий вопрос относительного удаляемого
        if (this.list[questionInfo.next]) {
          this.list[questionInfo.next].back = questionInfo.back
          this.nextKeyList = this.list[questionInfo.next].next
        } else {
          this.nextKeyList = questionInfo.next
          this.backKeyList = questionInfo.back
        }


        //2 === пустой список
        if (!this.keysList.length) {
          this.statusList = 2
        }

      },

      // Добавление вопроса в список
      addQuestion() {

        /**
         * Условия для создания и проверки первого вопроса.
         *
         */

        let self = this.nextKeyList // Запоминаем текущий ключ

        this.nextKeyList = Date.now() // Обновляем ключ

        this.list[self] = {
          name: 'Ваш вопрос',
          typeCheckbox: false,
          back: this.backKeyList, // Предыдущий шаг,
          next: this.nextKeyList, // Следующий шаг,
          status: 1,
          checked: [],
          statusMoreSettings: 0,
          answer: [],
        }

        this.keysList.push(self)
        this.backKeyList = self
        this.statusList = 1

      },

      // Создать дубль вопроса
      addDoubleQuestion(index) {
        delete this.list[index]
      },

      showModalRestoreBindAnswer() {
        UIkit.modal(this.$refs.modalBindAnswer).show()
      },

      // Восстанавливает связь с вариантом ответа и вопроса
      restoreBindAnswer() {

      },

      cancelBindAnswer() {
        UIkit.modal(this.$refs.modalBindAnswer).hide()
      },

      // Сохранение виджета
      saveWidget() {
        this.statusSaveProject = 2
        this.$api.post('widget/update/set_project_info', {
          id: this.id, // === id_project
          info: {
            list: this.list,
            keysList: this.keysList
          }
        }).then(() => {
          this.statusSaveProject = 1
          UIkit.notification('Проект сохранен', 'success');
        })
      },

      setImg(e, keyQuestion, answerIndex) {
        this.activeElemQuestionImg = {
          keyQuestion,
          answerIndex
        }
        UIkit.modal(this.$refs.mediaLib).show()
      },

      selectImg(img) {
        let keyQuestion = this.activeElemQuestionImg.keyQuestion

        this.list[keyQuestion].answer[this.activeElemQuestionImg.answerIndex].img = img

        UIkit.modal(this.$refs.mediaLib).hide()
      }

    }
  }
</script>

<style>

  .preload__cont {
    width: 100%;
    height: 100%;
    background: rgb(255 255 255 / 74%);
  }

  .preload__cont img {
    width: 60px;
  }

  .list__index {
    width: 50px;
    height: 50px;
    background: #e7eaf6;
    border-radius: 12px
  }

  .del__btn {
    font-size: 18px;
    right: -7px;
    top: -7px;
  }

  .del__btn:hover {
    color: #f19534;
  }

  .h-cl-orange {
    color: #f19534;
  }
</style>
