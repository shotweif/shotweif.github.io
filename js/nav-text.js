const pagID = document.getElementById("pagID")
const nav_bar = document.getElementById("header-pag")
const elementHtml = document.createElement("div")
const elementHtml2 = document.createElement("div")
 
let ID_Page = pagID.className;
let pageTitle = '';
//--------------------------------
//------ Directorios de navegacion
let identify = "ex"
let pagDir = ["index.html","pages/drawing.html","pages/cosplays.html",
"pages/products.html","pages/developer.html","pages/me.html"];
// ----- Nombres de las paginas
let pagName = ["Shotweif,web","Some of my,Art","Create,suits",
"My,shop","Software,Developer","Quien es,Shotweif"]
let pagNameSelecter = ""
//------ Elementos extras
let elemetsDir = ["resource/media/logo/superior shotweif logo - v2-min.png"];
let fhotosSection = ["https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
/*Drawing*/"https://images.unsplash.com/photo-1569154076682-4c0466623ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
/*Cosplay*/"https://images.unsplash.com/photo-1598669266459-eef1467c15be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
/*Products*/"",
/*Developer*/"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
/*Me*/""]
let letSecetPH = ""

const funcionAsigNav_Tible = () =>{
    
    switch (ID_Page){
        case "Inicio-Page":
            pageTitle = 'INICIO'
            identify = "ex"
            pagNameSelecter = pagName[0]
            letSecetPH = fhotosSection[0]
            break
        case "Drawing-Page":
            pageTitle = 'DRAWING'
            identify = "in"
            pagNameSelecter = pagName[1]
            letSecetPH = fhotosSection[1]
            break
        case "Cosplays-Page":
            pageTitle = 'COSPLAY'
            identify = "in"
            pagNameSelecter = pagName[2]
            letSecetPH = fhotosSection[2]
            break
        case "Productos-Page":
            pageTitle = 'SHOP'
            identify = "in"
            pagNameSelecter = pagName[3]
            letSecetPH = fhotosSection[3]
            break
        case "Developer-Page":
            pageTitle = 'DEVELOPER'
            identify = "in"
            pagNameSelecter = pagName[4]
            letSecetPH = fhotosSection[4]
            break
        case "Sobre-Page":
            pageTitle = 'SOBRE MI..'
            identify = "in"
            pagNameSelecter = pagName[5]
            letSecetPH = fhotosSection[5]
            break
        default:
    }
    if(identify != "ex"){
        for(i=0; i<pagDir.length; i++){
            pagDir[i] = "../"+pagDir[i]
        }
        for(i=0; i<elemetsDir.length;i++){
            elemetsDir[i] = "../"+elemetsDir[i] 
        }
    }
}

const funtionHTMLlog = () =>{
    pagNameSelecter = pagNameSelecter.split(",")

    elementHtml.innerHTML = `
        <div class="barra pst-mode-fixed color-navBar">
            <div class="container-st-img">
                <img class="form-circle color-img-nav" src="`+elemetsDir[0]+`" alt="NordicLogoShotweif">
            </div>

            <!-- PC navegador -->
            <nav class="link color-text-nav ">
                <a href="`+pagDir[0]+`"><p><i class='bn bx bx-home-circle'></i> Inicio</p></a>
                <a href="`+pagDir[1]+`"><p><i class='bx bx-paint'></i> Drawing</p></a>
                <a href="`+pagDir[2]+`"><p><i class='bx bx-mask' ></i> Cosplays</p></a>
                <a href="`+pagDir[3]+`"><p><i class='bx bxs-shopping-bags'></i> Shop</p></a>
                <a href="`+pagDir[4]+`"><p><i class='bx bx-code-alt'></i> Developer</p></a>
                <a href="`+pagDir[5]+`"><p><i class='bx bx-brain'></i> Sobre mi..</p></a>
            </nav>

            <!-- Movil navegador -->
            <div class="movil-icon-container">
                <i class='bx bx-menu-alt-left hamburger'></i>
            </div>
            <div class="movil-container pst-mode-fixed color-navBar-movil">
                <nav class="movil-link color-text-nav">
                    <a> <p></p></a>
                    <a href="`+pagDir[0]+`"><p><i class='bn bx bx-home-circle'></i> Inicio</p></a>
                    <a href="`+pagDir[1]+`"><p><i class='bx bx-paint'></i> Drawing</p></a>
                    <a href="`+pagDir[2]+`"><p><i class='bx bx-mask' ></i> Cosplays</p></a>
                    <a href="`+pagDir[3]+`"><p><i class='bx bxs-shopping-bags'></i> Shop</p></a>
                    <a href="`+pagDir[4]+`"><p><i class='bx bx-code-alt'></i> Developer</p></a>
                    <a href="`+pagDir[5]+`"><p><i class='bx bx-brain'></i> Sobre mi..</p></a>
                </nav>
            </div>
            <!-- Active page -->
                <div class="class-active">
                    <h2 data-aos="flip-right">`+pageTitle+`</h2>
                    <!--img class="rebecca" src="resource/media/image/dfekc0x-36f1a938-d948-45f3-9498-3a76fd24e322.gif" alt=""-->
                </div>        
        </div>
    `
    elementHtml2.innerHTML = `
        <!-- Portada de inicio -->
        <div class="img-port">
            <div class="contenedor-img-port" data-aos-delay="50">
                <img src="`+letSecetPH+`" alt="">
            </div>
            <div class="title-port txt-1" data-aos="flip-up" data-aos-delay="300">
                <h3 class="titlePag-port txtp1">`+pagNameSelecter[0]+`</h3>
            </div>
            <div class="title-port txt-2" data-aos="flip-up" data-aos-delay="300">
                <h3 class="titlePag-port txtp2">`+pagNameSelecter[1]+`</h3>
            </div>
        </div>
    `
    nav_bar.appendChild(elementHtml)
    console.log(ID_Page)

    if(ID_Page == "Sobre-Page"){
        
        console.log("no entra o si..")
    }else{
        nav_bar.appendChild(elementHtml2)
    }
    
}


funcionAsigNav_Tible();
funtionHTMLlog();