const nav_link = document.querySelector('.nav-link');
const nav_home = document.querySelector('.nav-home');
const page_home = document.querySelector('.page-home');


nav_home.addEventListener('click', ()=>{
    page_home.classList.toggle('view-pag')
})


/*
nav_link.addEventListener('click', (e)=>{
    if(e.target !== nav_home){
        page_home.classList.toggle('view-pag')
    }else{
        page_home.classList.toggle('view-pag')
    }
}) */