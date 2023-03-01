let custo = 5;
let ValorDaVenda = 20;
let VendaTotal = ValorDaVenda*1000
let CustoTotal = custo*1000
let CustoTotalJuntoComAPorcetagem = CustoTotal*0.2
let lucro = VendaTotal - CustoTotalJuntoComAPorcetagem

if (lucro < 0) {
    console.log("erro")  
} else{
    console.log("O lucro foi",lucro)
}
    

