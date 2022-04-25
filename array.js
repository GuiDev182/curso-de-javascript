/*var cor=new Array();
var cor=[];

ADICIONAR AO ARRAY
cor.push("Preto"); 
cor.push("Branco");  
cor.push("vermelho");
cor.push("Verde");
cor.push("Azul"); */

var itens=["faca","pederneira","corda","lanterna","arame"];

var mochila=[];

mochila.push("faca"); // insere no final do array
mochila.push("pederneira");
mochila.push("corda"); 
mochila.push("lanterna"); 
mochila.push("chave"); 

mochila.unshift("pedra"); // insere no inicio do array
mochila.pop(); //remove o ultimo elemento do array 
mochila.shift(); //remove o primeiro elemento do array
mochila.splice(2, 1); // remove o elemento do array a partir do indice 

document.write(mochila.indexOf("lanterna")); // mostra a posição do elemento

document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>");


var num=[5,6,7,3,4,2,1,9,8,0];
var numeros;

num.sort(); //ordena os elementos
num.reverse(); // ordem decrescente

numeros=num.join(); // junta os elementos do array indicado
document.write(numeros);

document.write(num[0]+"<br>");
document.write(num[1]+"<br>");
document.write(num[2]+"<br>");
document.write(num[3]+"<br>");
document.write(num[4]+"<br>");
document.write(num[5]+"<br>");
document.write(num[6]+"<br>");
document.write(num[7]+"<br>");
document.write(num[8]+"<br>");
document.write(num[9]+"<br>");

var mochila1=[];

mochila1.push("arame");
mochila1.push("luvas");
mochila1.push("meia"); 
mochila1.push("camisa"); 
mochila1.push("canivete");

mochila=mochila1.concat(mochila); //junta todos os elementos de um array em outro array

document.write(mochila + "<br>");
document.write("tamanho da mochila: " + mochila.length + "<br>"); // mostra o tamanho do array
