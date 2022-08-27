let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

console.log(`Lista de produtos produtos recebido para Verificar Taxa`)
if (produtoA.internacional == true) {
    console.log(`Produto ####${produtoA.nome}
    Origem  ####Internacional 
    ValorReal###${produtoA.valor}
    ValorTx ####${produtoA.valor*1.2}`) 

    } else {console.log(`Produto ####${produtoA.nome}
    Origem  ####Nacional
    ValorReal###${produtoA.valor}
    ValorTx ####${produtoA.valor*1.12}`)}


console.log(`---------------------------------------------------------`)

if (produtoB.internacional == true) {
    console.log(`Produto ####${produtoB.nome}
    Origem  ####Internacional 
    ValorReal###${produtoB.valor}
    ValorTx ####${produtoB.valor*1.2}`) 

    }else {console.log(`Produto ####${produtoB.nome}
    Origem  ####Nacional
    ValorReal###${produtoB.valor}
    ValorTx ####${produtoB.valor*1.12}`)}

    console.log(`---------------------------------------------------------`)

    if (produtoC.internacional == true) {
    console.log(`Produto ####${produtoC.nome}
    Origem  ####Internacional 
    ValorReal###${produtoC.valor}
    ValorTx ####${produtoC.valor*1.2}`) 
    } else {console.log(`Produto ####${produtoC.nome}
    Origem  ####Nacional
    ValorReal###${produtoC.valor}
    ValorTx ####${produtoC.valor*1.12}`)}


    console.log(`---------------------------------------------------------`)