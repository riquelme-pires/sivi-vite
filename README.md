# SIVI — Painel de Monitoramento Industrial

Demonstração front-end do **Sistema Integrado de Vendas Industriais (SIVI)**, um marketplace B2B que conecta empresas compradoras a fornecedores industriais aprovados. O painel acompanha, em uma única visão, demandas, propostas, pedidos, qualidade e rastreabilidade.

## O que aparece no painel

- Indicadores de demandas abertas, propostas recebidas, pedidos em andamento e inspeções pendentes.
- Pedidos de exemplo em diferentes etapas, com fornecedor, empresa compradora, lote e atualização.
- Atividades simuladas de qualidade, atraso logístico e expedição.
- Resumo visual da jornada prevista no MVP: demanda → match → proposta → aceite → pedido → qualidade/lote → entrega → avaliação.

## Limites desta demonstração

Os nomes, números, pedidos, lotes e eventos exibidos são **fictícios e demonstrativos**. Esta entrega atende à atividade de estrutura e layout React das Aulas 13 e 14; não implementa login, banco de dados, integração com empresas, gravação de operações ou processamento de pagamentos. O SIVI organiza a conexão e o acompanhamento entre as empresas, mas não fabrica, vende, armazena nem entrega os produtos.

## Estrutura principal

```text
src/
├── components/
│   ├── ActivityList.jsx
│   ├── Container.jsx
│   ├── Footer.jsx
│   ├── GridContainer.jsx
│   ├── Header.jsx
│   ├── MetricCard.jsx
│   ├── OrderPipeline.jsx
│   └── Sidebar.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
tests/
└── sivi-dashboard.test.mjs
```

## Executar localmente

Requer Node.js e npm.

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite no terminal. Para criar a versão de produção:

```bash
npm run build
```

Para validar o HTML renderizado pelo React e o código do projeto:

```bash
node --test tests/sivi-dashboard.test.mjs
npm run lint
```

## Tecnologia

React + Vite, CSS responsivo e ferramentas já incluídas no projeto. O painel não adiciona dependências externas.

