<template>
  <div class="">
    <div class="uk-box-shadow-medium uk-background-default uk-padding-small uk-margin-top brd12">
      <div class="uk-grid uk-grid-small">
        <div class="fs22 uk-text-left fnt-bld">
          Список
        </div>
      </div>

      <div class="list" v-if="statusList === 2 || (statusList === 1 && !listActive.length)">
          <div class="">
            Список пуст
          </div>
      </div>

      <div class="list" v-show="!statusList">
        <div class="uk-margin-top uk-grid uk-grid small uk-flex-middle">
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
                <div class="uk-border-circle circle-l bg-grey uk-flex">
                </div>
              </div>
              <div>
                <div class="uk-border-circle circle-l bg-grey uk-flex">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="list" v-if="statusList === 1 && listActive.length">
        <div class="uk-margin-top uk-grid uk-grid small uk-flex-middle" v-for="(item, index) in listActive" :key="index">
          <div>
            <div class="uk-text-center list__index fnt-bld uk-flex">
              <span class="uk-margin-auto uk-margin-auto-vertical">{{ index + 1 }}</span>
            </div>
          </div>

          <div class="fs18 fnt-med uk-text-left uk-width-expand">
            <input
              type="text"
              name="materials"
              class="uk-input cl-dark border-none"
              v-model="item.project_name"
              @focus="titleQuizOld = item.project_name"
              @blur="createQuiz(item.indexOriginal)"
              @keyup.enter="createQuiz(item.indexOriginal)"
            >
          </div>
          <div class="uk-width-auto">
            <div class="uk-grid uk-grid-small">
              <div v-if="item.project_id">
                <router-link
                  :to="`/widget/quiz/item/${item.project_id}`"
                  custom
                  v-slot="{ navigate }"
                >
                <div class="uk-border-circle circle-l bg-grey uk-flex" @click="navigate">
                  <span class="m-auto material-icons cl-blue cr-pointer">edit</span>
                </div>
                </router-link>
              </div>
              <div>
                <div class="uk-border-circle circle-l bg-grey uk-flex" @click="delQuiz(item.indexOriginal)">
                  <span class="m-auto material-icons cl-red2 cr-pointer">delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  <div class="uk-box-shadow-medium uk-background-default uk-padding-small uk-margin-top brd12">
    <div class="uk-width-expand uk-grid uk-grid-small">
      <div>
        <div class="uk-flex uk-flex-middle cr-pointer" @click="addQuiz">
          <span class="material-icons uk-margin-small-right">add_circle</span>  Добавить опрос
        </div>
      </div>
    </div>
</div>


  </div>

</template>

<script>
import UIkit from 'uikit'

  export default {
    data() {
      return {
        statusList: 0,
        titleQuizOld: '',
        list: []
      }
    },

    created() {
      this._getListQuizes()
    },

    methods: {
      _getListQuizes() {
        this.$api.post('widget/get/list_projects', {
          'typeId': 1
        })
        .then(rs => {
          if (rs.data.length) {
            this.list = rs.data
            this._gerenateIndexesToList()
          } else {
            this.statusList = 2
          }
        })
      },
      _gerenateIndexesToList() {
        this.list = this.list.map((item, index) => {
          item['indexOriginal'] = index
          return item
        })
        this.statusList = 1
      },
      addQuiz() {

        this.list.push({
          project_name: 'Введите название',
          status: 1,
          indexOriginal: this.list.length,
          project_id: '',
        })

        this.statusList = 1

      },

      createQuiz(index) {
        if (this.list[index].project_name === this.titleQuizOld) return

        if (this.list[index].project_name) {
          UIkit.modal.confirm(`Подтвердите название: "${this.list[index].project_name}"`).then(() => {

          // Если имеется id то обновляем существующее название
           if (this.list[index].project_id) {
            this.$api.post('widget/update/rename_project', {
              name: this.list[index].project_name,
              id: this.list[index].project_id
            })
          } else {
            this.$api.post('widget/add/quiz', {
              name: this.list[index].project_name
            }).then(rs => {
              this.list[index].project_id = rs.data.id
            })
          }
        })
        } else {
          this.list[index].project_name = this.titleQuizOld
        }
      },

      delQuiz(index) {
        UIkit.modal.confirm(`Подтвердите удаление: "${this.list[index].project_name}"`).then(() => {
          this.$api.post('widget/update/set_status_project', {
            id: this.list[index].project_id,
            status: 0
          })
          this.list[index].status = 0
        })
      }
    },

    computed: {
      listActive() {
        return this.list.filter(item => item.status === 1)
      },

      listArchive() {
        return this.list.filter(item => !item.status)
      },
    }
  }
</script>


<style>
  .list__index {
    width: 50px;
    height: 50px;
    background: #e7eaf6;
    border-radius: 12px
  }
</style>
