/*var cont;

for(cont = 0; cont < 10; cont++){
    document.write(cont + "<br>")
}*/

var mochila=[["corda",1],
            ["cura",10],
            ["lanterna",1],
            ["pilhas", 20]];

for(var l=0; l<4; l++){
    for(var c=0;c<2;c++){
        console.log(mochila[l][c] + " ");
    }
    console.log("<br>");
}