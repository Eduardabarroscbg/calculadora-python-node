const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcular(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Erro: divisão por zero";
      }
      return num1 / num2;
    default:
      return "Operação inválida";
  }
}

function iniciarCalculadora() {
  rl.question("Digite o primeiro número: ", (input1) => {
    const num1 = parseFloat(input1);

    rl.question("Digite o segundo número: ", (input2) => {
      const num2 = parseFloat(input2);

      rl.question("Escolha a operação (+, -, *, /): ", (operacao) => {
        const resultado = calcular(num1, num2, operacao);
        console.log(`Resultado: ${resultado}`);

        rl.question("Deseja realizar outra operação? (s/n): ", (resposta) => {
          if (resposta.toLowerCase() === "s") {
            console.log("");
            iniciarCalculadora();
          } else {
            console.log("Encerrando a calculadora. Até a próxima!");
            rl.close();
          }
        });
      });
    });
  });
}

// Execução
iniciarCalculadora();
