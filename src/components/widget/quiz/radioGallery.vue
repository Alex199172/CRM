<template>
    <hr>
  <div class="body__title uk-text-left">

    <div class="fs28@s fs20 uk-margin-small-bottom uk-text-left">
      {{question.name}}
    </div>

    <div class="uk-grid uk-flex-around">
      <div v-for="(answer, index) in question.answer" :key="index">
        <label>
        <div class="image uk-position-relative uk-margin-bottom"
          :class="{'image-active': question.checked === index}">
          <img class="" :src="`https://cdn.vevanta.com/sk/media_libs/${answer.img}`" alt="">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" class="uk-position-absolute uk-position-top-right uk-margin uk-margin-right"
          :class="{'circle__label-active': question.checked === index}">
            <path class="circle__label" d="M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12">
            </path>
            <path class="dote__label" d="M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
            :class="{'dote__label-active': question.checked === index}">
            </path>
          </svg>
          <input class="input__radio uk-position-absolute uk-position-top-right uk-margin uk-margin-right"
          type="radio"
          v-model="question.checked"
          :value="index">
          <div class="subtitle">
            {{answer.value}}
          </div>
        </div>
            </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['item', 'index', 'keyQuestion'],
  data() {
    return {
      question: {},
      step: ''
    }
  },
  created() {
    this.question = this.item
  },
  methods: {

  }
}
</script>
<style scoped>
.background {
  background: rgb(0 0 0 / 54%);
  overflow-y: auto;
}

.modal {
  width: 100%;
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  max-width: 900px !important;
  margin: auto;
}

.image {
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  cursor: pointer;
}

.subtitle {
  color: rgba(54,54,54,0.7);
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 16px;
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

.input__radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.dote__label {
  display: none;
  fill: rgba(0,0,0,0.54)
}

.dote__label-active {
  display: block;
  fill: #46b9b4;
}

.circle__label-active {
  fill: #46b9b4;
}

.image:hover svg {
  border-radius: 50%;
  -webkit-box-shadow: 0px 5px 0px 10px rgb(70, 185, 180, 0.2);
  -moz-box-shadow: 0px 5px 0px 10px rgb(70, 185, 180, 0.2);
  box-shadow: 0px 1px 5px 10px rgba(70, 185, 180, 0.2);
  transition: 0.5s;
}

.image-active {
  border: solid 1px #46b9b4;
}

.input__block-active {
  border: 1px solid #46b9b4;
}

</style>
