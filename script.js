let btnLamp = document.getElementById('lightSwitch');
let lamp = document.getElementById('lightBulb');

btnLamp.onclick = function(){
    if(btnLamp.value === 'lightUp'){
        lamp.src = 'img/lightbulbOn.png'
        btnLamp.value = 'blackout'
        document.body.style.background = "#0f0f0f"
        document.body.style.color = "#e2e2e2"
        img.src = 'img/beetlejuice.png'
    } else{
        lamp.src = 'img/lightbulbOff.png'
        btnLamp.value = 'lightUp'
        document.body.style.background = "#e2e2e2"
        document.body.style.color = "#0f0f0f"
        img.src = 'img/lydia-deetz.png'
    }
}

lamp.onclick = function(){
    lamp.classList.toggle('active')
}

// DESESTRUTURAÇÃO
//      0        1
const [texto, senha] = document.querySelectorAll("input");
const btnLogin = document.querySelector(".btnLogin");
const img = document.querySelector(".lydia");

function verificar(){
    if(texto.value && senha.value.length >= 8){

        btnLogin.removeAttribute("disabled");
        img.classList.add("active");
    }else{
        //                ( nome    ,   valor)
        btnLogin.setAttribute("desativa", "disabled");
        img.classList.remove("active");
    }
}
// Método utilizado para adicionarmos um evento
texto.addEventListener("input", verificar);
senha.addEventListener("input", verificar);


// BÔNUS
// Adicionando atalhos com KEYBOARD para facilitar nossa navegação
// function handleKeyboard(event){

//     if(event.key === "y"){
//         document.body.classList.toggle("amarelo")
//     }
// }

// window.addEventListener("keydown", handleKeyboard);


