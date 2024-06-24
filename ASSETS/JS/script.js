let btn_changeColor = document.querySelector('#btn_changeColor');
let areaPage = document.body;
let typeColor = document.querySelector('#typeColor');
let colorSelected;
let nameColor = document.querySelector('#nameColor');


let cores = ['yellow', 'orange', 'red', 'purple', 'blue', 'green', 
    '#ffae42' /* amarelo-alaranjado */, 
    '#ff4000' /* vermelho-alaranjado */,
    '#993399' /* vermelho-arrocheado */,
    '#9F5F9F' /* azul-arrocheado */,
    '#008080' /* azul-esverdeado */
]


//  getRandomNumber gera um índice aleatório (temporário)     
function getRandomNumber(a, b) {   
    return Math.floor( Math.random() * (b - a + 1) + a );
}

//  Definição do Índice da Nova Cor:    indiceTemp >> indiceAtual
let indiceAtual;
let indiceTemp;
nameColor.innerText = '';
typeColor.innerText = '';


btn_changeColor.addEventListener('click', () => {
    //  Definindo um índice temporário para a seleção da cor na array.cores
    indiceTemp = getRandomNumber(0, cores.indexOf(cores[cores.length-1]));

    if(indiceTemp != indiceAtual) {
        indiceAtual = indiceTemp;
    } else {
        let indiceTemp2 = getRandomNumber(0, cores.indexOf(cores[cores.length-1]));
        indiceAtual = indiceTemp2;
    }

    colorSelected = cores[indiceAtual];
    areaPage.style.backgroundColor = colorSelected;
    typeColor.innerText = '';

    document.querySelector('.background .backgroundColor').style.display = 'block'
    document.querySelector('.typeColor').style.display = 'block'


    switch(colorSelected) {
        case 'yellow':
            nameColor.innerText = 'Amarelo';
            typeColor.innerText = 'Cor Primária';
            break;
        
        case 'red':
            nameColor.innerText = 'Vermelho';
            typeColor.innerText = 'Cor Primária';
            break;

        case 'blue':
            nameColor.innerText = 'Azul';
            typeColor.innerText = 'Cor Primária';
            break;

        case 'orange':
            nameColor.innerText = 'Laranja';
            typeColor.innerText = 'Cor Secundária';
            break;

        case 'purple':
            nameColor.innerText = 'Violeta';
            typeColor.innerText = 'Cor Secundária';
            break;

        case 'green':
            nameColor.innerText = 'Verde';
            typeColor.innerText = 'Cor Secundária';
            break;

        case '#ffae42':
            nameColor.innerText = 'Amarelo-Alaranjado';
            typeColor.innerText = 'Cor Terciária';
            break;

        case '#ff4000':
            nameColor.innerText = 'Vermelho-Alaranjado';
            typeColor.innerText = 'Cor Terciária';
            break;

        case '#993399':
            nameColor.innerText = 'Vermelho-Arrocheado';
            typeColor.innerText = 'Cor Terciária';
            break;

        case '#9F5F9F':
            nameColor.innerText = 'Azul-Arrocheado';
            typeColor.innerText = 'Cor Terciária';
            break;

        case '#008080':
            nameColor.innerText = 'Azul-Esverdeado';
            typeColor.innerText = 'Cor Terciária';
            break;
    };
});