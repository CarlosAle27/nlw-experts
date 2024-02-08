const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "let myVar = 10;",
            "var myVar = 10;",
            "const myVar = 10;"
        ],
        correta: 2 // Resposta C
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1 // Resposta B
    },
    {
        pergunta: "Como você adiciona um elemento ao final de um array em JavaScript?",
        respostas: [
            "array.push()",
            "array.add()",
            "array.concat()"
        ],
        correta: 0 // Resposta A
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "toInteger()",
            "parseFloat()"
        ],
        correta: 0 // Resposta A
    },
    {
        pergunta: "Qual método é usado para adicionar um evento a um elemento HTML em JavaScript?",
        respostas: [
            "addEventListener()",
            "attachEvent()",
            "setEvent()"
        ],
        correta: 0 // Resposta A
    },
    {
        pergunta: "O que significa DOM em JavaScript?",
        respostas: [
            "Data Object Model",
            "Document Object Method",
            "Document Object Model"
        ],
        correta: 2 // Resposta C
    },
    {
        pergunta: "Como você escreve um loop 'for' em JavaScript?",
        respostas: [
            "for (let i = 0; i < 10; i++) {}",
            "loop (let i = 0; i < 10; i++) {}",
            "for (let i = 0; i <= 10; i++) {}"
        ],
        correta: 0 // Resposta A
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que é executada imediatamente após ser definida.",
            "Uma função que é passada como argumento para outra função e é executada posteriormente.",
            "Uma função que retorna um valor diretamente."
        ],
        correta: 1 // Resposta B
    },
    {
        pergunta: "Qual é a maneira correta de selecionar um elemento HTML pelo seu ID em JavaScript?",
        respostas: [
            "getElementByID('elementID')",
            "selectElement('elementID')",
            "document.getElementById('elementID')"
        ],
        correta: 2 // Resposta C
    },
    {
        pergunta: "Como você comenta várias linhas de código em JavaScript?",
        respostas: [
            "<!-- Comentário -->",
            "/* Comentário */",
            "// Comentário"
        ],
        correta: 1 // Resposta B
    }
];

/*
document transforma html em manipulacao em objeto js
querySelector seleciona pesquisa seletor 'div', 'h1'
coneNode vai clonar o nó principal ou filho - com true clona todos os filhos
*/

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

// set é um conjunto de informacao que nao pode repetir, pode alterar ou excluir
const corretas = new Set();
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// Laço de repetição
for(const item of perguntas) {

    const quizItem = template.content.cloneNode(true)
    
    // textContent altera o conteudo do nó selecionado (h3) por outro
 
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {

        // espaco do dl para o dt quer dizer dentro do dl procura o dt
        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        
        // adiciona o indice da resposta especifica e atribui ao valor de cada input
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        // onchange espera uma mudanca e executa uma funcao
        dt.querySelector('input').onchange = (event) => {
           // espera o evento que esta acontecendo 'input selecionado'
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        
        if(estaCorreta){
                corretas.add(item)
           }
           mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    // appendChild vai colocar um filho

    quiz.appendChild(quizItem)
}