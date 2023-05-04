
let peso = 79;
let altura = 1.78;
let IMC = peso/(Math.pow(altura,2));


console.log("IMC:"+IMC)


if (IMC < 18.5) {
    console.log("Abaixo do Peso")
}
else if (IMC>= 18.5 && IMC < 25){
    console.log("peso normal")
}
else if (IMC>= 25 && IMC < 30){
    console.log("Acima do Peso")
}
else if (IMC>= 30 && IMC < 40){
    console.log("Obeso")
}
else if (IMC >=40){
    console.log("Obeso Grave")
}