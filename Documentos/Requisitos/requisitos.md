# Documento de Requisitos

## Introdução
Este documento descreve os requisitos do sistema para Classificação de comentários. Ele fornece uma visão geral do produto, termos técnicos específicos, requisitos funcionais e requisitos não funcionais.

## Visão Geral do Produto
As redes sociais permitem a interação entre muitas pessoas e influenciadores digitais, nos mais variados temas. Contribuindo em muitos casos para informação sobre doenças, melhor maneira de realizar alguma tarefa, diversão, etc. Existem alguns usuários, que não concordam as ideias e pontos de vista de outros usuários, e realizam comentários ofensivos e preconceituosos contra usuários com ideias diferentes das suas, disseminando ódio e ofendendo. Como existem muitos comentários nas redes sociais, é humanamente muito difícil analisar todos os comentários nas redes sociais. Dessa forma, uma maneira automatizada de classificar e identificar os comentários ofensivos nas redes sociais é importante para aplicação das punições cabíveis, além de encontrar contas falsas empregadas unicamente para comentários ofensivos.

A equipe envolvida no projeto praticará o desenvolvimento de interface com boa usabilidade e prototipação de software. A fim de organizar o desenvolvimento é importante antes definir os requisitos, arquitetura e como testar o software. Portanto, a criação de documentação adequada que aborde tais aspectos contribuirão na implementação. O treinamento da Inteligência Artificial (IA) para classificação dos comentários em redes sociais, empregará vários conceitos observados na disciplina de IA.

## Termos Técnicos

   - *API de Redes Sociais:* Uma interface de programação de aplicativos que permite a coleta de dados de redes sociais.
   - *Algoritmo de Aprendizado de Máquina:* Um algoritmo que aprende com dados de treinamento para identificar comentários ofensivos com base em características específicas.
   - *Modelo de Classificação:* O algoritmo ou modelo de IA usado para classificar os comentários.
   - *Sistema de Ticketing:* Um sistema que cria e rastreia automaticamente tickets de moderação para comentários ofensivos, facilitando a ação dos moderadores.
   - *Treinamento Contínuo:* A prática de atualizar regularmente o modelo de IA com novos dados para mantê-lo preciso.
   - *API de Políticas da Plataforma:* Uma interface que permite que o sistema siga as políticas de moderação específicas da plataforma de redes sociais.
   - *Latência:* O tempo que leva para processar um comentário ofensivo após a detecção.
   - *Escalabilidade Horizontal:* A capacidade de adicionar mais servidores para lidar com um aumento na carga de trabalho.
   - *Taxa de Falsos Positivos:* A proporção de comentários que são incorretamente classificados como ofensivos.
   - *Criptografia de Dados:* A técnica de proteger os dados coletados por meio de criptografia.
   - *Autenticação de Usuário:* O processo de verificar a identidade dos administradores e moderadores que acessam o sistema.
   - *Anonimização de Dados:* A prática de remover informações pessoais dos comentários coletados.
   - *Interface de Usuário Intuitiva:* Uma interface de moderação que é fácil de navegar e entender para os moderadores.
   - *Treinamento Regular da IA:* A programação regular para treinar o modelo de IA com novos dados.
   - *Atualização de Software:* A capacidade de atualizar o sistema de forma eficiente para corrigir problemas e adicionar novos recursos.
   - *Conformidade Legal:* Garantir que o sistema esteja em conformidade com as leis locais e internacionais relacionadas à moderação de conteúdo e proteção de dados.
   - *SLA (Acordo de Nível de Serviço):* O acordo que define os tempos de resposta esperados para notificações de comentários ofensivos.

Estes termos técnicos podem ser usados para descrever com mais precisão os requisitos do sistema e facilitar a comunicação com equipes técnicas e desenvolvedores.

## Requisitos

### Requisitos Funcionais:

#### Coleta de Comentários: 
O sistema deve ser capaz de coletar comentários de redes sociais especificadas.

#### Detecção de Comentários Ofensivos: 
O sistema deve ser capaz de identificar automaticamente comentários ofensivos com base em critérios predefinidos, como linguagem ofensiva, discurso de ódio, ameaças, conteúdo racista, etc.

#### Classificação de Nível de Ofensividade: 
O sistema deve classificar os comentários ofensivos de acordo com o nível de gravidade (leve, moderado, grave) para priorização.

#### Notificação e Ação: 
O sistema deve notificar os administradores ou moderadores sobre os comentários ofensivos detectados e permitir ação imediata, como exclusão ou banimento do usuário.

#### Atualização do Modelo de IA: 
O sistema deve permitir a atualização periódica do modelo de IA para melhorar a precisão e adaptar-se a novas expressões e contextos ofensivos.

#### Integração com Políticas da Plataforma:
O sistema deve respeitar e seguir as políticas específicas de cada plataforma de redes sociais em que é implantado.


### Requisitos não funcionais:

#### Desempenho:
O sistema deve ser capaz de processar e classificar comentários em tempo real de forma rápida e eficiente.

#### Precisão:
A IA deve atingir uma alta precisão na classificação de comentários, minimizando falsos positivos e negativos.

#### Segurança:
Garantir a segurança dos dados coletados e a proteção contra acessos não autorizados.

#### Privacidade:
Respeitar as políticas de privacidade das redes sociais e garantir que dados pessoais não sejam usados de forma inadequada.

#### Facilidade de Uso:
A interface de moderação deve ser fácil de usar para os moderadoress.

#### Manutenção:
Facilidade de manutenção e atualização do sistema, incluindo o treinamento contínuo da IA.

#### Regulamentações e Ética:
Cumprir com as regulamentações locais e internacionais relacionadas à moderação de conteúdo e proteção de dados.

#### Tempo de Resposta:
Garantir que as notificações de comentários ofensivos sejam entregues aos moderadores em tempo hábil.
