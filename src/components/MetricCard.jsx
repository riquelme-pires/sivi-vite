const iconLabels = {
  requests: 'D',
  proposals: 'P',
  orders: 'O',
  quality: 'Q',
}

export function MetricCard({ id, label, value, detail, status, category }) {
  return (
    <article className={`metric-card metric-${category || 'neutral'}`} id={id}>
      <div className="metric-topline">
        <p className="metric-label">{label}</p>
        <span className="metric-icon" aria-hidden="true">{iconLabels[category] || '•'}</span>
      </div>
      <strong className="metric-value">{value}</strong>
      <div className="metric-bottomline">
        <span className="metric-status">{status}</span>
        <p className="metric-detail">{detail}</p>
      </div>
    </article>
  )
}
