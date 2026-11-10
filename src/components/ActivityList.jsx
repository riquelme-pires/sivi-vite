export function ActivityList({ activities }) {
  if (!activities?.length) {
    return <p className="activity-empty">Nenhuma atividade pendente para este período.</p>
  }

  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <li className={`activity-item activity-${activity.tone || 'neutral'}`} key={`${activity.title}-${activity.date}`}>
          <span className="activity-symbol" aria-hidden="true">{activity.tone === 'alert' ? '!' : activity.tone === 'success' ? '✓' : '•'}</span>
          <div className="activity-copy">
            <div className="activity-titleline">
              <p className="activity-title">{activity.title}</p>
              <span className="activity-status">{activity.status}</span>
            </div>
            <p className="activity-detail">{activity.detail}</p>
            <p className="activity-date">{activity.date}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
