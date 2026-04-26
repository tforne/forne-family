/*
 * forne.family — Home
 * Diseño: Minimalismo japonés / Ma (間)
 * Un único elemento tipográfico en el punto áureo vertical (38.2% desde arriba).
 * Paleta: blanco hueso, negro carbón, azul pizarra.
 * Sin scroll, sin navegación, sin imágenes.
 */

export default function Home() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        /* Punto áureo: paddingTop empuja el bloque al 38.2% del viewport */
        justifyContent: "flex-start",
        paddingTop: "38.2vh",
        background: "oklch(0.978 0.005 85)",
        overflow: "hidden",
      }}
    >
      {/* Contenedor principal con fade-in */}
      <div
        className="forne-enter"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.2rem",
          userSelect: "none",
        }}
      >
        {/* Apellido */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(5rem, 14vw, 10.5rem)",
            letterSpacing: "0.18em",
            lineHeight: 1,
            margin: 0,
            color: "oklch(0.16 0.005 30)",
            textTransform: "lowercase",
          }}
        >
          <span
            className="forne-initial"
            style={{
              fontStyle: "italic",
              fontSize: "1.08em",
            }}
          >
            F
          </span>
          <span>ornè</span>
        </h1>

        {/* Separador: línea azul tenue */}
        <div
          style={{
            width: "2.8rem",
            height: "1px",
            background: "oklch(0.35 0.07 250 / 0.35)",
          }}
        />

        {/* Subtítulo en versalitas */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(0.6rem, 1.4vw, 0.78rem)",
            letterSpacing: "0.52em",
            textTransform: "uppercase",
            color: "oklch(0.35 0.07 250 / 0.75)",
            margin: 0,
            paddingLeft: "0.52em", /* compensa el tracking para centrado óptico */
          }}
        >
          1933
        </p>
      </div>
    </div>
  );
}
