
// 🟢 Nível Fácil
// 🔹 Fundamentos

// Saudação com nome
let nome = prompt("Qual seu nome?");
alert("Olá, " + nome + "!");

// Soma simples
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
alert("A soma é: " + (num1 + num2));

// Mensagem no console
console.log("Olá, mundo!");

// Tipo de dado
let dado = prompt("Digite algo:");
alert("O tipo é: " + typeof dado);

// Calcular média
let nota1 = Number(prompt("Nota 1:"));
let nota2 = Number(prompt("Nota 2:"));
alert("Média: " + ((nota1 + nota2) / 2));

// 🔹 Decisão

// Par ou ímpar
let numero = Number(prompt("Digite um número:"));
alert(numero % 2 === 0 ? "Par" : "Ímpar");

// Pode votar?
let idade = Number(prompt("Qual sua idade?"));
alert(idade >= 16 ? "Pode votar" : "Não pode votar");

// Número positivo ou negativo
let valor = Number(prompt("Digite um número:"));
alert(valor > 0 ? "Positivo" : valor < 0 ? "Negativo" : "Zero");

// Desconto para maiores de idade
let idade2 = Number(prompt("Idade:"));
let preco = Number(prompt("Preço:"));
alert("Total: R$" + (idade2 >= 18 ? preco * 0.9 : preco));

// Verificar senha
let senha = prompt("Digite a senha:");
alert(senha === "1234" ? "Acesso permitido" : "Senha incorreta");

// 🔹 Repetição

// Contar de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Repetir nome 3 vezes
let nome3 = prompt("Digite seu nome:");
let i = 0;
while (i < 3) {
    console.log(nome3);
    i++;
}

// Tabuada do 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Contar pares de 1 a 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Somar de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("Soma de 1 a 100:", soma);

// 🟡 Nível Médio
// 🔹 Fundamentos

// Calculadora de operações básicas
let a = Number(prompt("Número 1:"));
let b = Number(prompt("Número 2:"));
console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);

// Conversão de temperatura
let celsius = Number(prompt("Graus Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
console.log("Fahrenheit:", fahrenheit);

// Área de um retângulo
let base = Number(prompt("Base:"));
let altura = Number(prompt("Altura:"));
console.log("Área:", base * altura);

// Mensagem formatada
let nome4 = prompt("Nome:");
let nota = Number(prompt("Nota:"));
console.log(`Nome: ${nome4}, Nota: ${nota}, Aprovado: ${nota >= 6}`);

// Concatenar nome e sobrenome
let nome5 = prompt("Nome:");
let sobrenome = prompt("Sobrenome:");
console.log("Nome completo:", nome5 + " " + sobrenome);

// 🔹 Decisão

// Aprovado ou reprovado
let notaFinal = Number(prompt("Nota final:"));
alert(notaFinal >= 6 ? "Aprovado" : "Reprovado");

// Calculadora com if
let n1 = Number(prompt("Número 1:"));
let n2 = Number(prompt("Número 2:"));
let op = prompt("Operação (+ - * /):");
if (op === "+") alert(n1 + n2);
else if (op === "-") alert(n1 - n2);
else if (op === "*") alert(n1 * n2);
else if (op === "/") alert(n1 / n2);
else alert("Operação inválida");

// Verificar faixa etária
let idade3 = Number(prompt("Idade:"));
if (idade3 <= 12) alert("Criança");
else if (idade3 <= 17) alert("Adolescente");
else if (idade3 <= 59) alert("Adulto");
else alert("Idoso");

// Comparar dois números
let x = Number(prompt("Número 1:"));
let y = Number(prompt("Número 2:"));
if (x > y) alert("Maior: " + x);
else if (x < y) alert("Maior: " + y);
else alert("Iguais");

// Cálculo de IMC
let peso = Number(prompt("Peso (kg):"));
let altura2 = Number(prompt("Altura (m):"));
let imc = peso / (altura2 ** 2);
if (imc < 18.5) alert("Abaixo do peso");
else if (imc < 25) alert("Peso normal");
else if (imc < 30) alert("Sobrepeso");
else alert("Obesidade");

// 🔹 Repetição

// Soma de 5 números digitados
let soma5 = 0;
for (let i = 0; i < 5; i++) {
    soma5 += Number(prompt("Digite um número:"));
}
alert("Soma: " + soma5);

// Tabuada de número escolhido
let num = Number(prompt("Tabuada de qual número?"));
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// Contagem regressiva
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Somar até o usuário digitar 0
let soma0 = 0;
let entrada;
do {
    entrada = Number(prompt("Digite um número (0 para sair):"));
    soma0 += entrada;
} while (entrada !== 0);
console.log("Soma total:", soma0);

// Mostrar letras de uma palavra
let palavra = prompt("Digite uma palavra:");
for (let letra of palavra) {
    console.log(letra);
}

// 🔴 Nível Difícil
// 🔹 Fundamentos

// Manipulação de string
let frase = prompt("Digite uma frase:");
let palavras = frase.trim().split(" ");
alert("Total de palavras: " + palavras.length);

// Fatorial de um número
let fatNum = Number(prompt("Digite um número:"));
let fatorial = 1;
for (let i = 1; i <= fatNum; i++) {
    fatorial *= i;
}
console.log("Fatorial:", fatorial);

// Número aleatório entre 1 e 100
let aleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número sorteado:", aleatorio);

// Criptografar nome (inverter texto)
let nomeInv = prompt("Digite seu nome:");
console.log("Criptografado:", nomeInv.split("").reverse().join(""));

// Conversor de moedas
let reais = Number(prompt("Valor em reais:"));
let cotacao = 5; // exemplo
console.log("Em dólares: $" + (reais / cotacao).toFixed(2));

// 🔹 Decisão

// Verificador de CPF simples
let cpf = prompt("Digite seu CPF:");
alert(cpf.length === 11 ? "CPF aceito" : "CPF inválido");

// Classificação por nota
let nota2 = Number(prompt("Nota:"));
if (nota2 >= 9) alert("Nota A");
else if (nota2 >= 7) alert("Nota B");
else if (nota2 >= 5) alert("Nota C");
else alert("Nota D");

// Jogo: pedra, papel ou tesoura
let p1 = prompt("Jogador 1: pedra, papel ou tesoura");
let p2 = prompt("Jogador 2: pedra, papel ou tesoura");
if (p1 === p2) alert("Empate");
else if ((p1 === "pedra" && p2 === "tesoura") ||
         (p1 === "papel" && p2 === "pedra") ||
         (p1 === "tesoura" && p2 === "papel")) {
    alert("Jogador 1 venceu");
} else {
    alert("Jogador 2 venceu");
}

// Validador de ano bissexto
let ano = Number(prompt("Digite um ano:"));
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert("Ano bissexto");
} else {
    alert("Não é bissexto");
}

// Verificar se é triângulo válido
let l1 = Number(prompt("Lado 1:"));
let l2 = Number(prompt("Lado 2:"));
let l3 = Number(prompt("Lado 3:"));
if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
    alert("É um triângulo");
} else {
    alert("Não é um triângulo");
}

// 🔹 Repetição

// Jogo de adivinhação
let segredo = Math.floor(Math.random() * 10) + 1;
let tentativa;
do {
    tentativa = Number(prompt("Adivinhe o número de 1 a 10:"));
} while (tentativa !== segredo);
alert("Acertou!");

// Contar vogais de uma palavra
let palavra2 = prompt("Digite uma palavra:");
let cont = 0;
for (let letra of palavra2.toLowerCase()) {
    if ("aeiou".includes(letra)) cont++;
}
alert("Total de vogais: " + cont);

// Soma dos ímpares de 1 a 50
let somaImp = 0;
for (let i = 1; i <= 50; i += 2) {
    somaImp += i;
}
console.log("Soma dos ímpares:", somaImp);

// Números primos de 1 a 100
for (let n = 2; n <= 100; n++) {
    let primo = true;
    for (let d = 2; d <= Math.sqrt(n); d++) {
        if (n % d === 0) {
            primo = false;
            break;
        }
    }
    if (primo) console.log(n);
}

// Menu interativo (simples)
let opcao;
do {
    opcao = prompt("Menu:
1 - Opção A
2 - Opção B
sair - Sair");
    console.log("Você escolheu:", opcao);
} while (opcao !== "sair");
