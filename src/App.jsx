import './App.css'
import { ActivityList } from './components/ActivityList.jsx'
import { Container } from './components/Container.jsx'
import { Footer } from './components/Footer.jsx'
import { GridContainer } from './components/GridContainer.jsx'
import { Header } from './components/Header.jsx'
import { MetricCard } from './components/MetricCard.jsx'
import { OrderPipeline } from './components/OrderPipeline.jsx'
import { Sidebar } from './components/Sidebar.jsx'

const projectInfo = {
  systemName: 'SIVI',
  productName: 'Sistema Integrado de Vendas Industriais',
  contextLabel: 'Monitoramento da cadeia industrial',
  dataMode: 'Dados demonstrativos',
  version: 'Versão de demonstração 0.1',
  year: '2026',
  period: 'Últimos 30 dias',
}

const metrics = [
  {
    id: 'demandas',
    label: 'Demandas abertas',
    value: '12',
    detail: 'Necessidades aguardando propostas',
    status: 'No cenário demonstrativo',
    category: 'requests',
  },
  {
    id: 'propostas',
    label: 'Propostas recebidas',
    value: '08',
    detail: 'Versões válidas para comparação',
    status: 'No cenário demonstrativo',
    category: 'proposals',
  },
  {
    label: 'Pedidos em andamento',
    value: '04',
    detail: 'Estoque, produção ou logística',
    status: 'No cenário demonstrativo',
    category: 'orders',
  },
  {
    label: 'Inspeções pendentes',
    value: '02',
    detail: 'Lotes aguardando verificação',
    status: 'Atenção simulada',
    category: 'quality',
  },
]

const orders = [
  {
    code: 'PED-2026-014',
    buyer: 'Indústria Aurora',
    supplier: 'Metalúrgica Horizonte',
    stage: 'Aguardando inspeção',
    statusTone: 'attention',
    detail: 'Lote formado e enviado para qualidade',
    updatedAt: '10 nov. 2026',
    lot: 'LT-014-A',
  },
  {
    code: 'PED-2026-011',
    buyer: 'Mecânica Vale',
    supplier: 'Usinagem Central',
    stage: 'Em produção',
    statusTone: 'progress',
    detail: 'Produção em andamento',
    updatedAt: '09 nov. 2026',
  },
  {
    code: 'PED-2026-008',
    buyer: 'Indústria Aurora',
    supplier: 'Fundição Norte',
    stage: 'Liberado para expedição',
    statusTone: 'released',
    detail: 'Inspeção concluída no exemplo',
    updatedAt: '08 nov. 2026',
    lot: 'LT-008-A',
  },
]

const activities = [
  {
    title: 'Inspeção aguardando análise',
    detail: 'Lote LT-014-A · Pedido PED-2026-014',
    status: 'Qualidade',
    date: 'Hoje, 10 nov.',
    tone: 'alert',
  },
  {
    title: 'Entrega aguardando nova previsão',
    detail: 'Pedido PED-2026-011 · atualização do fornecedor pendente',
    status: 'Atrasada',
    date: 'Prazo previsto: 09 nov. 2026',
    tone: 'alert',
  },
  {
    title: 'Pedido liberado para expedição',
    detail: 'Lote LT-008-A · Pedido PED-2026-008',
    status: 'Concluído',
    date: '08 nov. 2026',
    tone: 'success',
  },
]

const workflow = ['Demanda', 'Match', 'Propostas', 'Aceite', 'Pedido', 'Qualidade e lote', 'Entrega', 'Avaliação']

function App() {
  return (
    <Container>
      <Header
        systemName={projectInfo.systemName}
        productName={projectInfo.productName}
        contextLabel={projectInfo.contextLabel}
        dataMode={projectInfo.dataMode}
      />
      <div className="workspace-layout">
        <Sidebar />
        <GridContainer className="dashboard-content">
          <section className="welcome-panel" id="visao-geral">
            <div>
              <p className="eyebrow">PAINEL INDUSTRIAL · VISÃO GERAL</p>
              <h1>Operações em um só lugar</h1>
              <p>Acompanhe o fluxo entre empresas compradoras e fornecedores industriais.</p>
            </div>
            <div className="period-control" aria-label={`Período: ${projectInfo.period}`}>
              <span className="calendar-icon" aria-hidden="true">▦</span>
              <span>{projectInfo.period}</span>
              <span className="period-chevron" aria-hidden="true">⌄</span>
            </div>
          </section>

          <div className="demo-note" role="note">
            <span className="demo-note-icon" aria-hidden="true">i</span>
            <p><strong>Ambiente demonstrativo.</strong> Indicadores e registros são exemplos simulados, sem dados de operação real.</p>
            <span className="updated-label">Exemplos atualizados em 10 nov. 2026</span>
          </div>

          <section className="metrics-section" aria-labelledby="metrics-title">
            <div className="section-heading">
              <div>
                <p className="section-kicker">ACOMPANHAMENTO DA OPERAÇÃO</p>
                <h2 id="metrics-title">Resumo do fluxo</h2>
              </div>
              <span className="period-label">{projectInfo.period} · dados simulados</span>
            </div>
            <div className="metric-grid">
              {metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
            </div>
          </section>

          <div className="dashboard-columns">
            <section className="panel order-panel" id="pedidos" aria-labelledby="orders-title">
              <div className="panel-heading">
                <div>
                  <p className="section-kicker">EXECUÇÃO DO FORNECEDOR</p>
                  <h2 id="orders-title">Pedidos em acompanhamento</h2>
                </div>
                <a className="text-link" href="#rastreabilidade">Ver jornada <span aria-hidden="true">→</span></a>
              </div>
              <p className="panel-description">Etapas compartilhadas do pedido; estoque e produção internos permanecem sob responsabilidade do fornecedor.</p>
              <OrderPipeline orders={orders} />
            </section>

            <section className="panel activity-panel" id="qualidade" aria-labelledby="activity-title">
              <div className="panel-heading">
                <div>
                  <p className="section-kicker">PONTOS DE ATENÇÃO</p>
                  <h2 id="activity-title">Atividades recentes</h2>
                </div>
                <span className="activity-count" aria-label={`${activities.length} atividades demonstrativas`}>{String(activities.length).padStart(2, '0')}</span>
              </div>
              <p className="panel-description">Qualidade, validade de proposta e andamento logístico.</p>
              <ActivityList activities={activities} />
            </section>
          </div>

          <section className="workflow-panel" id="rastreabilidade" aria-labelledby="workflow-title">
            <div className="panel-heading">
              <div>
                <p className="section-kicker">RASTREABILIDADE</p>
                <h2 id="workflow-title">Da demanda à avaliação</h2>
              </div>
              <span className="workflow-label">Fluxo de referência do MVP</span>
            </div>
            <ol className="workflow-list">
              {workflow.map((step, index) => (
                <li className="workflow-step" key={step}>
                  <span className="workflow-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                  {index < workflow.length - 1 && <span className="workflow-arrow" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
          </section>
        </GridContainer>
      </div>
      <Footer systemName={projectInfo.systemName} version={projectInfo.version} year={projectInfo.year} />
    </Container>
  )
}

export default App

