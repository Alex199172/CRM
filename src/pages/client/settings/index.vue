<template>
  <div>
    <div class="uk-box-shadow-medium container uk-background-default uk-padding-small uk-margin-top brd12">
      <div class="uk-grid uk-child-width-1-2">

         <div>
            <div class="uk-grid uk-grid-small uk-flex-middle cr-pointer">
              <div class="uk-width-expand">
                <select
                  class="uk-select"
                  v-model="domainsActive"
                  @change="setDomain"
                  uk-tooltip="Выберите домен"
                  >
                  <option disabled value="">Домен</option>
                  <option v-for="(domain, index) in domains" :key="index" :value="index">
                    {{domain.domain}}
                  </option>
                </select>
              </div>
              <div class="uk-flex">
                <span class="material-icons" @click="addSkeletDomain" uk-tooltip="Добавить новый домен">add_circle</span>
              </div>
            </div>

            <div class="uk-grid uk-grid-small uk-flex-middle cr-pointer" v-show="domain.status">
              <div class="uk-width-expand">
                <input type="text"
                  placeholder="Доменное имя:"
                  class="uk-input"
                  v-model="domain.name"
                  @change="renameDomain"
                  >
              </div>
              <div class="uk-flex">
                <span class="material-icons cl-red2 cr-pointer" @click="removeDomain">delete</span>
              </div>
            </div>


            <div class="uk-grid uk-grid-small uk-flex-middle cr-pointer" v-for="(item, index) in newDomains" :key="index" :value="index">
              <div class="uk-width-expand">
                <input type="text"
                placeholder="Доменное имя:"
                class="uk-input"
                v-model="item.name"
                @keyup.enter="addDomain(index)"
                >
              </div>
              <div class="uk-flex">
                <span class="material-icons cr-pointer" uk-tooltip="Удалить домен" @click="delDomain(index)">remove_circle</span>
              </div>
            </div>
        </div>

          <div>
              <div class="uk-grid uk-grid-small uk-flex-middle cr-pointer">
                <div class="uk-width-expand">
                  <select class="uk-select"
                    v-model="categoriesActive"
                    @change="setCategorie"
                    uk-tooltip="Выберите категорию"
                    >
                    <option disabled value="">Категории</option>
                    <option v-for="(categorie, index) in categories" :key="index" :value="index">
                      {{categorie.categorie_name}}
                    </option>
                  </select>
                </div>
                <div class="uk-flex">
                  <span
                  class="material-icons"
                  @click="addSkeletCategorie()"
                  uk-tooltip="Добавить новую категорию">
                  add_circle
                  </span>
                </div>
              </div>
              <div class="uk-grid uk-grid-small uk-flex-middle cr-pointer" v-show="categorie.status">
                <div class="uk-width-expand">
                  <input type="text"
                  placeholder="Категории:"
                  class="uk-input"
                  @keyup.enter="addCategorie"
                  v-model="categorie.name"
                  @change="renameCategorie"
                  >
                </div>
                <div class="uk-flex">
                    <span class="material-icons cl-red2 cr-pointer" @click="removeCategorie" v-show="categorie.id">delete</span>
                </div>
              </div>
          <div class="uk-grid uk-grid-small uk-flex-middle cr-pointer" v-for="(item, index) in newCategories" :key="index" :value="index">
            <div class="uk-width-expand">
              <input type="text"
              placeholder="Категории:"
              class="uk-input"
              v-model="item.name"
              @keyup.enter="addCategorie(index)"
              >
            </div>
            <div class="uk-flex">
              <span class="material-icons cr-pointer" uk-tooltip="Удалить домен" @click="delCategorie(index)">remove_circle</span>
            </div>
          </div>
            </div>
      </div>
      </div>
    </div>
</template>

<script>
 import UIkit from 'uikit';

export default {
  data() {
    return {
      domain: {
        id: '',
        name: '',
        status: 0,
      },
      categorie: {
        id: '',
        name: '',
        status: 0,
      },
      domainsActive: '',
      categoriesActive: '',
      domains:[
        {id: 1, domain: "evrev"},
        {id: 2, domain: "evrev"},
        {id: 3, domain: "dfvvv"},
    ],
      categories:[
        {id: 1, categorie_name: "evrev"},
        {id: 2, categorie_name: "evrev"},
        {id: 3, categorie_name: "dfvvv"},
    ],
    newDomains: [],
    newCategories: [],
    }
  },
  methods: {
  renameDomain() {
    if (this.domain.name) {
      this.domains[this.domainsActive].domain = this.domain.name
      this.domain.status = 0
    } else{
      return
    }
  },
  addDomain(index) {
      if (this.newDomains[index].name.length <= 2) {
        UIkit.modal.confirm(`Ошибка`)
        return
      }
      if (!this.newDomains[index].index && this.newDomains[index].index !== 0) {
        this.domains.push({
          id: Date.now(),
          domain: this.newDomains[index].name
        })
        let i = this.domains.length - 1
        this.newDomains[index].index = i
        this.newDomains.splice(index, 1)
        this.domainsActive = i
      }
    },
    addSkeletDomain() {
      this.newDomains.push({name: ''})
    },

    delDomain(i) {
      UIkit.modal.confirm(`Подтвердите удаление: "${this.newDomains[i].name}"`).then(() => {
      if (this.newDomains[i]) {
        // AJAX DEL
      UIkit.notification('Категория удалена', 'success');
      this.newDomains.splice(i, 1)
    }
  })
    },

    setDomain() {
      this.domain.id = this.domains[this.domainsActive].id
      this.domain.name = this.domains[this.domainsActive].domain
      this.domain.status = 1
    },

    removeDomain() {
      UIkit.modal.confirm(`Подтвердите удаление: "${this.domains[this.domainsActive].domain}"`).then(() => {
        if (this.domain.id) {
          // AJAX DEL
          UIkit.notification('Домен удален', 'success');
          this.domains.splice(this.domainsActive, 1)
          this.domain = {
            id: '',
            name: '',
            staus:  0
          }
        } else {
          this.domain.name = ''
          this.domain.status = ''
        }
        })
    },
    renameCategorie() {
      if (this.categorie.name) {
        this.categories[this.categoriesActive].categorie_name = this.categorie.name
        this.categorie.status = 0
      } else{
        return
      }
    },
    addCategorie(index) {
      if (this.newCategories[index].name.length <= 2) {
        UIkit.modal.confirm(`Ошибка`)
        return
      }
      if (!this.newCategories[index].index && this.newCategories[index].index !== 0) {
          this.categories.push({
            id: 4,
            categorie_name: this.newCategories[index].name
          })
        let i = this.categories.length - 1
        this.newCategories[index].index = i
        this.newCategories.splice(index, 1)
        this.categoriesActive = i
      }
    },
    addSkeletCategorie() {
      this.newCategories.push({name: ''})
    },
    delCategorie(i) {
      UIkit.modal.confirm(`Подтвердите удаление: "${this.newCategories[i].name}"`).then(() => {
      if (this.newCategories[i]) {
        // AJAX DEL
      UIkit.notification('Категория удалена', 'success');
      this.newCategories.splice(i, 1)
    }
  })
    },

    setCategorie() {
      this.categorie.id = this.categories[this.categoriesActive].id
      this.categorie.name = this.categories[this.categoriesActive].categorie_name
      this.categorie.status = 1
    },
    removeCategorie() {
      UIkit.modal.confirm(`Подтвердите удаление: "${this.categories[this.categoriesActive].categorie_name}"`).then(() => {
      if (this.categorie.id) {
        // AJAX DEL
        UIkit.notification('Категория удалена', 'success');
        this.categories.splice(this.categoriesActive, 1)
        this.categorie = {
          id: '',
          name: '',
          staus:  0
        }
      } else {
        this.categorie.name = ''
        this.categorie.status = ''
      }
    })
  }
}
}
</script>
