
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className ="";
    opciones[1].className ="";
    opciones[2].className ="";
    opciones[3].className ="";
    opciones[4].className ="";
    link.className = "seleccionado";
    
    var x = document.getElementById("nav");
    x.className ="";
}


function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive"
    }else{
        x.className = ""
    }
}

window.onscroll =function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills =document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2")
        document.getElementById("bd").classList.add("barra-progreso3")
        document.getElementById("ps").classList.add("barra-progreso4")
        document.getElementById("rc").classList.add("barra-progreso5")
        document.getElementById("gt").classList.add("barra-progreso5")
        document.getElementById("gt").classList.add("barra-progreso6")
        document.getElementById("css").classList.add("barra-progreso7")
    }
}



const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});
