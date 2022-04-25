//VETOR
var mochila=new Array();
// MATRIZ
var item1=["corda",2],
    item2=["faca",1],
    item3=["cura",5],
    item4=["prego",35];
//ADICIONANDO ITENS DA MATRIZ NO VETOR
mochila.push(item1,item2,item3,item4);

document.write(mochila[0][0] +" - "+ mochila[0][1] + "<br>");
document.write(mochila[1][0] +" - "+ mochila[1][1]+ "<br>");
document.write(mochila[2][0] +" - "+ mochila[2][1]+ "<br>");
document.write(mochila[3][0] +" - "+ mochila[3][1]+ "<br>");