//Função que gera imagens aleatórias para cada partida

function embaralhar(lista){
    let temporario;
    let aleatorio;

    for(let i = lista.length - 1; i !== 0; i--) {

        aleatorio = Math.floor(Math.random() * i);

        temporario = lista[i];
        lista[i] = lista[aleatorio];
        lista[aleatorio] = temporario;

    }
    return lista;
}


//---------------------------------------------------------------------


function ocultar(carta){
    carta.style.backgroundImage = "url('images/verso.png')";
    carta.onclick = clicar;
}

function mostrar(carta){
    carta.style.backgroundImage = `url('images/${concatImagens[Number(carta.id)]}')`;
    carta.onclick = null;
}


function pararClique(){
    for(let carta of cartas){
        carta.onclick = null;
    }
}


function clicar(){
    mostrar(event.target);
    if(primeiraCarta){
        segundaCarta = event.target;
        pararClique();
        verificarIgualdade();
    }
    else{
        primeiraCarta = event.target;
    }
}

function continuarCliques(){
    for(let carta of cartas){
        if(!carta.classList.contains('ok')){
            ocultar(carta);
        }
    }
}

function verificarIgualdade(){
    if(primeiraCarta.style.backgroundImage !== segundaCarta.style.backgroundImage){
        setTimeout(function(){
        ocultar(primeiraCarta);
        ocultar(segundaCarta);
        novaJogada();
        }, 1500);
        
    }
    else{
        primeiraCarta.classList.add('ok');
        segundaCarta.classList.add('ok');
        novaJogada();
    }
}

function novaJogada(){
    primeiraCarta = null;
    segundaCarta = null;
    continuarCliques();
}

let cartas = document.querySelectorAll('.cartas');

let primeiraCarta;
let segundaCarta;

let imagens = ['rafiki.png', 'scar.png', 'shenzi.png', 'simba.png', 'timao.png', 'zazu.png'];

let concatImagens = imagens.concat(imagens);

concatImagens = embaralhar(concatImagens);


for(let carta of cartas){
   mostrar(carta);
}

setTimeout(function(){
    novaJogada();
}, 3000);


