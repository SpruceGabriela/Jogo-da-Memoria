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

function mostrar(carta){
    carta.style.backgroundImage = `url('images/${concatImagens[Number(carta.id)]}')`;
    carta.onclick = null;
}

//----------------------------------------------------

function pararClique(){
    for(let carta of cartas){
        carta.onclick = null;
    }
}

//-----------------------------------------------------

function continuarCliques(){
    for(let carta of cartas){
        if(carta.classList !== 'ok'){
            ocultar(carta);
        }
    }
}

//-----------------------------------------------------


function ocultar(carta){
    carta.style.backgroundImage = "url('images/verso.png')";
    carta.onclick = clicar;
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


for(let carta of cartas){
    carta.onclick = function(event){
        mostrar(event.target);        
    };
}

