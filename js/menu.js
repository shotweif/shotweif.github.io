const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu_navegacion')

console.log(menu)
console.log(hamburger)

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger ){
        menu.classList.toggle("spread")
    }
})