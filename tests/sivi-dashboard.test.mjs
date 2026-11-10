import assert from 'node:assert/strict'
import test from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

test('renders the SIVI shell with Portuguese context and demonstration labeling', async () => {
  const vite = await createServer({
    configFile: './vite.config.js',
    server: { middlewareMode: true },
    appType: 'custom',
  })

  try {
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
    const markup = renderToStaticMarkup(React.createElement(App))

    assert.match(markup, /Sistema Integrado de Vendas Industriais/)
    assert.match(markup, /Dados demonstrativos/i)
    assert.match(markup, /Visão geral/)
    assert.match(markup, /Demandas/)
    assert.match(markup, /Pedidos/)
    assert.match(markup, /Demandas abertas/)
    assert.match(markup, /Propostas recebidas/)
    assert.match(markup, /Pedidos em andamento/)
    assert.match(markup, /Inspeções pendentes/)
    assert.match(markup, /PED-2026-014/)
    assert.match(markup, /Em produção/)
    assert.match(markup, /Atrasada/)
    assert.match(markup, /Lote LT-014-A/)
    assert.doesNotMatch(markup, /<button/)

    const { MetricCard } = await vite.ssrLoadModule('/src/components/MetricCard.jsx')
    const { ActivityList } = await vite.ssrLoadModule('/src/components/ActivityList.jsx')
    const zeroMetric = renderToStaticMarkup(React.createElement(MetricCard, {
      label: 'Inspeções pendentes',
      value: '0',
      detail: 'Nenhuma inspeção aguardando análise',
      status: 'Sem pendências',
    }))
    const emptyActivities = renderToStaticMarkup(React.createElement(ActivityList, { activities: [] }))

    assert.match(zeroMetric, /Sem pendências/)
    assert.match(emptyActivities, /Nenhuma atividade pendente/)
  } finally {
    await vite.close()
  }
})





