var nota=50;
var res;
// aprovado >=60
//recuperação >=40 && < 60
// reprovado <60

if(nota >= 60){
    res="aprovado";
}
else if(nota >= 40 && nota < 60){
    res="recuperação";
}else{
    res="reprovado";
}

document.write(res);