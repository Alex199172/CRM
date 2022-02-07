<template>
  <div class="">
    <div class="uk-height-1-1 uk-text-center">
      <div class="fs18">Загрузите необходимые изображения</div>
      <form class="uk-margin-top uk-form-custom uk-drag uk-width-small uk-padding uk-background-muted uk-text-center" ref="files">
        <span class="material-icons">save_alt</span>
        <input name="file[]" type="file" multiple @change="showFiles" accept=".jpg, .jpeg, .png">
      </form>

      <div v-if="filesPreload.length" class="uk-margin">
        <div class="uk-text-left">
          Выбрано ({{ filesPreload.length }})
        </div>

        <div class="uk-grid uk-grid-small uk-margin">
          <template v-for="(file, i) in filesPreload">
            <div class="uk-margin-bottom"  :key="i" v-if="file.statusLoad">
              <div class="uk-position-relative uk-background-muted uk-border-rounded">
                <div class="uk-position-absolute uk-height-1-1 uk-width-1-1 uk-border-rounded" style="background: rgb(255 255 255 / 62%);" :class="{'z-index-10': file.statusLoad === 2}">
                  <img class="uk-position-center" src="/images/icons/preload2.svg" alt="">
                </div>
                <div
                  class="op0-show uk-position-relative uk-width-small uk-height-small uk-border-rounded uk-background-center-center uk-background-cover"
                 :style="`background-image: url(${file.blob})`">

                 <div class="cr-pointer op0 uk-border-rounded bg-shadow uk-position-absolute uk-height-1-1 uk-width-1-1">
                   <span class="cl-wh material-icons uk-position-center" @click="delFile(i)">delete</span>
                 </div>
                </div>
              </div>
            </div>
          </template>
        </div>


        <div class="btn bg-yellow brd36 fnt-med cl-wh" @click="saveFiles">
          <div class="uk-grid uk-grid-small uk-flex-middle">
            <div class="uk-flex">
              <span class="material-icons">update
              </span>
            </div>
            <div>
              <span>Загрузить</span>
            </div>
          </div>
        </div>

      </div>

      <div class="uk-margin uk-text-left">
        <div>Ваши изображения</div>
      </div>

      <div class="uk-grid uk-grid-small uk-margin uk-flex-center">
        <template v-for="(img, i) in images" :key="i" >
          <div class="uk-margin-bottom" @click="showMoreImg(i)">
            <div class="uk-position-relative uk-background-muted uk-border-rounded">
              <div class="uk-position-absolute uk-height-1-1 uk-width-1-1 uk-border-rounded" style="background: rgb(255 255 255 / 62%);">
                <img class="uk-position-absolute" src="/images/icons/preload2.svg" alt="">
              </div>
              <div
                class="op0-show uk-position-relative uk-width-small uk-height-small uk-border-rounded uk-background-center-center uk-background-cover"
               :style="`background-image: url(https://cdn.vevanta.com/sk/media_libs/${img.first})`"
               >

               <div class="cr-pointer op0 uk-border-rounded bg-shadow uk-position-absolute uk-height-1-1 uk-width-1-1">
                 <span class="cl-wh material-icons uk-position-center">preview</span>
               </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div v-show="statusImages !== 2">
        <span v-show="statusImages === 1" class="material-icons fs18 cr-pointer" @click="filter.page++;getImages()">add_circle</span>
        <div v-show="statusImages === 0">
          <img src="/images/icons/preload.svg" alt="">
        </div>
      </div>
    </div>

    <div ref="modalMoreInfoImg" uk-modal>
      <div class="uk-modal-dialog uk-modal-body" v-if="activeImgIndex == 0">
        <img :src="`https://cdn.vevanta.com/sk/media_libs/${images[activeImgIndex].first}`" alt="">
      </div>
    </div>


    <div ref="modalMoreInfoImg" class="uk-modal-container" uk-modal>
      <div class="uk-modal-dialog uk-modal-body" v-if="typeof activeImgIndex === 'number'">
        <div class="uk-grid uk-grid-small">
          <div class="uk-width-1-2">
            <div class="uk-background-muted uk-width-1-1 uk-height-medium uk-flex uk-flex-middle uk-flex-center" style="padding: 10px;">
              <img style="max-height: 100%" :src="`https://cdn.vevanta.com/sk/media_libs/${images[activeImgIndex].first}`" alt="">
            </div>

          </div>
          <div class="uk-width-1-2 uk-child-width-1-1">
            <div>
              <span class="fnt-bld">Размер файла:</span> {{images[activeImgIndex].size }}
            </div>
            <div>
              <span class="fnt-bld">Размеры:</span> {{ images[activeImgIndex].first_width }}x{{ images[activeImgIndex].first_height }}
            </div>
            <div>
              <span class="fnt-bld">Формат</span> {{images[activeImgIndex].extension }}
            </div>
            <div>
              <span class="fnt-bld">Имя файла</span>
              <input class="uk-input" type="text" name="" :value="images[activeImgIndex].first">
            </div>
            <div>
              <span class="fnt-bld">URL</span>
              <input class="uk-input" type="text" name="" :value="`https://cdn.vevanta.com/sk/media_libs/${images[activeImgIndex].first}`">
            </div>
            <div class="uk-flex uk-flex-middle uk-margin-top cr-pointer" @click="selectImage">
              <span v-show="statusImages === 1" class="material-icons fs18 uk-margin-small-right">add_circle</span> <span>Выбрать</span>
            </div>
          </div>


        </div>

      </div>
    </div>
  </div>
</template>
<script>
import UIkit from 'uikit'
  export default {
    props: ['selectImg'],
    data() {
      return {
        statusFiles: 1,
        filesPreload: [], // Файлы для отображения preview
        fileList: [],
        files: [],
        filter: {
          page: 1,
        },
        activeImgIndex: null,
        statusImages: 0,
        images: []
      }
    },

    created() {
      let arr1 = ['key1', 'key2', 'key3']
      delete arr1[1]
      this.getImages()
    },

    methods: {
      showFiles(e) {
        this.fileList = e.target.files

        Array.from(e.target.files).forEach((file, index) => {
          let reader = new FileReader();

          this.filesPreload.push({
            index,
            blob: URL.createObjectURL(file),
            statusLoad: 1,
          });

        });
      },

      delFile(index) {
        this.filesPreload.splice(index, 1)
      },

      saveFiles() {
        this.filesPreload.forEach((item, i) => {
          this.filesPreload[i].statusLoad = 2

          let file_data = new FormData()
          file_data.append('photo', this.fileList[i])
          this.$api.post('media/add_img', file_data, {
            headers: {
              'Content-type': 'multipart/form-data'
            }
          })
          .then(rs => {
            this.images.unshift(rs.data.img)
            this.filesPreload[i].statusLoad = 0
        //    this.filesPreload.splice(i, 1)
      //      this.fileList.splice(i, 1)
          })

        })
      },

      getImages() {
        this.statusImages = 0

        this.$api.post('/media/filter', {
          filter: this.filter
        })
        .then(rs => {
          if (rs.data.data.length) {
            this.statusImages = 1
            rs.data.data.forEach((item, i) => {
              this.images.push(item)
            });
          } else {
            this.statusImages = 2
          }
        })
      },

      showMoreImg(indexImg) {
        this.activeImgIndex = indexImg
       UIkit.modal(this.$refs.modalMoreInfoImg, {
         stack: true
       }).show()
     },

     selectImage() {
       this.$emit('selectImg', this.images[this.activeImgIndex].first)
       UIkit.modal(this.$refs.modalMoreInfoImg, {
         stack: true
       }).hide()
     }

    }
  }
</script>
