                                                Bônus

11. Identifique o IP interno e externo da sua máquina.

12. Identifique as interfaces de redes utilizadas por sua máquina e identifique qual está em uso agora.

13. No conteúdo vimos o que são os protocolos SSL e TLS. Vamos subir nosso próprio servidor HTTPS, utilizando nosso próprio certificado!

    - 1 . Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados. Ela já vem instalada na maioria das distros Linux. No Docker, no entanto, você vai precisar executar:

                    apt-get update && apt-get install python3 openssl

    - 2 . Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo. Lembrando que, como nós estamos gerando o certificado, ele não será reconhecido por nenhuma entidade certificadora, de modo que ele só nos servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser aceito pelo navegador por não ter sido aprovado por nenhuma entidade reconhecida por ele.

                    openssl genrsa -out key.pem
                    openssl req -new -key key.pem -out csr.pem
                    openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
                    rm csr.pem

    - 3 . Acabamos de gerar dois arquivos, o cert.pem (o certificado) e o key.pem (chave privada). Copie os dois arquivos para um diretório onde vamos criar nosso servidor HTTPS.

    - 4 . Agora vamos escrever um servidor https usando os módulos nativos do python ssl e http.server. Embora esses módulos tenham muitos recursos (muitos mesmo), nós vamos usar apenas alguns. Tente seguir as instruções a seguir:

        - 4.1 Crie um contexto SSL com a classe SSLContext, usando o protocolo de versão mais alta disponível para servidores. (dica: as opções estão listadas na documentação).

        - 4.2 Carregue no contexto SSL a cadeia de certificação, passando tanto o arquivo de certificação quanto a sua chave (dica: existe um método para isso).

        - 4.3 Crie uma instância de HTTPServer. O endereço deve ser uma tupla ('localhost', 8000) e para responder as requisições, use SimpleHTTPRequestHandler (dica: apesar do exemplo na documentação, não use with).

        - 4.4 Crie um socket server-side usando o método wrap_socket do seu contexto SSL. Passe como parâmetro o socket do servidor (server.socket).

        - 4.5 Substitua o socket do servidor pelo socket que você acabou de criar.

        - 4.6 Execute o servidor com o método serve_forever.
