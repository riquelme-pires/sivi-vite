export function Footer({ systemName, version, year }) {
  return (
    <footer className="app-footer">
      <span>{systemName} <span aria-hidden="true">·</span> {version}</span>
      <span>{year} <span aria-hidden="true">·</span> Ambiente demonstrativo</span>
    </footer>
  )
}
