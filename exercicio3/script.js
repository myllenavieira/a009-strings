const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
let fraseModificada = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja")

console.log(fraseModificada);
console.log(`A frase incluí verde? ${fraseModificada.includes("verde")} 
A frase incluí laranja? ${fraseModificada.includes("laranja")}`);

// fraseModificada = fraseModificada.replaceAll("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");
let paraMaiusculo = "mas não deixe o gato sair";
fraseModificada = fraseModificada.replaceAll(paraMaiusculo, paraMaiusculo.toUpperCase());
console.log(fraseModificada);
