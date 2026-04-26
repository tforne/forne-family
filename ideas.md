# Ideas de diseño — forne.family

## Propósito
Landing decorativa y simbólica. Sin contenido informativo. Paleta: blanco, negro y azul. Idioma: español. Sin símbolo propio.

---

<response>
<probability>0.07</probability>
<idea>

**Design Movement:** Modernismo Suizo tardío / Tipografía como arquitectura

**Core Principles:**
- La tipografía ES el elemento visual principal
- Asimetría controlada: el nombre de la familia anclado en un extremo, el espacio vacío como contrapeso
- Líneas horizontales finas como único ornamento estructural
- Silencio visual: máximo dos elementos por zona

**Color Philosophy:**
Fondo blanco puro (#FFFFFF). El negro (#0D0D0D) para el texto principal, con peso extremo. Un único acento en azul cobalto profundo (#1A3A8F) para una sola línea decorativa horizontal que atraviesa la pantalla. El azul no decora: divide y jerarquiza.

**Layout Paradigm:**
Composición de tercios asimétricos. El nombre "FORNE" ocupa el tercio izquierdo en tipografía display enorme (120–180px), alineado a la izquierda y anclado verticalmente al centro-inferior. El año o una fecha simbólica aparece en el tercio derecho, pequeña y en azul. Una línea azul fina de 1px recorre horizontalmente el 60% del ancho.

**Signature Elements:**
1. Tipografía display con tracking muy abierto (letter-spacing: 0.3em) en mayúsculas
2. Una sola línea horizontal azul de 1px como único ornamento
3. Número o fecha en esquina inferior derecha, diminuto, en azul

**Interaction Philosophy:**
Cursor personalizado (punto azul pequeño). Al hacer hover sobre el nombre, las letras se separan levemente (tracking aumenta). Sin scroll, todo en viewport.

**Animation:**
Entrada: las letras del nombre aparecen de izquierda a derecha con un fade+slide sutil (stagger de 80ms por letra). La línea azul se dibuja desde el centro hacia los extremos (scaleX de 0 a 1). Duración total: 1.2s.

**Typography System:**
- Display: "Bebas Neue" o "Playfair Display" en weight 900, mayúsculas
- Acento/fecha: "IBM Plex Mono" en weight 300, minúsculas
- Sin body text

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement:** Brutalismo editorial / Periódico de lujo

**Core Principles:**
- Contraste extremo: negro sobre blanco, sin grises
- Columnas editoriales como estructura (sin contenido real)
- Bordes negros gruesos como marcos arquitectónicos
- Densidad visual controlada: mucho espacio, pero los elementos que existen son contundentes

**Color Philosophy:**
Blanco (#FAFAFA) y negro (#111111) como absolutos. El azul (#2563EB) aparece SOLO como fondo de un único bloque rectangular que contiene el apellido en blanco. Este bloque azul es el único color de la página y actúa como sello.

**Layout Paradigm:**
Dos columnas desiguales separadas por una línea negra vertical de 2px. Columna izquierda (30%): vacía, solo con el año en la esquina inferior. Columna derecha (70%): el bloque azul con "FORNE" en blanco, centrado verticalmente, con padding generoso.

**Signature Elements:**
1. Bloque rectangular azul sólido con texto blanco (el apellido)
2. Línea vertical negra divisoria
3. Año en tipografía monoespaciada, diminuto, rotado 90°

**Interaction Philosophy:**
Al hover sobre el bloque azul, este se invierte: fondo negro, texto azul. Transición de 300ms. Sin más interacciones.

**Animation:**
El bloque azul entra desde la derecha (translateX) con ease-out. La línea divisoria se dibuja de arriba a abajo. Duración: 0.8s.

**Typography System:**
- Display: "DM Serif Display" italic para el apellido
- Año/detalles: "Space Mono" weight 400
- Sin body text

</idea>
</response>

<response>
<probability>0.05</probability>
<idea>

**Design Movement:** Minimalismo japonés / Ma (間) — el espacio como presencia

**Core Principles:**
- El vacío es el protagonista, no el relleno
- Un único elemento central, sin competencia visual
- Proporciones áureas para posicionar el único elemento
- Respiración: márgenes enormes, texto pequeño y preciso

**Color Philosophy:**
Fondo blanco hueso (#F8F6F1), casi imperceptiblemente cálido. El apellido en negro carbón (#1C1C1C), peso ligero (300), en minúsculas. Una sola letra inicial "F" en azul pizarra (#2D4A7A), ligeramente más grande, que precede al apellido en la misma línea. El azul es un susurro, no un grito.

**Layout Paradigm:**
El apellido se posiciona en el punto áureo vertical (38.2% desde arriba) y centrado horizontalmente. Debajo, a distancia generosa, una línea de texto secundario en español: "familia" en versalitas, con tracking extremo (0.5em), en azul muy tenue. Nada más.

**Signature Elements:**
1. La "F" inicial en azul como único acento cromático
2. La palabra "familia" en versalitas con tracking extremo debajo del apellido
3. Espacio vacío como elemento compositivo principal

**Interaction Philosophy:**
Al cargar, el texto aparece con un fade muy lento (2s). Al hover sobre el apellido, la "F" azul pulsa suavemente (opacity 0.6→1). Sin scroll, sin navegación.

**Animation:**
Fade-in global de 2s con ease-in-out. Sin movimiento, solo opacidad. La "F" tiene una animación de pulso continua muy sutil (keyframes opacity 1→0.7→1 en 4s).

**Typography System:**
- Apellido: "Cormorant Garamond" weight 300, 64px, minúsculas
- "familia": "Cormorant Garamond" small-caps, 13px, tracking 0.5em
- Sin body text

</idea>
</response>
