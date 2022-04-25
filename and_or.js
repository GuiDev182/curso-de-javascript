var pontos = 72;
var energia = 30;
//vitória => pontuação >= 30 && <=40 || >=70 && <=80 && energia >= 40

if(pontos >=30 && pontos <=40 || pontos >=70 && pontos <=80 && energia>=40){
    document.write("Você ganhou!")
}else{
    document.write("você perdeu!")
}

//operador && - E
//operador || - OU