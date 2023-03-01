let readline = require ("readline-sync");

const scripts = [
    { name: "Converter comprimento", script: '../../exercicio-2/js/length' },
    { name: "Converter massa", script: '../../exercicio-3/js/mass' },
    { name: "Converter capacidade", script: '../../exercicio-4/js/capacity' },
    { name: "Converter área", script: '../../exercicio-5/js/area' },
    { name: "Converter volume", script: '../../exercicio-6/js/volume' }
];

const scriptNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script);