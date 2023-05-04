function Nomear (nome)
{
    console.log("Meu nome é:"+nome);
}

Nomear("Heitor");
Libera(14);

function Libera(idade)
{
    if (idade <18){
        console.log("Menor de 18 anos. Bloqueado a Entrada.");
    }else
    {
        console.log("Maior de 18 anos. Permitida a Entrada.");
    }
}
