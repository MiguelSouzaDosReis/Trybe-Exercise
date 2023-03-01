                                Atividade

1. Ao carregar a aplicação no caminho de URL "/", é preciso que seja mostrada a Pokédex.

2. Adicione um link de navegação para o pokémon sendo mostrado pela Pokédex, de forma que quem usar a aplicação consiga clicar no link para ver mais detalhes do pokémon em questão. O nome do caminho da URL fica a seu critério. Lembre-se de que é preciso passar para a URL um identificador do pokémon, de forma que cada pokémon seja unicamente associado com o caminho de URL. Ou seja, se você quer que os detalhes de um pokémon se encontrem no caminho de URL /pokemons, você precisa passar para esse caminho um parâmetro de URL para que somente um pokémon seja visualizado. Todo pokémon tem um id na Pokédex, logo você poderia usá-lo como parâmetro de URL para permitir que quem usar sua aplicação consiga acessar detalhes do pokémon Pikachu via caminho de URL /pokemons/25, onde 25 é o id do Pikachu. slightly_smiling_face

3. Crie um componente PokemonDetails para ser usado na visualização de mais detalhes do pokémon no passo anterior. É preciso que sejam mostradas as seguintes informações:

                            Nome do pokémon;

                            Tipo do pokémon;

                            Peso do pokémon, com sua devida medida de peso;

                            Sumário informativo a respeito do pokémon;

                            Mapa(s) que mostra(m) as possíveis localizações do pokémon.


4. Adicione um conjunto fixo de links de navegação no topo de sua aplicação, de forma que ele esteja sempre disponível para quem fizer uso. De início, adicione um link que leve quem usa sua aplicação de volta para a Pokédex.

5. Crie um componente About para ser usado na visualização que explica brevemente o que é uma Pokédex, com alguma imagem ilustrativa. Use esta página como inspiração. slightly_smiling_face

6. Adicione no conjunto fixo de links de navegação um link que permita levar quem usa sua aplicação para a visualização de explicação da Pokédex.

7. Crie um componente NotFound, de forma que somente ele seja renderizado caso o caminho atual da URL da aplicação não corresponda a rota alguma definida anteriormente.

            Segue uma sugestão de implementação da aplicação, que se baseia na solução da Pokédex com estado que você precisou fazer anteriormente, com todos os requisitos bônus feitos. Nessa sugestão não estão implementados os requisitos bônus referentes ao d.e hoje; eles ficarão a cargo da sua imaginação para implementá-los:

            Pokedex finalizada

            Bônus: Agora que você tem uma aplicação Pokédex navegável, que tal encarar estes bônus? eyes

8. Permita que um pokémon consiga ser favoritado dentro de sua visualização de mais detalhes. Uma vez favoritado, adicione algum indicativo visual, de forma que quem vir o pokémon saiba que ele foi favoritado. O indicativo de que o pokémon foi favoritado precisa também aparecer na página principal, que mostra a Pokédex;

9. Crie uma visualização que mostre somente os pokémons favoritados e torne-a acessível para quem a usar, criando um link para ela no conjunto fixo de links que você fez anteriormente;

10. Salve os pokémons favoritados no local storage e recupere-os quando a aplicação for inicializada.