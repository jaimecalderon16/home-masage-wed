document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
document.getElementById("back-menu").addEventListener("click", ocultar_menu);

const nav= document.getElementById("nav");
const bakc_menu = document.getElementById("back-menu");
const anchoventa = window.innerWidth;

if(anchoventa < 430){
    document.getElementById("back-menus1").addEventListener("click", ocultar_menu);
    document.getElementById("back-menus2").addEventListener("click", ocultar_menu);
    document.getElementById("back-menus3").addEventListener("click", ocultar_menu);
}

function mostrar_menu(){
    nav.style.display = "flex";
    nav.style.right ="0px";
    bakc_menu.style.display ="block";
};

function ocultar_menu(){
    nav.style.display = "none";
    nav.style.right ="260px";
    bakc_menu.style.display ="none";
};


const whatssapp = document.getElementById("btn-whatssapp");
const perfil = document.getElementById("perfil-whatsapp");
const borbuja = document.getElementById("chat-borbuja");



setInterval( function(){
    borbuja.style.display = "block";
    whatssapp.style.display = "none";
    perfil.style.display="block";
},2000 * 9)

setInterval(function(){
    borbuja.style.display = "none";
    whatssapp.style.display = "block";
    perfil.style.display="none";
},4000 * 9)