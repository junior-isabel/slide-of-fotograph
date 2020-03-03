
let counter = 0
let imageWidth = 500
let imageHeight = 500
let cellWidth = 100
let cellHeight = 100
let cellCountWidth = imageWidth / cellWidth
let cellCountHeight = imageHeight / cellHeight
function createSpan(left, top, img, width, height, i) {

    let element = document.createElement('span')
    if(counter == i) element.classList.add('enter-move')
    element.classList.add(img)
    element.classList.add('img')
    element.style.width = width + 'px'
    element.style.height = height + 'px'
    element.style.left = left + 'px'
    element.style.top = top + 'px'
    element.style.backgroundPositionX = (-left) + 'px'
    element.style.backgroundPositionY = (-top) + 'px'
    return element
}
let slides =  document.querySelectorAll('#slider .slide')
for(let i = 0;  i < slides.length; i++) {
    let img = slides[i].dataset.source
    
    for(let x = 0, left = 0; x < cellCountWidth; x++, left += cellWidth) {
        for(let y = 0, top = 0; y  < cellCountHeight; y++, top += cellHeight) {
            slides[i].appendChild(createSpan(left, top, img, cellWidth, cellHeight, i))
        }
    }
}

function handlerNext () {
    counter++

    if(counter >= slides.length) counter = 0
    let slide = slides[counter]
    const { length } =  slide.children
    for(let i = 0; i < slides.length; i++) {
        let len = slides[i].children.length
        for(let j = 0; j < len; j++) {
            slides[i].children[j].classList.remove('enter-move')
        }
    }
    for(let i = 0; i < length; i++) {
        
        setTimeout(function () {
            slide.children[i].classList.add('enter-move')
        }, Math.floor(Math.random() * 5000))
    }

}
function outElement() {

}
document.querySelector('#next').addEventListener('click', handlerNext)

