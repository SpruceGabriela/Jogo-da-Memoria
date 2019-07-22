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

function ocultar(cartas){
    cartas.style.backgroundImage = "url('images/verso.png')";
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

