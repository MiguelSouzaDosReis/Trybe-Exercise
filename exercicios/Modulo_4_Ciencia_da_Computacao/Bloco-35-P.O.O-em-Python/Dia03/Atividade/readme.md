                                                Prática

1. Em Python, é possível imprimir uma saída colorida. Para isso, basta a string começar com um código da cor antes e terminar com um código que indica o fim da formatação. A cor será diferente dependendo da configuração do seu computador. O recurso a seguir será utilizado para exibir logs coloridos no sistema. A classe Log() abaixo é responsável pela criação dos Logs:

                                        class Log:
                                            def dispara_log(message):
                                                return message

Crie novas classes, LogError(), LogWarning, LogSuccess() com o padrão Decorator, para imprimir colorido as seguintes frases de Log:
                                Success(Verde): O sistema está funcionando

                                Warning(Laranja): O sistema está lento

                                Error(Vermelho): O sistema está com erros

2. Você está desenvolvendo um novo despertador para Assistente virtual Alexa, utilizando o Padrão Observer. Ao despertar, esse despertador aciona algumas rotinas especiais na casa.

                Implemente um objeto Alarme que consiga acionar as tarefas de rotina previamente
                cadastradas,sempre que o alarme despertar. Veja alguns exemplos de rotinas:

                                Acender as luzes;

                                Preparar o café;

                                Ligar o computador.

3. Você recebeu um convite para ajudar com uma atualização de segurança em um sistema interno de uma empresa. Esse sistema atende os setores de vendas, financeiro e suporte. Para respeitar a nova Lei Geral de Proteção de Dados, a empresa precisa garantir que as informações internas serão expostas somente a quem tem necessidade. Assim devemos criar um cadastro na qual pessoa digita o nome e o seu setor:

                    Conta de Suporte: Acesso apenas ao sistema de suporte
                    Conta de Suporte e Vendas: Acesso aos sistemas vendas e suporte
                    Conta de Gerente: Acesso a todos os sistemas vendas, financeiro e suporte
