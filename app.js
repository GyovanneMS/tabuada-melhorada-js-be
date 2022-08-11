/*=========================================================
* Objetivo: Criação da interface de uma calculadora de tabuada;
* Data: 11/08/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
=========================================================*/

console.log('Tabuada inteligente');

//import do arquivo de função para realizar calculos
const {tabuada} = require('./Modulos/tabuada.js');
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Bem vindo, a tabuada inteligente!! \nQual a primeira tabuada que deseja ver? ', function(valorInicial){
    let inicial = valorInicial;

    if(inicial == ''){
        console.log('Por favor digite o número inicial!');
        process.exit(0);
    } 
    if(inicial < 2 || inicial > 100){
        console.log('Por favor, apenas números entre 2 e 100');
        process.exit(0);
    } 

    entradaDados.question('Qual a última tabuada que deseja ver? ', function(valorFinal){
        let final = valorFinal;
    
        if(final == ''){
            console.log('Por favor digite o número final!');
            process.exit(0);
        }  
        if(final < 2 || final > 100){
            console.log('Por favor, apenas números entre 2 e 100')
            process.exit(0);
        } 
        entradaDados.question('Qual o primeiro multiplicador que deseja ver? ', function(valorMultiplicaçãoInicial){
            let multiInicial = valorMultiplicaçãoInicial;
        
            if(multiInicial == ''){
                console.log('Por favor digite o número para a primeira multiplicação!');
                process.exit(0);
            }
            if(multiInicial < 0 || multiInicial > 50){
                console.log('Por favor, apenas números entre 0 e 50')
                process.exit(0);
            } 
            entradaDados.question('Qual o último multiplicador que deseja ver? ', function(valorMultiplicaçãoFinal){
                let multiFinal = valorMultiplicaçãoFinal;
            
                if(multiFinal == ''){
                    console.log('Por favor digite o número para a última multiplicação!');
                    process.exit(0);
                }
                if(multiFinal < 0 || multiFinal > 50){
                    console.log('Por favor, apenas números entre 0 e 50')
                    process.exit(0);
                } 
                
                tabuada(inicial, final, multiInicial, multiFinal);
                process.exit(0);

            });
        });
    });
});
