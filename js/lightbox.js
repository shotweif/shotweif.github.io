const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburger1 = document.querySelector('.hamburger')
/*
window.addEventListener("keypress", checkKeyPress, false);
function checkKeyPress(key){
    if(key.keyCode == "65"){
        alert("LA TCLA ACTIVA -a*-")
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage')
        hamburger1.style.opacity = '1'
    }
}*/

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage')
        hamburger1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage')
    hamburger1.style.opacity = '0'
}