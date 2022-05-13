const custo = 0.5;
const venda = 2;

let custoTotal = 1.2 * custo;
let lucro = venda - custoTotal;

if (custo < 0 || venda < 0) {
    console.log("Erro, valores inválidos");
} else {
    console.log(lucro * 1000)
};
