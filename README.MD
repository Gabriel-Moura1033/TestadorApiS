# Monitor de Disponibilidade de APIs em Node.js

## Descrição

Este é um sistema em Node.js que monitora a disponibilidade de APIs e envia notificações por email quando ocorrem erros. É uma ferramenta útil para garantir que as APIs essenciais estejam funcionando corretamente e notificar imediatamente a equipe responsável em caso de problemas.

## Funcionalidades

- Monitoramento contínuo de várias APIs.
- Notificações por email em caso de erro.
- Configurações personalizáveis para destinatários de email.
- Registros detalhados de status e erros.

## Pré-requisitos

Antes de executar o sistema, certifique-se de ter o seguinte instalado:

- Node.js
- npm
- Um servidor de email SMTP (para enviar notificações por email)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git

2. Instale as dependências: 
    npm install


3. Configure o arquivo .env:
    USERDB=
    SENHADB=
    SENHAEMAIL=
    EMAIL=
    EMAILPARA=
    HOSTEMAIL=
    PORTEMAIL= 
    SECUREEMAIL=

## Uso

Após a instalação e configuração, o sistema monitorará automaticamente as APIs definidas. Se ocorrer um erro ao acessar uma API, uma notificação por email será enviada para o destinatário especificado.

## Contribuição

Sinta-se à vontade para contribuir para este projeto abrindo problemas ou enviando solicitações pull.


