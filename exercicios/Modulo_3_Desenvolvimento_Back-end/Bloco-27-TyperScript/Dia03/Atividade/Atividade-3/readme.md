                                            Atividade 3

Objetivos:

- Orquestrar containers com um arquivo docker-compose.

Regras:

- A versão do arquivo deve ser 3.9;
- Existe um serviço para o banco de dados que:
    - Utiliza a imagem mysql versão 8.0.21;
    - Possui as variáveis de ambientes necessárias para o seu correto funcionamento;
    - Possui uma política de reinicialização que, sempre que o serviço parar, ele deverá ser reiniciado;
- Existe um serviço para um servidor que:
    - Utiliza o Dockerfile criado na atividade anterior;
    - Possui as variáveis de ambientes necessárias para o seu correto funcionamento;
    - Mapeia a porta exposta do container para uma porta diferente do host;
    - Possui uma política de reinicialização que sempre que o serviço parar ele deverá ser reiniciado;
    - Possui uma relação de dependência com o serviço para o banco de dados;
- Possui uma rede chamada “users-network” para a comunicação entre os serviços;