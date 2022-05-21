const chessPiece = "PEÃO"

switch (chessPiece.toLowerCase()) {
    case "peão":
        console.log("Peão-> Vertical - limite de até 2 casas no primeiro movimento e 1 nos demais / captura na diagonal movimentando 1 casa");
        break;

    case "torre":
        console.log("Torre-> Vertical ou Horizontal - sem limite de casas");
        break;

    case "cavalo":
        console.log("Cavalo-> Movimento em 'L' e pode pular sobre as peças - DICA: se sair de uma casa escura, a de chegada será clara, e vice-versa");
        break;

    case "bispo":
        console.log("Bispo-> Diagonal - sem limite de casas");
        break;

    case "rainha":
        console.log("Rainha-> Diagonal, Vertical ou Horizontal - sem limite de casas");
        break;

    case "rei":
        console.log("Diagonal, Vertical ou Horizontal - limite de 1 casa");
        break;

    default:
        console.log("Erro: peça inválida");
};