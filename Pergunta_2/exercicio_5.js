/*
    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
        a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
        b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function reverse(string) {
    
    let finalReservation = '';
    
    for (let i = string.length - 1; i >= 0; i--) {
        finalReservation += string[i];
    }

    return finalReservation;

}

const regularString = "Target Sistemas";
const invertedString = reverse(regularString)

console.log(`Regular string : ${regularString}`);
console.log(`Inverted string: ${invertedString}`);