/*=========================================================
* Objetivo: Criação de uma calculadora de tabuada;
* Data: 11/08/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
=========================================================*/

const tabuada = function(valorIncial, valorFinal, valorMultiInicial, valorMultiFinal){
    let inicial = parseInt(valorIncial);
    let final = parseInt(valorFinal);
    let multiInicial = parseInt(valorMultiInicial);
    let multiFinal = parseInt(valorMultiFinal);
    let resultado;

    for(let i = inicial; i <= final; i++){
        console.log('\nTabuada do ' + i+ '\n');
        for(let mi = multiInicial; mi <= multiFinal; mi++){
            resultado = mi * i;
            console.log(i + ' x ' + mi + ' = ' + resultado);
        };
    };
};

module.exports = {
    tabuada
}