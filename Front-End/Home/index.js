function user() {
    window.location.href = "../Login/login.html";
}

function informatica(){
    window.location.href = "../ViewOcorrenciaTI/view_ocorrencia_ti.html";
}

function manutencao(){
    window.location.href = "../ViewOcorrenciaManutencao/view_ocorrencia_manutencao.html";
}

function rh(){
    window.location.href = "../ViewOcorrenciaRecursosHumanos/view_ocorrencia_rh.html"
}

function marketing(){
    window.location.href = "../ViewOcorrenciaMarketing/view_ocorrencia_marketing.html"
}

function logistica(){
    window.location.href = "../ViewOcorrenciaLogistica/view_ocorrencia_logistica.html"
}

function financeiro(){
    window.location.href = "../ViewOcorrenciaFinanceiro/view_ocorrencia_financeiro.html"
}

function meusChamados(){
    window.location.href = "../MeusChamados/meus_chamados.html"
}
let modeChange = document.querySelector('.modeChange');
let containerNav= document.querySelector('.container-fluid');
let card = document.querySelector('.card');
let body = document.querySelector('body');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');


function chngimg() {
    var img = document.getElementById('idlogo').src;
    if (img.indexOf('LogoSolution.png') != -1) {
        document.getElementById('idlogo').src  = "../Assets/Group7.png";
    }
     else {
       document.getElementById('idlogo').src = "../Assets/LogoSolution.png";
   }

}

modeChange.addEventListener('click', () => {
    containerNav.classList.toggle("darkMode");
    card.classList.toggle("darkModeCard");
    body.classList.toggle("darkMode");
    navbar.classList.toggle("darkMode");

    


    chngimg()


});