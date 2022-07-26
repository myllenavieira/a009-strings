const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let minhaString2 = minhaString.trim()

console.log("Caracteres antes:", minhaString.length);
console.log("Caracteres depois:",minhaString2.length);

minhaString2 = minhaString2.replace("________", "sticioso");

console.log(minhaString2);
