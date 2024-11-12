/* Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega

# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
 
 
 
Bons estudos 😉 */

function NivelHeroi(){
        let quantidadeHerois = parseInt(document.getElementById("qntHeroi").value); // Usa .value para pegar o valor do input
        
         // Array para guardar os valores caso sejam necessários.
        let resultado = []

        for(i=0; i < quantidadeHerois; i++){
            
            let heroi = prompt(`Digite o nome do herói: `);
            let quantidadeXp = parseInt(prompt(`Digite a quantidade de XP do herói `));
            let nivel;

            if(quantidadeXp >= 0 && quantidadeXp <= 1000){
                nivel = "Ferro"
            }else if(quantidadeXp <= 2000){
                nivel = "Bronze"
            }else if(quantidadeXp <= 5000){
                nivel = "Prata"
            }else if(quantidadeXp <= 7000){
                nivel = "Ouro"
            }else if(quantidadeXp <= 8000){
                nivel = "Platina"
            }else if(quantidadeXp <= 9000){
                nivel = "Ascendente"
            }else if(quantidadeXp <= 10000){
                nivel = "Imortal"
            }else {
                nivel = "Radiante"
            }

            // dando push no array caso precise reutilizar ele em outra parte do código.
            resultado.push(`<li> O herói de nome ${heroi} está no nível de ${nivel} </li>`)

            // lista recebe o o array resultado em seu interior.
            let lista =  document.getElementById("lista")
            lista.innerHTML = resultado
            // h3 recebe o tamanho do Array para falar quantos herois possui.
            document.getElementById("heroisTotais").innerHTML = resultado.length
        }  
        
    }

    // executar uma ação ao clicar.
document.getElementById("enviarButton").addEventListener("click", NivelHeroi);
