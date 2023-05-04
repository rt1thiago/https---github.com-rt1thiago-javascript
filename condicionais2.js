const nota1 = 10;
const nota2 = 10;
const nota3 = 4;
let media = 0;

media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("reprovação")
} else if (media >= 5 && media <= 7) {
    console.log("recuperação")
}
else if (media >7){
    console.log("aprovado")
}

console.log("Media:"+media)