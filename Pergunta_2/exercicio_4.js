/*
    4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

            SP – R$67.836,43
            RJ – R$36.678,66
            MG – R$29.229,88
            ES – R$27.165,48
            Outros – R$19.849,53

        Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const MonthlyBillingRatio= [
    {
        estado: "SP",
        valor: 67836.43
    },
    {
        estado: "RJ", 
        valor: 36678.66
    },
    {
        estado: "MG",
        valor: 29229.88
    },
    {
        estado: "ES",
        valor: 27165.48
    },
    {
        estado: "OUTROS",
        valor: 19849.53
    }
];

const amount = MonthlyBillingRatio.reduce(function (accumulator, object) {
    return accumulator + object.valor;
}, 0);
// console.log(`Amount: R$${amount}`);

let percentageValues= [];
let percentageCalculation;

for (let i = 0; i < MonthlyBillingRatio.length; i++) {
    percentageCalculation = (MonthlyBillingRatio[i].valor * 100) / amount;
    percentageValues[i] = percentageCalculation.toFixed(2);
}

console.log(`${percentageValues}`);