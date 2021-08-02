let espaco = " "
let asterisco = "*"
let linha = 0
const LINHAS_MAX = 5

for(let linha=0;linha<LINHAS_MAX;linha++){
    for(let j = linha;j<LINHAS_MAX;j++){
        process.stdout.write(espaco)
    }
    for(let i=0;i<=linha;i++){
        process.stdout.write(asterisco)
    }
    process.stdout.write("\n")
}