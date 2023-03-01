let estado = document.getElementById('estado')
let arrayDeEstados = ['Acre' , 'Alagoas', 'Amapá', 'Amazonas','Bahia' ,  'Ceará' , 'Espírito Santo' ,'Goiás','Maranhão','Mato Grosso',
'Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia', 
'Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal' ]
let botao= document.getElementById('botao')
let apagar = document.getElementsByClassName('apagar')



for (let index = 0; index < arrayDeEstados.length; index++) {
    let opitions = document.createElement('option')
    estado.appendChild(opitions)
    opitions.append(arrayDeEstados[index])
}

