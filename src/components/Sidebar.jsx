const navigationItems = [
  { label: 'Visão geral', href: '#visao-geral', icon: '◫' },
  { label: 'Demandas', href: '#demandas', icon: '⌕' },
  { label: 'Propostas', href: '#propostas', icon: '⇄' },
  { label: 'Pedidos', href: '#pedidos', icon: '▤' },
  { label: 'Qualidade', href: '#qualidade', icon: '◇' },
  { label: 'Rastreabilidade', href: '#rastreabilidade', icon: '⌁' },
]

export function Sidebar({ items = navigationItems, activeItem = 'Visão geral' }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">
        <span className="sidebar-kicker">AMBIENTE</span>
        <span className="workspace-name">Operações SIVI</span>
      </div>
      <nav aria-label="Navegação principal">
        <span className="nav-section-label">MONITORAMENTO</span>
        <ul className="nav-list">
          {items.map((item) => (
            <li key={item.label}>
              <a className={`nav-link${item.label === activeItem ? ' is-active' : ''}`} href={item.href} aria-current={item.label === activeItem ? 'page' : undefined}>
                <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-note">
        <span className="sidebar-note-icon" aria-hidden="true">i</span>
        <p>O SIVI conecta empresas e organiza a negociação industrial.</p>
      </div>
    </aside>
  )
}
