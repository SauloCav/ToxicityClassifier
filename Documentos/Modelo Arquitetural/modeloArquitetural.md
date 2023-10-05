# Modelo Arquitetural

## Arquitetura Cliente-Servidor

A arquitetura cliente-servidor é um modelo de design de software em que os clientes (usuários ou dispositivos) fazem solicitações a um servidor central, que fornece serviços ou recursos em resposta. É uma abordagem distribuída em que a lógica do sistema é dividida entre clientes e servidores, permitindo a escalabilidade e a colaboração entre componentes.

Essa arquitetura é uma escolha sólida para projetos que envolvem interações entre usuários, processamento centralizado e monitoramento de conteúdo. Além disso, oferece vantagens de extrema importância para o sistema como **Distribuição de Responsabilidades**, **Controle Centralizado**, **Gerenciamento de Dados**, **Notificação em Tempo Real**, além Facilidade na Manutenção, Segurança e Privacidade.

### Diagrama

![diagrama](https://github.com/SauloCav/Projeto-Integrador-IV/blob/main/Documentos/Modelo%20Arquitetural/cliente-servidor-diagrama.png)

### Componentes
**Usuários:** Interagem com a plataforma de redes sociais. Eles podem criar e visualizar postagens, bem como fazer comentários.

**Servidor:** Núcleo do seu sistema. Responsável pela lógica de negócios, incluindo a coleta de comentários, a classificação de comentários ofensivos por meio de IA, a notificação de moderadores e a ação sobre comentários ofensivos.

**Banco de Dados** O servidor deve se comunicar com um banco de dados para armazenar informações sobre comentários, usuários e ações tomadas pelos moderadores. Isso é crucial para manter um registro de atividades e permitir a análise de dados.

**Inteligência Artificial(IA):** Este componente envolve a implementação de modelos de aprendizado de máquina e processamento de linguagem natural (NLP) para a detecção de comentários ofensivos. Os modelos de IA são treinados com base em dados de treinamento etiquetados.

**Interface de Moderadores:** Uma interface de usuário dedicada para moderadores onde eles podem revisar os comentários detectados como ofensivos, tomar medidas (excluir ou banir) e atualizar as classificações, se necessário.

### Fluxo de Funcionamento
* Os clientes interagem com a plataforma de redes sociais, fazendo postagens e comentários.
* Os comentários são coletados pelo servidor de aplicação.
* O servidor de aplicação encaminha os comentários para o componente de IA para análise de conteúdo ofensivo.
* O componente de IA classifica os comentários com base em critérios predefinidos de gravidade (leve, moderado, grave) e os resultados são enviados de volta ao servidor de aplicação.
* O servidor de aplicação notifica os moderadores sobre os comentários ofensivos detectados.
* Os moderadores acessam a interface de moderadores para revisar e tomar ações sobre os comentários ofensivos.
* As ações tomadas pelos moderadores são registradas no banco de dados.
