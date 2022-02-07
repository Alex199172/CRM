<template>
  <div class="">
    <div class="uk-box-shadow-medium uk-background-default uk-padding-small uk-margin-top brd12">
      <table class="uk-table uk-table-divider uk-table-hover uk-table-small uk-table-middle">
          <caption></caption>
          <thead>
              <tr class="" style="border:none">
                <th class="">Фото</th>
                <th class="">Имя
                    <span
                      class="material-icons cr-pointer show-animation show-animation:hover cl-vevanta uk-text-middle"
                      >arrow_drop_down
                    </span>
                  </th>
                <th class="">Телефон</th>
                <th class="">E-mail</th>
                <th class="">Статус
                  <span
                    class="material-icons cr-pointer show-animation show-animation:hover cl-vevanta uk-text-middle"
                    >arrow_drop_down
                  </span>
                </th>
                <th class="">Операции</th>
              </tr>
          </thead>
          <tbody>
              <tr class="uk-width-medium uk-text-left" v-for="(table, index) in tables" :key="index">
              <td class=""><img class="avatar_nav cr-pointer uk-border-circle" :src='table.photo'></td>
              <td class="">{{table.name}}</td>
              <td class="">{{table.tel}}</td>
              <td class="">{{table.mail}}</td>
              <td>
                <div class="uk-margin-left status__active uk-border-pill" style="width: 15px; height: 15px">
                </div>

              </td>
              <td class="uk-flex">
                <div class='uk-border-circle circle-l bg-grey uk-flex'>
                  <span
                    class="m-auto material-icons cl-blue cr-pointer"
                    >
                    edit
                  </span>
               </div>
               <div class='uk-border-circle circle-l bg-grey uk-flex uk-margin-small-left'>
                 <span
                   class="m-auto material-icons cl-red2 cr-pointer"
                   >
                   delete
                 </span>
              </div>
              </td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        tables: [
          { id:1, photo:'https://fotollia.ru/sites/default/files/styles/category/public/field/image/kakie_oboi_vybrat.jpg', name: 'Alex', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
          { id:1, photo:'https://bipbap.ru/wp-content/uploads/2017/05/000001210.jpg', name: 'Иванов А.А', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
          { id:1, photo:'https://klike.net/uploads/posts/2020-01/1578662816_1.jpg', name: 'Климов П.А', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
          { id:1, photo:'https://fotollia.ru/sites/default/files/styles/category/public/field/image/kakie_oboi_vybrat.jpg', name: 'Alex', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
          { id:1, photo:'https://klike.net/uploads/posts/2020-01/1578662816_1.jpg', name: 'Alex', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
          { id:1, photo:'https://fotollia.ru/sites/default/files/styles/category/public/field/image/kakie_oboi_vybrat.jpg', name: 'Alex', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
          { id:1, photo:'https://fotollia.ru/sites/default/files/styles/category/public/field/image/kakie_oboi_vybrat.jpg', name: 'Alex', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
          { id:1, photo:'https://fotollia.ru/sites/default/files/styles/category/public/field/image/kakie_oboi_vybrat.jpg', name: 'Alex', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
          { id:1, photo:'https://fotollia.ru/sites/default/files/styles/category/public/field/image/kakie_oboi_vybrat.jpg', name: 'Alex', tel: '89044984387', mail: 'wejw@fdcoej.ru', status: 'активен' },
        ],


      }
    },

    methods: {

  }
}
</script>


<style>
.avatar_nav {
  height: 35px;
  width: 35px;
  background: #f5f5f5
}

.status__active {
  background-color: #97c535;
}

</style>
