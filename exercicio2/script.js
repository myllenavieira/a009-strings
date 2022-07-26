let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log("Caracteres antes:", minhaString.length);
minhaString = minhaString.trim()
console.log("Caracteres depois:",minhaString.length);
minhaString = minhaString.replace("________", "sticioso");
console.log(minhaString);

// Mudei a string do tipo const para let para simplificar o código e facilitar as operações
