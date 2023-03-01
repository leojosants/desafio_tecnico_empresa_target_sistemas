
/*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE:
        Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
 */

function generateFibonacci(number) {
  
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (let i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    return fibonacci;
    
};

function verifyNumber(number) {

    let receivedNumber = number;
    let exists = '';
    let fibonacci = generateFibonacci(receivedNumber);

    for (let i = 0; i < fibonacci.length; i++) {
        
        if (receivedNumber === fibonacci[i]) {
            exists = 'exists';
        }

    }

    return exists;

}

let informedNumber = 13;
let resultFibonacci = generateFibonacci(informedNumber);

console.log(`The Fibonacci sequence for the ${informedNumber} is: ${resultFibonacci}`);

if (verifyNumber(informedNumber)) {
    console.log('The number exist in the Fibonacci sequence!')
}
else {    
    console.log('The number does not exist in the Fibonacci sequence!')
}