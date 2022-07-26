const nomeDoUsuario = prompt("Qual seu nome?");
const comida1 = prompt("Qual sua comida favorita?");
const comida2 = prompt("Sua segunda comida favorita?");
const comida3 = prompt("Sua terceira comida favorita?");

let mensagem = `Estas são as comidas favoritas de ${nomeDoUsuario}
- ${comida1}
- ${comida2}
- ${comida3}`

console.log("``` \n" + mensagem + "\n ```");
