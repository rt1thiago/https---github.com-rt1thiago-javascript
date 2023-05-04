const preco = 100;
const forma = 4;
let vlrfinal =0;
let desc = "";

if (forma==1){
    desc="A Vista Débito";
    vlrfinal=preco*0.9;
}
else if (forma==2){
    desc="Dinheiro ou Pix";
    vlrfinal=preco*0.85;
}
else if (forma==3){
    desc="Duas Vezes";
    vlrfinal=preco;
}
else {
    desc="Acima de Duas vezes";
    vlrfinal=preco*1.1;
}
console.log("Forma de Pagamento:"+desc+" Valor do Produto:"+vlrfinal.toFixed(2))

aaabit