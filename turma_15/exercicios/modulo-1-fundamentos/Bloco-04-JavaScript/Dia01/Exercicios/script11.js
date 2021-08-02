let SalárioBruto=3000
let AlíquotaINSS = SalárioBruto*0.11
let SalárioBase = SalárioBruto - AlíquotaINSS
let AlíquotaDeImpostoDeRenda = SalárioBase*0.075
let imposto = 142.80
let ValorIR = AlíquotaDeImpostoDeRenda - imposto
let SalárioLíquido = SalárioBase - ValorIR
console.log(SalárioLíquido)