let espaco = " "
let asterisco = "*"
let linha = 0
let n = 5

if (n>1) {
    
for(let linha=0;linha<n;linha++){
    for(let j = linha;j<n;j++){
        process.stdout.write(espaco)
    }
    for(let i=0;i<=linha;i++){
        process.stdout.write(asterisco)
    }
    process.stdout.write("\n")
}}