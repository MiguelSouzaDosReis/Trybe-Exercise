// atividade 1
let irmão = document.createElement("section"); irmão.id = "irmãoDoElementoOndeVoceEsta"
    document.getElementById("pai").appendChild(irmão)

// atividade 2
let filho = document.createElement("section"); filho.id = "filhoDoElementoOndeVoceEsta "
    document.getElementById("elementoOndeVoceEsta").appendChild(filho)
// atividade 3
let filhoDoFilho = document.createElement("section"); filhoDoFilho.id = "FilhoDoPrimeiroFilhoDoFilho "
    document.getElementById("primeiroFilhoDoFilho").appendChild(filhoDoFilho)
// atividade 4
filhoDoFilho.parentElement.parentElement.nextElementSibling
