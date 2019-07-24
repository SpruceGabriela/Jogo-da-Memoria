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

//----------------------------------------------------

function mostrar(cartas){
    cartas.style.backgroundImage = `url('images/${concatImagens[Number(cartas.id)]}')`;
    cartas.onclick = null;
}

//----------------------------------------------------

function pararClique(){
    for(let carta of cartas){
        cartas.onclick = null
    }
}

//-----------------------------------------------------

function continuarCliques(){
    for(let carta of cartas){
        if(carta.classList !== 'correta'){
            ocultar(carta);
        }
    }
}

//-----------------------------------------------------



function ocultar(cartas){
    cartas.style.backgroundImage = "url('images/verso.png')";
    cartas.onclick = clicar;
}

function verificarIgualdade(){
    if(primeiraCarta.style.backgroundImage !== segundaCarta.style.backgroundImage){
        ocultar(primeiraCarta);
        ocultar(segundaCarta);
        
    }
    else{
        primeiraCarta.classList.add('ok');
        segundaCarta.classList.add('ok')
    }
}

//------------------------------------------------------

let cartas = document.querySelectorAll('.cartas');

let primeiraCarta;
let segundaCarta;

let imagens = ['rafiki.png', 'scar.png', 'shenzi.png', 'simba.png', 'timao.png', 'zazu.png'];

let concatImagens = imagens.concat(imagens);

concatImagens = embaralhar(concatImagens);

//-----------------------------------------------------

for(carta of cartas){
    mostrar(carta);
}

