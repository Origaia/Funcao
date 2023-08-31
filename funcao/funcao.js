/*
1.Crie uma função em javascript que calcule a
média entre 3 números e retorne o resultado. Em seguida, faça a chamada dessa função com os
seguintes parâmetros:
 3, 2, 4
 5, 2, 1
Ao final, imprima os valores retornados pela função
no console.
2.Crie uma função que faça a leitura de preço de 3itens. Crie outra função que imprima a soma do
valor desses itens. Por fim, crie outra função que imprima essa soma.
3 Explique o trecho de código abaixo:
respeito();
function respeito(){
console.log("Press F to pay respects.");
}
4 Explique o trecho de código abaixo:
respeito();
respeito = function (){
console.log("Press F to pay respects.");
}
5 Crie um algoritmo que resolva o problema a seguir:
Um grupo de teatro chega a cidade de Patrocínio e faz uma breve pesquisa sobre a sua
audiência baseada no preço de seu ingresso. A conclusão é que: caso o ingresso seja
vendido a R$10,00, o público alvo será de 200 pessoas. A pesquisa também revelou que, a cada R$1,00 mais barato, a audiência aumenta em 52 pessoas. Considerando que o grupo deve pagar no total uma despesa de R$300,00 pelo aluguel do espaço, faça um programa
que calcule qual é o melhor valor para venda de ingresso desse circo (o que gera um maior lucro).
Ao final, o algoritmo deve mostrar:
 O melhor preço de vendas para o ingresso.
 O número de pessoas que compõe a audiência.
 O lucro esperado com a realização do evento
*/
let atividade=parseInt(prompt("Qual atividade você deseja acessar?:"))
switch(atividade){
    case 1:

        function media(num1, num2, num3){
            return (num1/3+num2/3+num3/3)
        }
        console.log(media(3, 2, 4))
        console.log(media(5, 2, 1))

        break;
    case 2:

        function leitura(){
            let num1=parseFloat(prompt("Digite o valor do 1° produto:"))
        }
        let num1=leitura()
        let num2=leitura()
        let num3=leitura()
        function soma(num1, num2, num3){
            return (num1+num2+num3)
        }
        let soma=soma(num1, num2, num3)
        function imprime(num1){
            console.log("O valor da soma dos produtos é:"+num1)
        }
        imprime(soma)
        break;
    case 3:
        console.log("O trecho do codigo ira exibir Press F to pay respects pois a função sofre hosting.")
        break;
    case 4:
        console.log("O trecho do codigo ira exibir que a função não pode ser acessada pois a mesma é uma função anonima que foi chamada antes de sua declaração e foi restringida por ser anonima.")
        break;
    case 5:
        let despesa=300.00
        let preco
        let audiencia
        let bruto=0
        function calculo(){
            preco=10
            audiencia=200
            for(let contador=0;contador==1;){
                if(preco*audiencia>bruto){
                    bruto=preco*audiencia
                    preco--
                    audiencia+=52
                }
                else{
                    contador=1
                }
            }
        }
        calculo()
        console.log("O melhor preço de vendas é:"+preco)
        console.log("A audiencia é de:"+audiencia+" pessoas")
        let lucro=bruto-despesa
        console.log("O lucro é de:"+lucro)
        break;
}

