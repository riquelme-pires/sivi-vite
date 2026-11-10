const progressForStage = {
  'Pedido confirmado': 1,
  'Em produção': 2,
  'Aguardando inspeção': 3,
  'Liberado para expedição': 4,
  'Em transporte': 5,
  'Entregue': 6,
}

export function OrderPipeline({ orders }) {
  return (
    <ol className="order-list" aria-label="Pedidos de demonstração">
      {orders.map((order) => {
        const progress = progressForStage[order.stage] || 1
        return (
          <li className="order-item" key={order.code}>
            <div className="order-item-main">
              <div className="order-identification">
                <span className="order-code">{order.code}</span>
                <span className={`order-stage stage-${order.statusTone || 'neutral'}`}>{order.stage}</span>
              </div>
              <p className="order-parties">{order.buyer} <span aria-hidden="true">→</span> {order.supplier}</p>
              <div className="order-progress" aria-label={`Etapa ${progress} de 6: ${order.stage}`}>
                {Array.from({ length: 6 }, (_, index) => (
                  <span className={index < progress ? 'progress-step is-complete' : 'progress-step'} key={`${order.code}-step-${index}`} />
                ))}
              </div>
              <p className="order-update">{order.detail} <span aria-hidden="true">·</span> Atualizado {order.updatedAt}</p>
            </div>
            {order.lot && <span className="order-lot">Lote {order.lot}</span>}
          </li>
        )
      })}
    </ol>
  )
}
