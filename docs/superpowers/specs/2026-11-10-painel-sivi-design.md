# Painel de monitoramento industrial SIVI — Design

## Intenção

Entregar a atividade de Front-End (Aulas 13 e 14) como um painel demonstrativo do SIVI, Sistema Integrado de Vendas Industriais. A interface deve simular uma visão operacional da cadeia de fornecimento industrial e demonstrar React + Vite, componentes reutilizáveis, props e layout responsivo.

## Relação entre o MVP do TCC e a atividade das aulas

O documento `02-escopo-e-mvp.md` define a visão completa do MVP, com o fluxo demanda → match → propostas → comparação/aceite → pedido → estoque/produção → inspeção/lote/QR → entrega → avaliação e dashboards por papel. O briefing das aulas 13 e 14, por sua vez, cobra a estrutura React/Vite e a base de um painel de monitoramento industrial. Esta entrega será a camada visual do dashboard desse MVP, não a implementação integral de todas as etapas e regras.

O dashboard usará o fluxo completo como referência para seus resumos: demandas e propostas, pedidos por etapa, produção/inspeções pendentes, conformidade e alertas de prazo/entrega. A navegação apresentará áreas do SIVI coerentes com esse escopo; o conteúdo central priorizará visão geral e acompanhamento operacional. Números, registros e estados serão dados de demonstração claramente identificados como simulados. Não haverá persistência nem operações reais nesta entrega.
## Objetivos

- Remover o conteúdo padrão do starter React/Vite.
- Exibir uma visão geral de operações industriais: demandas, propostas, pedidos, produção/qualidade e rastreabilidade.
- Organizar o código com `Container.jsx`, `Header.jsx`, `Sidebar.jsx`, `GridContainer.jsx` e `Footer.jsx` em `src/components/`.
- Passar dados de identificação do projeto como props do `App.jsx` ao cabeçalho e rodapé.
- Fazer o `GridContainer` envolver conteúdo por `children`.
- Manter hierarquia visual limpa, responsiva e adequada a um sistema industrial.

## Fora do escopo

Backend, autenticação, persistência, integração com APIs, cálculo operacional real e qualquer decisão comercial. Os números e registros da tela são dados estáticos para demonstração acadêmica e devem ser rotulados como demonstrativos/simulados; a interface não pode sugerir operação industrial real nem que o SIVI fabrica ou entrega produtos.

## Abordagens consideradas

1. **React + Vite com componentes modulares (escolhida):** mantém a base existente e atende diretamente aos critérios do briefing para React, props, `children` e `src/components/`.
2. **Um único `App.jsx`:** seria mais curto, mas não demonstra a organização modular solicitada.
3. **JavaScript sem React:** não atende à rubrica de React + Vite já escolhida no enunciado e exigiria descartar a base existente.

## Direção visual e conteúdo

Usar identidade SIVI com grafite e laranja em uma composição de trabalho clara e contida, tipografia com hierarquia simples, divisórias leves e estados com texto além da cor, seguindo o documento de minimalismo industrial do TCC. O layout terá navegação lateral, cabeçalho com contexto da unidade/linha, uma saudação/resumo, indicadores e uma área principal com atividade de pedidos e status de qualidade/rastreabilidade. Em telas estreitas, a navegação e os cartões devem reorganizar-se sem rolagem horizontal da página.

O caso de uso representa a conexão de empresas compradoras a fornecedores industriais aprovados, sem tratar o SIVI como vendedor. Indicadores e registros serão exemplos simulados, sem apresentar alegações de resultado real, IA preditiva ou pagamento processado.

## Estrutura proposta

- `src/App.jsx`: importa e orquestra todos os componentes, mantém dados demonstrativos e passa metadados por props.
- `src/components/Container.jsx`: wrapper externo que recebe conteúdo por `children`.
- `src/components/Header.jsx`: marca/contexto e metadados recebidos por props.
- `src/components/Sidebar.jsx`: navegação do painel.
- src/components/GridContainer.jsx: grade de conteúdo com suporte a children.
- src/App.jsx importa Container, Header, Sidebar, GridContainer e Footer, compõe o shell e passa os dados conforme o briefing.
- `src/components/Footer.jsx`: rodapé com metadados recebidos por props.
- `src/App.css` e `src/index.css`: estilos do dashboard, reset, tokens e responsividade.
- `README.md`: instruções para iniciar o projeto e resumo da demo.

## Critérios de aceite

- Componentes React com nomes PascalCase, props desestruturadas e responsabilidades legíveis.
- `App.jsx` orquestra layout e conteúdo e passa metadados por props.
- Pelo menos um componente reutilizável usa `children`.
- `npm run dev` inicia o projeto; a tela funciona em desktop e viewport móvel sem erros no console do navegador.
- A árvore de componentes está presente em `src/components/`.

## Chamadas de implementação

Manter as dependências existentes e não acrescentar bibliotecas para gráficos ou ícones; priorizar SVG/CSS e markup acessível. Usar dados claramente identificados como simulados. Os valores exatos, rótulos dos cartões e itens de navegação ficam a cargo da implementação, desde que respeitem as regras acima e o contexto de demonstração.




