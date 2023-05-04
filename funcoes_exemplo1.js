(function(){
    console.log(faixa(calcula(83, 1.78)));
})()

function calcula(peso, altura){
    const ret =peso/(Math.pow(altura,2));
    return ret;
}

function faixa(IMC)
{
    let descri = "";
    if (IMC < 18.5) {
       descri = "Abaixo do Peso";
    }
    else if (IMC>= 18.5 && IMC < 25){
        descri = "peso normal";
    }
    else if (IMC>= 25 && IMC < 30){
        descri = "Acima do Peso";
    }
    else if (IMC>= 30 && IMC < 40){
        descri = "Obeso";
    }
    else if (IMC >=40){
        descri = "Obeso Grave";
    }
    return descri+" Com IMC: "+IMC.toFixed(2);
}
