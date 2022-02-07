
let images = document.querySelectorAll('.image')

images.forEach(item => {
  item.addEventListener('click', () => {
    let circleLabel  = item.querySelector('.circle__label')
    let doteLabel = item.querySelector('.dote__label')

    circleLabel.classList.toggle('circle__label-active')
    doteLabel.classList.toggle('dote__label-active')
    item.classList.toggle('image-active')
  })
})

let inputBlocks = document.querySelectorAll('.input__block')

inputBlocks.forEach(item => {
  item.addEventListener('click', () => {
    let circleLabel  = item.querySelector('.circle__label')
    let doteLabel = item.querySelector('.dote__label')

    circleLabel.classList.toggle('circle__label-active')
    doteLabel.classList.toggle('dote__label-active')
    item.classList.toggle('input__block-active')
  })
})
