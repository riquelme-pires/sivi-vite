export function GridContainer({ children, className = '' }) {
  return <main id="conteudo" className={`content-grid ${className}`.trim()}>{children}</main>
}
