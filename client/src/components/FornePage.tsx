import './FornePage.css'

export default function FornePage() {
  return (
    <div className="forne-page">

      <div className="forne-top">
        <span className="forne-logo">Forné</span>
        <span className="forne-est">Est. 1989</span>
      </div>

      <div className="forne-middle">
        <h1 className="forne-name">
          For<em>né</em>
        </h1>
        <p className="forne-statement">
          Un criterio que se sostiene<br />
          desde hace más de tres décadas.<br />
          <em>Sin más explicación necesaria.</em>
        </p>
      </div>

      <div className="forne-bottom">
        <div className="forne-bottom-left">
          <div className="forne-item">
            <span className="forne-label">Origen</span>
            <span className="forne-value">Barcelona, Cataluña</span>
          </div>
          <div className="forne-item">
            <span className="forne-label">Carácter</span>
            <span className="forne-value"><em>Discreto. Continuo. Propio.</em></span>
          </div>
          <div className="forne-item">
            <span className="forne-label">Contacto</span>
            <span className="forne-value">office@forne.family</span>
          </div>
        </div>

        <div className="forne-mark">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="58" stroke="#C8C4BB" strokeWidth="0.5"/>
            <circle cx="60" cy="60" r="44" stroke="#C8C4BB" strokeWidth="0.5"/>
            <line x1="60" y1="2" x2="60" y2="118" stroke="#C8C4BB" strokeWidth="0.5"/>
            <line x1="2" y1="60" x2="118" y2="60" stroke="#C8C4BB" strokeWidth="0.5"/>
            <circle cx="60" cy="60" r="3" fill="#8C7355"/>
            <text
              x="60" y="64"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="9"
              fontWeight="300"
              letterSpacing="4"
              fill="#8C7355"
              textAnchor="middle"
              fontStyle="italic"
            >
              forné
            </text>
          </svg>
        </div>
      </div>

    </div>
  )
}
