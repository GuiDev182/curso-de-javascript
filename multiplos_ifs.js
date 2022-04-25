var nota=95;
var res;

if(nota >= 60){
    res= "aprovado";
    if(nota>=95){
        res+=" com louvor";
    }else{
        res+=" normal";
    }
}else if(nota >= 40){
    res="Recuperação";
}else{
    if(nota>=20){
        res="reprovado";
        res+=" por nota baixa";
    }else{
        res+=" com louvor"
    }
}

document.write(res);