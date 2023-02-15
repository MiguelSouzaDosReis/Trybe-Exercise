                                                Atividade


Primeiramente você deve analisar todo o código da aplicação para entender como ela funciona.

Em resumo a aplicação possui os seguintes endpoints:

- GET /plants: retorna todas as plantas;
- POST /plants: cria uma planta nova.

Utilizando um client como o Insomnia, Postman ou Thunder Client verifique as informações obtidas em cada endpoint.

Agora é necessário adaptar o código de modo a transformá-lo em uma API respeitando os princípios do SOLID. Para isso, você deverá:

- Modificar o arquivo ./src/services/PlantService.ts, aplicando os conceitos aprendidos;
- Implementar na camada Model pelo menos uma classe responsável por manipular as informações que estão armazenadas no diretório ./src/models/database/. Essa classe deverá implementar a interface IModel:

- Adicionar os endpoints:

  - GET /plants/:id: retorna uma planta específica;
  - PUT /plants/:id: atualiza as informações de uma específica;
  - DELETE /plants/:id: deleta uma planta específica;


                                                  Bônus

- Crie um banco de dados para persistir os dados das plantas.
