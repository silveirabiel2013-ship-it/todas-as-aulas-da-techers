// **1. O Boas-vindas Personalizado:** 
// Crie uma variável para armazenar o nome de um aluno 
// e outra para o nome de um curso. Exiba no console a frase: 
// "Olá [nome], bem-vindo ao curso de [curso]!".

let nome = "Ana"
let curso = "Programação"

console.log("Olá "+ nome + " bem-vindo ao curso de " + curso)

// **2. Calculadora de Idade Canina:**
// Crie uma variável com a idade de um cachorro e calcule a idade 
// "humana" (multiplicando por 7). Exiba o resultado.
let idade = 5
let resultado = idade * 7

console.log("O Sammy tem " + resultado + " anos!")

// **3. Sistema de Pontuação:**
// Um jogador começa com 100 pontos. Ele ganha um bônus de 20% após uma missão. 
// Crie as variáveis, faça o cálculo e mostre o novo total.

let jogador = 100
let bonus = 0.20
let pontos = jogador * bonus

console.log(jogador+pontos)


// **4. Filtro de Idade:**
// Crie uma variável `idade`. Se for 18 ou mais, exiba "Acesso liberado". 
// Caso contrário, exiba "Acesso bloqueado: menor de idade".

let idade2 = 19

if(idade2 >= 18){
    console.log("Acesso liberado")
}else{
    console.log("Acesso negado")
}

// **5. Medidor de Temperatura:**
// Crie uma variável `temperatura`. Se for maior que 30, exiba "Está calor!". 
// Se for entre 15 e 30, "Clima agradável". Se for menor que 15, "Está frio!".

let temperatura = 10

if(temperatura > 30){
    console.log("Está calor!")
}else if(temperatura >= 15 && temperatura<=30){
    console.log("Clima agradável")
}else{
    console.log("Está frio!")
}

// **6. Login Simples:**
// Defina uma variável `senhaCorreta = "1234"`. Crie uma variável `tentativa`.
//  Se forem iguais, exiba "Login realizado!", se não, "Senha incorreta".
let senhaCorreta = "1234"
let tentativa = "1235"

if(tentativa === senhaCorreta){
    console.log("Login realizado!")
}else{
    console.log("Senha incorreta")
}

// **7. Contador de Lançamento de Foguete (for):**
// Crie um laço que conte de 10 até 0 e, no final, exiba "Decolar! 🚀".
for(let i = 10; i>=0; i--){
    console.log(i)
}
console.log("Decolar! 🚀")

// **8. Tabuada Dinâmica (for):**
// Escolha um número (ex: 5) e use um laço para exibir a tabuada dele de 1 a 10 
// (ex: "5 x 1 = 5", "5 x 2 = 10"...).
let num = 5

for(let ta = 1; ta<=10; ta++){
    let resultado2 = num*ta
    console.log(resultado2)
}
// **9. Verificador de Dados (while):**
// Simule um download. Crie uma variável `progresso = 0`. Enquanto o progresso 
// for menor que 100, adicione 20 e exiba "Baixando... [progresso]%".

let SEI = 0

while(SEI < 100){
    SEI = SEI + 20
    console.log("Baixando... "+SEI+"%")
}
