export function Header({ systemName, productName, contextLabel, dataMode }) {
  return (
    <header className="topbar">
      <div className="brand-lockup">
        <span className="sr-only">{productName}</span>
        <span className="brand-mark" aria-hidden="true">S</span>
        <div>
          <p className="eyebrow">{systemName}</p>
          <p className="topbar-context">{contextLabel}</p>
        </div>
      </div>
      <div className="topbar-meta">
        <span className="data-disclosure"><span className="status-dot" aria-hidden="true" />{dataMode}</span>
        <span className="profile-avatar" aria-hidden="true">SD</span>
      </div>
    </header>
  )
}
