<template>
  <div>

    <div class="uk-box-shadow-medium uk-background-default uk-padding-small uk-margin-top brd12">
      <div class="uk-flex uk-flex-column">
        <div class="uk-position-absolute uk-width-1-1 uk-height-1-1 preload__cont" v-show="statusLeads === 0">
          <div class="uk-position-center">
            <img src="/images/icons/preload.svg" alt="">
          </div>
        </div>


        <div class="uk-grid uk-child-width-1-4@l uk-child-width-1-3@m">
          <div>
            <div class="uk-text-left uk-margin-top uk-margin-small-bottom fnt-bld">
              Домен
            </div>
              <div>
                <select
                  class="uk-select"
                  v-model="filter.domain"
                  @change="filter.page = 1; searchLeads()"
                  >
                  <option disabled value="">Домен</option>
                  <template v-for="(domain, index) in domains" :key="index">
                    <option
                    :value="[domain.id_domain]"
                    v-if="(domain.id_company==filter.company[0]) || !filter.company.length"
                    >
                      {{domain.site_domain}}
                    </option>
                  </template>
                </select>
              </div>
          </div>
          <div>
            <div>
              <div class="uk-text-left uk-margin-top uk-margin-small-bottom fnt-bld">
                Компании
              </div>
                <div>
                  <select
                    class="uk-select"
                    v-model="filter.company"
                    @change="filter.page = 1; filter.domain = []; searchLeads()"
                    >
                    <option disabled value="">Компании</option>
                    <option
                      v-for="(company, index) in companies"
                      :key="index"
                      :value="[company.id_company]"
                      >
                      {{company.name_company}}
                    </option>
                  </select>
                </div>
            </div>
          </div>
          <div>
            <div>
              <div class="uk-text-left uk-margin-top uk-margin-small-bottom fnt-bld">
                Источник
              </div>
                <div>
                  <select
                    class="uk-select"
                    v-model="filter.origin"
                    @change="filter.page = 1; searchLeads()"
                    >
                    <option disabled value="">Источник</option>
                    <option v-for="(origin, index) in origins" :key="index" :value="[origin.id_origin]">
                      {{origin.name_origin}}
                    </option>
                  </select>
                </div>
            </div>
          </div>
          <div>
            <div>
              <div class="uk-text-left uk-margin-top uk-margin-small-bottom fnt-bld">
                Дата
              </div>
                <div>
                  <input
                    class="uk-select"
                    v-model="filter.date_period[0]"
                    @change="startLeadDate"
                    type="date" data-uk-datepicker="{format:'DD.MM.YYYY'}">
                </div>
                <div>
                  <input
                    class="uk-select uk-margin-top"
                    v-model="filter.date_period[1]"
                    @change="startLeadDate"
                    type="date" data-uk-datepicker="{format:'DD.MM.YYYY'}">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-box-shadow-medium uk-background-default uk-padding-small uk-margin-top brd12" ref="tablesLeads">
      <div class="uk-overflow-auto">
        <div v-dragscroll="true" style="width: 100%; height: 100%; overflow: auto;">
          <div class="uk-text-left fnt-bld">
            Общее количество заявок: {{total}}
          </div>
      <table class="uk-table uk-table-striped uk-table-hover uk-table-small uk-table-middle">
          <caption></caption>
          <thead>
              <tr>
                <th><span
                  class="material-icons cr-pointer show-animation show-animation:hover cl-vevanta"
                  v-if="filter.sort === 'desc'"
                  @click="filter.sort = 'asc'; searchLeads();"
                  >arrow_drop_up
                  </span>
                  <span
                    class="material-icons cr-pointer show-animation show-animation:hover cl-vevanta"
                    @click="filter.sort = 'desc'; searchLeads();"
                    v-else
                    >arrow_drop_down
                    </span>
                </th>

                <th class="">Телефон</th>
                <th class="">E-mail</th>
                <th class="">Имя</th>
                <th class="">Форма</th>
                <th class="">Доменное имя</th>
                <th class="">URL</th>
                <th class="">Дата</th>
                <th class="">_ga</th>
                <th class="">roistat_visit</th>
                <th class="">ya_client_id</th>
                <th class="">name_origin</th>
                <th>Телефон</th>
                <th>E-mail</th>
                <th>Имя</th>
                <th>Форма</th>
                <th>Доменное имя</th>
                <th>URL</th>
                <th>Дата</th>
                <th>_ga</th>
                <th>roistat_visit</th>
                <th>ya_client_id</th>
                <th>name_origin</th>
              </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th>Телефон</th>
              <th>E-mail</th>
              <th>Имя</th>
              <th>Форма</th>
              <th>Доменное имя</th>
              <th>URL</th>
              <th>Дата</th>
              <th>_ga</th>
              <th>roistat_visit</th>
              <th>ya_client_id</th>
              <th>Источник</th>
            </tr>
          </tfoot>
          <tbody>
              <tr class="uk-width-medium uk-text-left" v-for="(table, index) in tables" :key="index">
              <td></td>
              <td>{{ table.phone_lead }}</td>
              <td>{{ table.email_lead }}</td>
              <td>{{ table.name_lead }}</td>
              <td>
                <div style="width: 300px; height: 75px; overflow: hidden; text-overflow: ellipsis">
                  {{ table.msg_lead }}
                </div>
              </td>
              <td>{{ table.site_domain }}</td>
              <td>
                <div style="width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  {{ table.url_lead }}
                </div>
              </td>
              <td>{{ table.first_date }}</td>
              <td>{{ table.go_client_id }}</td>
              <td>{{ table.roistat_visit }}</td>
              <td>{{ table.ya_client_id }}</td>
              <td class="uk-text-truncate">{{ table.name_origin }}</td>
              <td><span class="m-auto material-icons cl-red2 cr-pointer">delete</span></td>
              </tr>
          </tbody>
      </table>
    </div>
      </div>
    </div>
    <div class="uk-margin-top" v-show="tables.length">
      <ul class="uk-grid uk-grid-small uk-flex-center">
          <li v-if="filter.page>1">
            <a class="cl-dark" href="#" @click.prevent="filter.page--; searchLeads()">
              <span class="material-icons">chevron_left</span>
            </a>
          </li>
          <li v-if="(filter.page - 3) > 1 ">
            <a class="cl-dark" href="#" @click.prevent="filter.page -= 3; searchLeads()">
              {{ filter.page - 3 }}
            </a>
          </li>
          <li v-if="(filter.page - 2) > 1 ">
            <a class="cl-dark" href="#" @click.prevent="filter.page -= 2; searchLeads()">
              {{ filter.page - 2 }}
            </a>
          </li>

          <li v-if="(filter.page - 1) >= 1 ">
            <a class="cl-dark" href="#" @click.prevent="filter.page--; searchLeads()">
              {{ filter.page - 1 }}
            </a>
          </li>

          <li>
            <a class="cl-dark cl-vevanta" href="#" @click.prevent>
              {{ filter.page }}
            </a>
          </li>

          <li v-if="(filter.page + 1) < last_page">
            <a class="cl-dark" href="#" @click.prevent="filter.page++; searchLeads()">
              {{ filter.page + 1 }}
            </a>
          </li>
          <li v-if="(filter.page + 2) < last_page">
            <a class="cl-dark" href="#" @click.prevent="filter.page += 2; searchLeads()">
              {{ filter.page + 2 }}
            </a>
          </li>
          <template  v-if="filter.page < last_page">
            <li><span> ... </span></li>
            <li>
              <a class="cl-dark" href="#" @click.prevent="filter.page = last_page; searchLeads()">
                {{ last_page }}
              </a>
            </li>
            <li>
              <a class="cl-dark" href="#" @click.prevent="filter.page++; searchLeads()">
                <span class="material-icons">chevron_right</span>
              </a>
            </li>
          </template>
      </ul>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        statusSort: 0,
        statusLeads: 0,
        tables : [],
        sortDomainActive : '',
        sortCompanyActive : '',
        sortOriginActive : '',
        domains : [],
        companies : [],
        origins : [],
        date_period : [],
        total: 0,
        last_: 0,
        first_page: 1,
        pages: [],
        filter: {
          domain: [],
          company: [],
          origin: [],
          date_period: [],
          page: 1,
          sort: 'desc'
        }
      }
    },

    created() {
      if (this.$route.query.domain) {
        this.filter.domain = [this.$route.query.domain]
      }
      if (this.$route.query.company) {
          this.filter.company = [this.$route.query.company]
      }

      if (this.$route.query.sort) {
          this.filter.sort = this.$route.query.sort
      }

      if (this.$route.query.origin) {
        this.filter.origin = [this.$route.query.origin]
      }
      if (this.$route.query.page) {
          this.filter.page = this.$route.query.page
      }
      if (this.$route.query.date_period) {
          let date = this.$route.query.date_period.split(',')

         if (date.length === 2) {
            this.filter.date_period = date
          }
      }

      this.searchLeads()
      this._get_domains()
      this._get_companies()
      this._get_origins()
  },

    methods: {
      searchLeads() {

        let qs = Object.keys(this.filter).filter(key => {
         if (Array.isArray(this.filter[key]) && this.filter[key].length) {
           return true
         } else if (typeof this.filter[key] === 'string' && this.filter[key]) {
           return true
         } else if (typeof this.filter[key] === 'number') {
           return true
         } else {
           return false
         }
       }).map(key => `${key}=${this.filter[key]}`).join('&')


       let stateObj = {
         foo: 'crm'
       }
      history.pushState(stateObj, "page 2", `/CRM/?${qs}`)


        this.tables = []
        this.statusLeads = 0
        let filter = this.filter

        if (this.$refs.tablesLeads) {
          this.$refs.tablesLeads.scrollIntoView()
        }

        this.$api.post('lead/get_leads',{filter})
        .then(rs => {
          console.log(rs.data)
           this.tables = rs.data.data
           this.total = rs.data.total
           this.last_page = rs.data.last_page
           this.filter.page = rs.data.current_page
           this.statusLeads = 1

        })
      },




      _get_domains() {
        this.$api.post('lead/get_domains')
        .then(rs => {
           this.domains = rs.data.data
        })
      },
      _get_companies() {
        this.$api.post('lead/get_companies')
        .then(rs => {
           this.companies = rs.data.data
      })
    },
      _get_origins() {
        this.$api.post('lead/get_origins')
        .then(rs => {
           this.origins = rs.data.data
      })
    },
    startLeadDate() {
      if (this.filter.date_period.length === 2) {
        if (this.filter.date_period[0] && this.filter.date_period[1]) {
          this.filter.page = 1
          this.searchLeads()
        }
      }
    },
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
  margin-right: 400px;
}

</style>
