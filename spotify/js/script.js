let doc = document

let homm = doc.querySelector('.homm')
// let le = doc.getElementById('le')
// let nav = doc.querySelector('.nav')
let box = doc.querySelector('.box')
let search = doc.querySelector('.search')
// let pp = doc.querySelector('.pp')
// let logoa = doc.querySelector('.logoa')
// let logoh1 = doc.querySelector('.logoh1')
let searchh = doc.querySelector('#searchh')
let homee = doc.querySelector('#homee')
let serch_poisk = doc.querySelector('.serch_poisk')
let music_block = doc.querySelector('.music_block')
let mini_box = doc.querySelector('.mini_box')
let pley_list = doc.querySelector('.pley_list')
let pause = doc.querySelector('.pause')

let music1 = doc.querySelector('.music1')
let music2 = doc.querySelector('.music2')
let music3 = doc.querySelector('.music3')
let music4 = doc.querySelector('.music4')

let p_music1 = doc.querySelector('#p_music1')
let p_music2 = doc.querySelector('#p_music2')
let p_music3 = doc.querySelector('#p_music3')
let p_music4 = doc.querySelector('#p_music4')





searchh.addEventListener('click', () => {
    homm.style.display = 'none'
    serch_poisk.style.display = 'block'
    music_block.style.display = 'none'
})

homee.addEventListener('click', () => {
    homm.style.display = 'block'
    serch_poisk.style.display = 'none'
    music_block.style.display = 'none'

})

mini_box.addEventListener('click', () => {
    homm.style.display = 'none'
    music_block.style.display = 'block'
})



p_music1.addEventListener('click', () => {
    music1.play()
    music2.pause()
    music3.pause()
    music4.pause()

})
pause.addEventListener('click', () => {
    music1.pause()
    music2.pause()
    music3.pause()
    music4.pause()
    


})

p_music2.addEventListener('click', () => {
    music2.play()
    music1.pause()
    music3.pause()
    music4.pause()

})

p_music3.addEventListener('click', () => {
    music2.pause()
    music1.pause()
    music3.play()
    music4.pause()

})
p_music4.addEventListener('click', () => {
    music2.pause()
    music1.pause()
    music3.pause()
    music4.play()

})









let buton = doc.querySelector('.btn1')
let x = doc.querySelector('.x')
let none = doc.querySelector('.none')
let form = doc.querySelector('.form')
let btn2 = doc.querySelector('.btn2')
let content = doc.querySelector('.content')

