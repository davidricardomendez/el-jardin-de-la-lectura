# El jardín de la lectura — especificación completa y código original

Exportación de la versión 3 publicada el 22 de septiembre de 2026. Fuente local comprobada: commit `484550200f6b1d9c70152144ae76f86d2742da1c`. El servicio Sites indica versión actual 3 al exportar.

URL de referencia: https://el-jardin-de-la-lectura.xianagarza5.chatgpt.site/

**Sí hay acceso al código original.** Se entrega el HTML, CSS y JavaScript reales, junto con todos los archivos visuales utilizados. No es una aproximación a partir de una captura. No se ha cambiado el diseño para la exportación. Los tres archivos ejecutables y los 24 archivos de imagen son copias byte por byte del directorio publicado `dist/`.

La corrección más reciente está incluida: cada ronda tiene una única cuadrícula continua de libros. Ya no existen bloques independientes «Selección de Mateo» o «Selección de Alberto» en la galería. El dato de turno compartido se conserva en el catálogo.

Este documento separa CONTENIDO, DISEÑO, IMÁGENES, ESTRUCTURA y CÓDIGO. Incluye también lógica, mantenimiento y publicación. El ZIP contiene los recursos binarios que no se pueden reconstruir pegando texto. Para trasladarlo a otro chat, adjunta tanto este documento como el ZIP.

# CONTENIDO

## 1. Secuencia completa de la pantalla

| Orden | Elemento | Texto y comportamiento |
|---|---|---|
| 0 | Enlace de accesibilidad | «Ir a los libros». Normalmente fuera de pantalla; aparece al recibir foco mediante teclado. Destino `#jardin`. |
| 1 | Cabecera, marca | «El jardín» y «de la lectura» en cursiva. En escritorio, dos líneas; en móvil, una línea si cabe. Enlace a `#inicio`. |
| 2 | Navegación | «Nuestro jardín» → `#jardin`; «Autores» → `#autores`; «Miembros» → `#miembros`. |
| 3 | Portada, etiqueta superior | «CLUB DE LECTURA». |
| 4 | Título principal | «El jardín» + salto de línea + «de la lectura» en cursiva. |
| 5 | Subtítulo | «Los libros que hemos ido leyendo juntos.» |
| 6 | Frase | «Algunos nos encantaron, otros no tanto.» |
| 7 | Ilustración de portada | Ramas botánicas a la derecha; decorativa, sin texto alternativo. |
| 8 | Título de galería | «Nuestro jardín». |
| 9 | Filtros | «Todos», «Primera ronda», «Segunda ronda», «Tercera ronda». Inicialmente «Todos» activo. |
| 10 | Primera ronda | Círculo con «I», título «Primera ronda», contador «8 obras o textos», 8 fichas con portada. |
| 11 | Segunda ronda | Círculo con «II», título «Segunda ronda», contador «11 obras o textos», 11 fichas con portada, sin interrupciones. |
| 12 | Tercera ronda | Círculo con «III», título «Tercera ronda», contador «4 obras o textos», 4 fichas con portada. |
| 13 | Autores | Etiqueta «ÍNDICE LITERARIO», título «Autores», nombres y obras. Sin imágenes. |
| 14 | Miembros | Etiqueta «LECTURAS COMPARTIDAS», título «Miembros», nombres y propuestas. Sin imágenes. |
| 15 | Resumen | «20 turnos de elección»; «23 obras o textos»; «9 miembros que han realizado propuestas». |
| 16 | Pie | «El jardín seguirá creciendo.» y, debajo, «El jardín de la lectura». |

Cada ficha contiene exactamente: portada; título; autor o autores unidos con « y »; «Propuesto por NOMBRE»; nombre completo de su ronda. No se muestran números de orden ni de turno en las fichas. No hay botones en las fichas, descripciones, sinopsis, puntuaciones ni reseñas.

Al filtrar se actualiza un mensaje accesible oculto: «Se muestran todas las rondas» o «Se muestra la primera ronda», «Se muestra la segunda ronda», «Se muestra la tercera ronda». Inicialmente el mensaje está vacío. No ocupa espacio visual.

Metadatos del documento: idioma `es`; UTF-8; título de pestaña «El jardín de la lectura»; descripción «El jardín de la lectura. Algunos nos encantaron, otros no tanto.»; color del navegador `#f6f3eb`; viewport `width=device-width, initial-scale=1`. No existe imagen social Open Graph configurada.

## 2. Catálogo íntegro y orden exacto

El orden de lectura de cada cuadrícula es de izquierda a derecha y de arriba abajo. «Orden» cuenta obras/textos; «Turno» cuenta elecciones del club. Dos elecciones contienen varias obras.

| Orden | Turno | Ronda | Título exacto mostrado | Autor/es exactos | Propuesto por | Portada local |
|---|---|---|---|---|---|---|
| 1 | 1 | 1 | Una historia ridícula | Luis Landero | Toni | `assets/cover-01.jpg` |
| 2 | 2 | 1 | Flores para Algernon | Daniel Keyes | Mateo | `assets/cover-02.jpg` |
| 3 | 3 | 1 | La juventud atracada | José Ignacio Conde-Ruiz y Carlotta Conde Gasca | Fernando | `assets/cover-03.jpg` |
| 4 | 4 | 1 | El segador | Terry Pratchett | Alex | `assets/cover-04.jpg` |
| 5 | 5 | 1 | En el camino | Jack Kerouac | Carba | `assets/cover-05.jpg` |
| 6 | 6 | 1 | El príncipe destronado | Miguel Delibes | Alberto | `assets/cover-06.jpg` |
| 7 | 7 | 1 | La nieta del señor Linh | Philippe Claudel | Simón | `assets/cover-07.jpg` |
| 8 | 8 | 1 | Los mares del sur | Manuel Vázquez Montalbán | David | `assets/cover-08.jpg` |
| 9 | 9 | 2 | Sab | Gertrudis Gómez de Avellaneda | Toni | `assets/cover-09.jpg` |
| 10 | 10 | 2 | El terremoto en Chile | Heinrich von Kleist | Mateo | `assets/cover-10.jpg` |
| 11 | 10 | 2 | Informe para una academia | Franz Kafka | Mateo | `assets/cover-11.jpg` |
| 12 | 10 | 2 | ¿Cuánta tierra necesita un hombre? | Lev Tolstói | Mateo | `assets/cover-12.jpg` |
| 13 | 11 | 2 | Cadáver exquisito | Agustina Bazterrica | Fernando | `assets/cover-13.jpg` |
| 14 | 12 | 2 | El señor de las moscas | William Golding | Alex | `assets/cover-14.jpg` |
| 15 | 13 | 2 | Gente normal | Sally Rooney | Carba | `assets/cover-15.jpg` |
| 16 | 14 | 2 | Atrapa al pez dorado | David Lynch | Alberto | `assets/cover-16.jpg` |
| 17 | 14 | 2 | Cartas a un joven poeta | Rainer Maria Rilke | Alberto | `assets/cover-17.jpg` |
| 18 | 15 | 2 | Fahrenheit 451 | Ray Bradbury | Carlos | `assets/cover-18.jpg` |
| 19 | 16 | 2 | Ubik | Philip K. Dick | David | `assets/cover-19.jpg` |
| 20 | 17 | 3 | A sangre y fuego | Manuel Chaves Nogales | Toni | `assets/cover-20.jpg` |
| 21 | 18 | 3 | Cándido | Voltaire | Mateo | `assets/cover-21.jpg` |
| 22 | 19 | 3 | Mil cosas | Juan Tallón | Fernando | `assets/cover-22.jpg` |
| 23 | 20 | 3 | El viejo y el mar | Ernest Hemingway | Alex | `assets/cover-23.jpg` |

Información adicional asociada: en todos los casos la ficha añade «Propuesto por …» y «Primera ronda», «Segunda ronda» o «Tercera ronda». No hay otro texto individual visible.

El turno 10 reúne los tres textos de Mateo (Kleist, Kafka y Tolstói). El turno 14 reúne los dos libros de Alberto (Lynch y Rilke). Tras la corrección solicitada, comparten fila con las demás obras cuando corresponde; **no hay que reconstruir los antiguos bloques de selección**. El campo `turn` permite recuperar el vínculo sin alterar la cuadrícula.

Particularidades preservadas para una copia fiel:

- El texto de Lynch en el sitio es «Atrapa al pez dorado», siguiendo el listado facilitado. La portada de la edición obtenida dice «Atrapa el pez dorado». Se deja documentado; no se cambia silenciosamente en esta copia.
- La portada de Kleist corresponde a una colección que incluye «El terremoto en Chile».
- La portada de Kafka corresponde a «Informe para una academia y otros escritos».
- No se ha verificado qué edición física leyó el club. Las portadas representan las obras, no una afirmación sobre la edición utilizada.

## 3. Índice completo de autores

Orden alfabético por el nombre completo, mediante `localeCompare(..., 'es')`; no se ordena por apellido. Hay 24 nombres, porque una obra tiene dos autores. El orden visual se llena por filas en la cuadrícula.

| Autor | Obra leída |
|---|---|
| Agustina Bazterrica | Cadáver exquisito |
| Carlotta Conde Gasca | La juventud atracada |
| Daniel Keyes | Flores para Algernon |
| David Lynch | Atrapa al pez dorado |
| Ernest Hemingway | El viejo y el mar |
| Franz Kafka | Informe para una academia |
| Gertrudis Gómez de Avellaneda | Sab |
| Heinrich von Kleist | El terremoto en Chile |
| Jack Kerouac | En el camino |
| José Ignacio Conde-Ruiz | La juventud atracada |
| Juan Tallón | Mil cosas |
| Lev Tolstói | ¿Cuánta tierra necesita un hombre? |
| Luis Landero | Una historia ridícula |
| Manuel Chaves Nogales | A sangre y fuego |
| Manuel Vázquez Montalbán | Los mares del sur |
| Miguel Delibes | El príncipe destronado |
| Philip K. Dick | Ubik |
| Philippe Claudel | La nieta del señor Linh |
| Rainer Maria Rilke | Cartas a un joven poeta |
| Ray Bradbury | Fahrenheit 451 |
| Sally Rooney | Gente normal |
| Terry Pratchett | El segador |
| Voltaire | Cándido |
| William Golding | El señor de las moscas |

## 4. Miembros, orden y propuestas completas

### Toni

- Una historia ridícula
- Sab
- A sangre y fuego

### Mateo

- Flores para Algernon
- El terremoto en Chile
- Informe para una academia
- ¿Cuánta tierra necesita un hombre?
- Cándido

### Fernando

- La juventud atracada
- Cadáver exquisito
- Mil cosas

### Alex

- El segador
- El señor de las moscas
- El viejo y el mar

### Carba

- En el camino
- Gente normal

### Alberto

- El príncipe destronado
- Atrapa al pez dorado
- Cartas a un joven poeta

### Simón

- La nieta del señor Linh

### David

- Los mares del sur
- Ubik

### Carlos

- Fahrenheit 451

# DISEÑO

## 1. Identidad y fondos

Archivo editorial cálido, fondo crema continuo, tinta verde oscuro, tipografía serif en títulos. La decoración es una sola imagen de ramas en la portada. No hay una textura de papel aplicada al documento entero: el fondo general es un color plano. El papel aparente procede del fondo de la imagen botánica. No hay degradados, tarjetas con borde alrededor de cada obra, cabecera fija ni menú hamburguesa.

| Variable / uso | Valor exacto |
|---|---|
| Fondo `--paper` | `#f6f3eb` |
| Texto principal `--ink` | `#293c31` |
| Texto secundario `--muted` | `#6c7065` |
| Líneas `--line` | `#dcded2` |
| Verde declarado `--green` | `#3e5642` (declarado, sin uso en las reglas actuales) |
| Hover de filtros `--soft` | `#e9ecdf` |
| Autores bajo portada | `#666b61` |
| Metadatos de ficha | `#71766b` |
| Texto de números romanos | `#778372` |
| Borde de círculos romanos | `#ccd2c3` |
| Superficie tras portadas | `rgba(230,231,218,.3)` |
| Sombra normal | `3px 5px 9px #28302120` (alfa 32/255) |
| Sombra hover | `4px 9px 13px #28302125` (alfa 37/255) |
| Contorno de foco | `2px solid #6d855d`, separado `5px` |
| Enlace para saltar al contenido | Fondo `#293c31`, texto blanco |

## 2. Tipografías

No se descargan fuentes. El aspecto exacto depende de las fuentes instaladas y del renderizado del navegador.

- Cuerpo: `Arial, Helvetica, sans-serif`, 16 px y altura de línea 1.55.
- Títulos h1/h2/h3 y marca: `Georgia, 'Times New Roman', serif`, peso 400.
- Títulos de libro h4: misma pila serif, peso 400.
- Subtítulo, números romanos y cifras del resumen: Georgia con sustitutos definidos en el CSS.
- Pie: cursiva, 28 px Georgia en escritorio, 25 px en móvil.
- Botones: heredan la familia tipográfica del documento.

| Elemento | Tamaño base | Altura / espaciado / detalles |
|---|---|---|
| Marca | 21 px | line-height 1.2; segunda línea 16 px en cursiva |
| Navegación | 14 px | gap 36 px |
| Etiquetas superiores | 12 px | tracking .2em; line-height 1.5; margen inferior 20 px |
| h1 | `clamp(48px,5.7vw,82px)` | line-height 1.04; tracking -.045em |
| h2 | 38 px | line-height 1.2; tracking -.035em |
| Subtítulo | 21 px | margen superior 27 px |
| Frase de portada | 14 px | margen superior 8 px |
| Filtros | 14 px | padding 9 px 16 px |
| Título de ronda | 25 px | serif |
| Numeral romano | 15 px | círculo 33 × 33 px |
| Contador de ronda | 12 px | tracking .05em |
| Título de libro | 20 px | line-height 1.25; tracking -.02em; margen inferior 7 px |
| Autor bajo libro | 14 px | line-height 1.5 |
| Metadatos de libro | 12 px | line-height 1.55; margen superior 10 px |
| Nombre en autores | 19 px | line-height 1.35; margen inferior 5 px |
| Obra en autores | 14 px | color secundario |
| Nombre de miembro | 24 px | margen inferior 11 px |
| Propuestas en miembros | 14 px | margen inferior 7 px por elemento |
| Texto de resumen | 12 px | cifra serif 25 px, margen derecho 5 px |
| Texto pequeño del pie | 12 px | margen superior 17 px |

## 3. Geometría general

Se aplica `box-sizing: border-box` a todos los elementos. Body sin margen. `header`, `main` y `footer` tienen `max-width:1440px`, `margin:auto`, padding lateral de `6%` a cada lado. El ancho máximo incluye los paddings; no equivale a 1440 px útiles para las fichas. Los porcentajes se resuelven respecto al bloque contenedor según CSS. No hay ancho fijo de ficha: cada una ocupa una fracción de la cuadrícula.

Cabecera: flex horizontal, alineación vertical centrada, separación entre marca y menú, altura mínima 110 px y gap 30 px. Cada enlace tiene padding vertical 8 px y borde inferior transparente de 1 px; al pasar el cursor, el borde usa el color de tinta.

Portada: altura mínima 440 px, borde superior de 1 px, overflow oculto; texto con padding 54 px arriba y 66 px abajo. El texto queda en z-index 1 y la imagen en z-index 0. No hay botón principal.

Ilustración: posición absoluta; derecha -7%, arriba -5%, ancho 66%, alto 110%; `object-fit:cover`, `mix-blend-mode:multiply`, opacidad .73, eventos de ratón desactivados. Esta mezcla integra el fondo de papel con el crema del documento.

Galería: padding superior 26 px. Cabecera de galería con flex, gap 24 px, padding 25 px arriba y 31 px abajo, línea inferior 1 px. Filtros con gap 6 px y ajuste de línea. Botones de borde transparente 1 px y radio 30 px; activo con fondo verde oscuro y texto crema, inactivo sin fondo.

Rondas: padding 35 px arriba y abajo. Cabecera de ronda flex con gap 17 px y margen inferior 30 px. El contador se empuja a la derecha mediante `margin-left:auto`. Los círculos romanos tienen borde 1 px y radio 50%.

Portadas: cuadrícula base de cuatro columnas `repeat(4,minmax(0,1fr))`; separación horizontal 38 px y vertical 41 px. No hay masonry, carrusel ni ordenamiento dinámico.

Cada área de portada mide 285 px de alto en la regla base. Tiene padding `10px 5px 17px`, margen inferior 17 px, fondo muy tenue, flex con centrado horizontal y alineación al fondo. La imagen mantiene su relación de aspecto: `width:auto; height:auto; max-width:94%; max-height:100%; object-fit:contain`. No se recorta a una proporción uniforme. El tamaño intrínseco de cada archivo puede limitar cuánto crece. Los bordes de imágenes y áreas son rectos (sin radio). Las imágenes tienen sombra suave.

Directorios: borde superior 1 px, padding superior 60 px, margen superior 40 px; rejilla de dos áreas `1fr 3fr` con gap 38 px. El título ocupa el área izquierda y las entradas la derecha. Autores: dos columnas iguales con gap horizontal 40 px; cada entrada tiene padding inferior 20 px, margen inferior 20 px y línea inferior. Miembros: tres columnas iguales con gap 34 px; listas sin viñetas ni padding.

Resumen: flex centrado, gap 38 px, margen superior 65 px, padding vertical 27 px, líneas superior e inferior de 1 px. Pie centrado, padding superior 55 px e inferior 54 px.

## 4. Responsive: reglas y límites exactos

Los breakpoints usan píxeles CSS del viewport, no píxeles físicos de la captura. Una captura de móvil puede mostrar cuatro columnas si el navegador usa modo escritorio o un viewport CSS ancho.

| Ancho | Columnas libros | Alto área portada | Gap horizontal / vertical |
|---|---|---|---|
| ≥ 1400 px | 4 | 315 px | 38 / 41 px |
| > 1000 y < 1400 px | 4 | 285 px | 38 / 41 px |
| > 650 y ≤ 1000 px | 4 | 240 px | 24 / 41 px |
| > 380 y ≤ 650 px | 2 | 235 px | 20 / 30 px |
| ≤ 380 px | 2 | 200 px | 20 / 30 px |

### Hasta 1000 px inclusive

- La cabecera de galería se apila verticalmente y alinea al inicio.
- Los directorios pasan a una única área con gap 30 px. Sus títulos y etiquetas se ponen en una fila, alineados por la línea base, gap 25 px; la etiqueta tiene `order:2`.
- Los autores siguen en dos columnas y los miembros en tres hasta el siguiente breakpoint.
- Portada: mínimo 400 px.
- Botánica: derecha -18%, ancho 82%, opacidad .55.

### Hasta 650 px inclusive

- Padding lateral general sigue en 6%.
- Cabecera: mínimo 106 px, flex-wrap, gap 18 px, padding arriba 24 px y abajo 20 px.
- Marca y cursiva: 20 px; la cursiva pasa a inline.
- Menú: ancho 100%, gap 26 px, fuente 13 px; no menú desplegable.
- Portada: mínimo 345 px; texto con padding vertical 45 px.
- Botánica: ancho 110%, alto 110%, derecha -42%, opacidad .25.
- h1 fijo a 51 px; subtítulo 18 px con max-width 270 px; frase 13 px con max-width 260 px.
- Etiquetas superiores 11 px; h2 32 px.
- Galería: padding superior 10 px; cabecera con padding inferior 23 px y gap 22 px.
- Filtros: gap 4 px; fuente 12 px; padding `8px 11px`.
- Portadas: 2 columnas; área con padding `9px 3px 12px`.
- Títulos de libros 19 px, autores 13 px, metadatos 12 px.
- Cabecera de ronda gap 12 px; título 24 px; contador 11 px.
- Directorios: margen superior 25 px, padding superior 36 px; encabezado vuelve a bloque.
- Autores: una columna sin gap de rejilla.
- Miembros: dos columnas; gap vertical 30 px y horizontal 24 px.
- Resumen: gap 15 px, alineación superior, `space-between`, margen superior 45 px. Cada párrafo flex 1 y max-width 130 px; cifras en bloque, 28 px, margen inferior 5 px.
- Frase del pie 25 px.

### Hasta 380 px inclusive

- Portadas: área de 200 px de alto.
- Filtros: padding 8 px en todos los lados.
- Menú: gap 20 px.
- h1: 45 px.

### Movimiento reducido

Con `prefers-reduced-motion:reduce`, se desactiva el desplazamiento suave, la transición de portadas y su movimiento vertical de hover. El cambio de sombra puede seguir siendo instantáneo.

## 5. Inventario completo de reglas

El CSS íntegro aparece en CÓDIGO. Es la referencia exacta para todas las propiedades y herencias. Contiene además reglas antiguas `.selection` y `.selection-head` que ya no tienen elementos asociados en el HTML generado: están inactivas y no significan que deban reaparecer bloques separados.

# IMÁGENES

## 1. Archivos incluidos

23 portadas JPEG, una decoración WebP y un favicon SVG incorporado en el HTML como data URL. No hay otros fondos gráficos, iconos sociales, retratos, avatares ni archivos de fuentes. Las sombras, círculos, líneas y superficies son CSS.

Las imágenes incluidas son las copias optimizadas utilizadas por el sitio. El manifiesto conserva las dimensiones de las fuentes y las dimensiones finales. Algunas portadas tienen resolución modesta —en especial «En el camino» y «Mil cosas»—; se conservan por fidelidad, sin inventar detalle mediante ampliaciones.

Las URLs de origen son referencias de procedencia guardadas al construir la web; no hacen falta para mostrar las imágenes y pueden cambiar. Algunas páginas editoriales y el servidor de descarga son distintos: eso está reflejado en ambos campos del manifiesto. No se acredita una licencia abierta de las portadas.

## 2. Correspondencia completa de portadas

### 01. Una historia ridícula

- Archivo: `assets/cover-01.jpg`
- Dimensiones incluidas: 552 × 827 px. Proporción ancho/alto: 0.6675.
- Dimensiones de la fuente registrada: 552 × 827 px.
- Página de procedencia: https://www.planetadelibros.com/libro-una-historia-ridicula/345830
- URL original de imagen: https://imagessl5.casadellibro.com/a/l/s7/90/9788411070690.webp

### 02. Flores para Algernon

- Archivo: `assets/cover-02.jpg`
- Dimensiones incluidas: 604 × 900 px. Proporción ancho/alto: 0.6711.
- Dimensiones de la fuente registrada: 700 × 1043 px.
- Página de procedencia: https://kalamobooks.com/products/9788498891157
- URL original de imagen: https://kalamobooks.com/cdn/shop/files/978849889115.jpg?v=1781908281

### 03. La juventud atracada

- Archivo: `assets/cover-03.jpg`
- Dimensiones incluidas: 552 × 834 px. Proporción ancho/alto: 0.6619.
- Dimensiones de la fuente registrada: 552 × 834 px.
- Página de procedencia: https://www.planetadelibros.com/libro-la-juventud-atracada/376461
- URL original de imagen: https://imagessl5.casadellibro.com/a/l/s7/93/9788411001793.webp

### 04. El segador

- Archivo: `assets/cover-04.jpg`
- Dimensiones incluidas: 250 × 386 px. Proporción ancho/alto: 0.6477.
- Dimensiones de la fuente registrada: 250 × 386 px.
- Página de procedencia: https://www.penguinlibros.com/es/libros-de-fantasia/36224-libro-el-segador-mundodisco-11-9788497599931
- URL original de imagen: https://www.penguinlibros.com/es/7738560-home_default/el-segador-mundodisco-11.jpg

### 05. En el camino

- Archivo: `assets/cover-05.jpg`
- Dimensiones incluidas: 135 × 205 px. Proporción ancho/alto: 0.6585.
- Dimensiones de la fuente registrada: 135 × 205 px.
- Página de procedencia: https://oceano.mx/obras/en-el-camino-jack-kerouac-25275.aspx
- URL original de imagen: https://oceano.mx/img/obra/ficha/25275.jpg

### 06. El príncipe destronado

- Archivo: `assets/cover-06.jpg`
- Dimensiones incluidas: 552 × 833 px. Proporción ancho/alto: 0.6627.
- Dimensiones de la fuente registrada: 552 × 833 px.
- Página de procedencia: https://www.planetadelibros.com/libro-el-principe-destronado/266500
- URL original de imagen: https://imagessl5.casadellibro.com/a/l/s7/03/9788423352203.webp

### 07. La nieta del señor Linh

- Archivo: `assets/cover-07.jpg`
- Dimensiones incluidas: 250 × 386 px. Proporción ancho/alto: 0.6477.
- Dimensiones de la fuente registrada: 250 × 386 px.
- Página de procedencia: https://www.penguinlibros.com/es/literatura-contemporanea/28273-ebook-la-nieta-del-senor-linh-9788415470601
- URL original de imagen: https://www.penguinlibros.com/es/1501876-home_default/la-nieta-del-senor-linh.jpg

### 08. Los mares del sur

- Archivo: `assets/cover-08.jpg`
- Dimensiones incluidas: 552 × 826 px. Proporción ancho/alto: 0.6683.
- Dimensiones de la fuente registrada: 552 × 826 px.
- Página de procedencia: https://www.planetadelibros.com/libro-los-mares-del-sur/262783
- URL original de imagen: https://imagessl5.casadellibro.com/a/l/s7/32/9788408181132.webp

### 09. Sab

- Archivo: `assets/cover-09.jpg`
- Dimensiones incluidas: 200 × 327 px. Proporción ancho/alto: 0.6116.
- Dimensiones de la fuente registrada: 200 × 327 px.
- Página de procedencia: https://www.catedra.com/libro/letras-hispanicas/sab-gertrudis-gomez-de-avellaneda-9788437615943/
- URL original de imagen: https://www.catedra.com/imagenes/libros/9788437615943-sab.jpg

### 10. El terremoto en Chile

- Archivo: `assets/cover-10.jpg`
- Dimensiones incluidas: 200 × 301 px. Proporción ancho/alto: 0.6645.
- Dimensiones de la fuente registrada: 200 × 301 px.
- Página de procedencia: https://www.akal.mx/libro/el-cantaro-roto-el-terremoto-en-chile-la-marquesa-de-o_43798/
- URL original de imagen: https://www.akal.mx/media/akalmexico/images/thumbs/cover-33916-200x301.jpg
- Nota de edición registrada: Cover of the collection El cántaro roto / El terremoto en Chile / La marquesa de O… (Akal), which includes the requested story.

### 11. Informe para una academia

- Archivo: `assets/cover-11.jpg`
- Dimensiones incluidas: 236 × 354 px. Proporción ancho/alto: 0.6667.
- Dimensiones de la fuente registrada: 236 × 354 px.
- Página de procedencia: https://www.akal.com/libro/informe-para-una-academia-y-otros-escritos_35073/
- URL original de imagen: https://www.akal.com/media/akal/images/thumbs/cover-35073-236x354.jpg
- Nota de edición registrada: Cover of Informe para una academia y otros escritos (Akal).

### 12. ¿Cuánta tierra necesita un hombre?

- Archivo: `assets/cover-12.jpg`
- Dimensiones incluidas: 616 × 900 px. Proporción ancho/alto: 0.6844.
- Dimensiones de la fuente registrada: 1535 × 2244 px.
- Página de procedencia: https://nordicalibros.com/product/eb-cuanta-tierra-necesita-un-hombre/
- URL original de imagen: https://nordicalibros.com/wp-content/uploads/2018/02/9788417651411.jpg

### 13. Cadáver exquisito

- Archivo: `assets/cover-13.jpg`
- Dimensiones incluidas: 250 × 386 px. Proporción ancho/alto: 0.6477.
- Dimensiones de la fuente registrada: 250 × 386 px.
- Página de procedencia: https://www.penguinlibros.com/es/libros-de-ciencia-ficcion/6961-libro-cadaver-exquisito-mapa-de-las-lenguas-9788420433424
- URL original de imagen: https://www.penguinlibros.com/es/8225896-home_default/cadaver-exquisito-mapa-de-las-lenguas.jpg

### 14. El señor de las moscas

- Archivo: `assets/cover-14.jpg`
- Dimensiones incluidas: 200 × 300 px. Proporción ancho/alto: 0.6667.
- Dimensiones de la fuente registrada: 200 × 300 px.
- Página de procedencia: https://www.alianzaeditorial.es/libro/bibliotecas-de-autor/el-senor-de-las-moscas-william-golding-9788420674179/
- URL original de imagen: https://www.alianzaeditorial.es//imagenes/libros/9788420674179-el-senor-de-las-moscas.jpg

### 15. Gente normal

- Archivo: `assets/cover-15.jpg`
- Dimensiones incluidas: 250 × 386 px. Proporción ancho/alto: 0.6477.
- Dimensiones de la fuente registrada: 250 × 386 px.
- Página de procedencia: https://www.penguinlibros.com/es/literatura-contemporanea/343494-libro-gente-normal-9788466374767
- URL original de imagen: https://www.penguinlibros.com/es/3740007-home_default/gente-normal.jpg

### 16. Atrapa al pez dorado

- Archivo: `assets/cover-16.jpg`
- Dimensiones incluidas: 250 × 386 px. Proporción ancho/alto: 0.6477.
- Dimensiones de la fuente registrada: 250 × 386 px.
- Página de procedencia: https://www.penguinlibros.com/es/libro-de-arte-cine-y-musica/296549-libro-atrapa-el-pez-dorado-9788418897436
- URL original de imagen: https://www.penguinlibros.com/es/2735954-home_default/atrapa-el-pez-dorado.jpg
- Nota de edición registrada: Published Spanish title: Atrapa el pez dorado.

### 17. Cartas a un joven poeta

- Archivo: `assets/cover-17.jpg`
- Dimensiones incluidas: 200 × 300 px. Proporción ancho/alto: 0.6667.
- Dimensiones de la fuente registrada: 200 × 300 px.
- Página de procedencia: https://www.alianzaeditorial.es/libro/literatura/cartas-a-un-joven-poeta-rainer-ma-rilke-9788420609102/
- URL original de imagen: https://www.alianzaeditorial.es//imagenes/libros/9788420609102-cartas-a-un-joven-poeta.jpg

### 18. Fahrenheit 451

- Archivo: `assets/cover-18.jpg`
- Dimensiones incluidas: 552 × 849 px. Proporción ancho/alto: 0.6502.
- Dimensiones de la fuente registrada: 552 × 849 px.
- Página de procedencia: https://www.planetadelibros.com/libro-fahrenheit-451/298205
- URL original de imagen: https://imagessl5.casadellibro.com/a/l/s7/71/9788445006771.webp

### 19. Ubik

- Archivo: `assets/cover-19.jpg`
- Dimensiones incluidas: 552 × 844 px. Proporción ancho/alto: 0.6540.
- Dimensiones de la fuente registrada: 552 × 844 px.
- Página de procedencia: https://www.planetadelibros.com/libro-ubik/306644?soporte=428201
- URL original de imagen: https://imagessl5.casadellibro.com/a/l/s7/55/9788445021255.webp

### 20. A sangre y fuego

- Archivo: `assets/cover-20.jpg`
- Dimensiones incluidas: 552 × 745 px. Proporción ancho/alto: 0.7409.
- Dimensiones de la fuente registrada: 552 × 745 px.
- Página de procedencia: https://www.planetadelibros.com/libro-a-sangre-y-fuego/414837
- URL original de imagen: https://imagessl5.casadellibro.com/a/l/s7/74/9788410378674.webp

### 21. Cándido

- Archivo: `assets/cover-21.jpg`
- Dimensiones incluidas: 552 × 848 px. Proporción ancho/alto: 0.6509.
- Dimensiones de la fuente registrada: 552 × 848 px.
- Página de procedencia: https://www.planetadelibros.com/libro-candido-o-el-optimismo/214496
- URL original de imagen: https://imagessl5.casadellibro.com/a/l/s7/17/9788467048117.webp

### 22. Mil cosas

- Archivo: `assets/cover-22.jpg`
- Dimensiones incluidas: 135 × 212 px. Proporción ancho/alto: 0.6368.
- Dimensiones de la fuente registrada: 135 × 212 px.
- Página de procedencia: https://oceano.mx/ficha-libro.aspx?id=27259
- URL original de imagen: https://oceano.mx/img/obra/ficha/27259.jpg

### 23. El viejo y el mar

- Archivo: `assets/cover-23.jpg`
- Dimensiones incluidas: 250 × 386 px. Proporción ancho/alto: 0.6477.
- Dimensiones de la fuente registrada: 250 × 386 px.
- Página de procedencia: https://www.penguinlibros.com/es/libros-clasicos/364281-libro-el-viejo-y-el-mar-9788426432414
- URL original de imagen: https://www.penguinlibros.com/es/4895347-home_default/el-viejo-y-el-mar.jpg

## 3. Decoración botánica

- Archivo: `assets/botanical.webp`.
- Dimensiones: 1536 × 1024 px; proporción 3:2.
- Origen: generada con IA para este sitio; no tiene URL editorial de origen.
- Descripción: grabado botánico verde apagado, ramas y hojas de olivo/salvia con pequeñas flores crema, papel marfil y espacio vacío hacia la izquierda.
- Original generado: PNG de 1536 × 1024 px. La web usa su conversión RGB a WebP con calidad 87. Se incluye el WebP exacto publicado; no hace falta regenerarlo.
- Prompt utilizado: “Delicate old botanical engraving of olive/sage leafy branches with tiny cream blossoms, warm ivory paper background #f6f3eb, muted forest-green fine ink lines, sparse composition mostly whitespace, leafy sprigs on right edge, lower-left mostly empty. No text, books, UI, border, or watermark.”
- No se repite por todo el documento; aparece solo en la portada.

## 4. Favicon

SVG incorporado en el `<head>`; no requiere archivo adicional. Fondo verde oscuro, esquinas redondeadas y letra J crema. Código decodificado:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#293c31"/><text x="16" y="23" text-anchor="middle" font-family="Georgia,serif" font-size="24" fill="#f6f3eb">J</text></svg>
```

# ESTRUCTURA

## 1. Archivos y directorios de entrega

| Ruta | Función |
|---|---|
| `index.html` | Documento original; listo en la raíz de GitHub Pages. |
| `style.css` | Hoja original completa. |
| `app.js` | Datos y comportamiento originales. |
| `assets/cover-01.jpg` … `assets/cover-23.jpg` | 23 imágenes en el orden del catálogo. |
| `assets/botanical.webp` | Decoración de portada. |
| `.nojekyll` | Archivo vacío añadido para publicación estática. |
| `README.md` | Pasos de publicación y descripción de archivos. |
| `documentacion/RECONSTRUCCION_COMPLETA.md` | Este documento. |
| `documentacion/libros.json` | Catálogo exportado, informativo. |
| `documentacion/imagenes.json` | Fuentes de imágenes y dimensiones, informativo. |
| `documentacion/SHA256SUMS.txt` | Huellas de integridad de archivos de ejecución. |

En Sites, los archivos web estaban dentro de `dist/`; para GitHub Pages están directamente en la raíz. La configuración de alojamiento de Sites y su historial Git no se incluyen porque no se necesitan. No hay claves, contraseñas ni credenciales que trasladar.

## 2. Árbol semántico y puntos de montaje

- `body > a.skip`: salto al contenido.
- `header.header`: marca y `nav`.
- `main > section#inicio.hero`: portada.
- `main > section#jardin.garden`: título, filtros, `div#rounds`, estado accesible.
- `#rounds > section.round[data-round="1|2|3"]`: un encabezado y una `div.book-grid` por ronda.
- `.book-grid > article.book`: imagen y metadatos. Todos los libros son hijos directos de la cuadrícula; no hay agrupadores intermedios.
- `main > section#autores.directory`: `div.directory-heading` y `div#author-list.author-list`.
- `main > section#miembros.directory.members-section`: encabezado y `div#member-list.member-list`.
- `main > div.summary`: resumen.
- `footer`: frase y nombre pequeño.

Cada `.book` contiene `div.cover-space > img`, `h4`, `p.author`, `p.meta > span + span`. Cada `.author-entry` contiene `h3 + p`. Cada `.member` contiene `h3 + ul > li`.

## 3. Lógica de presentación y comportamiento

1. `app.js` se carga con `defer`, después de analizar el HTML.
2. El array `books` se transforma de tuplas a objetos con `title`, `authors`, `member`, `round`, `turn`, `cover`.
3. El nombre de imagen se deriva del índice: `assets/cover-01.jpg` hasta `assets/cover-23.jpg`.
4. Un bucle recorre las rondas 1, 2 y 3. Filtra el catálogo por ronda y conserva el orden de los datos. Crea un encabezado y una cuadrícula por ronda.
5. Todas las portadas están presentes desde el montaje. Se cargan con `loading="lazy"` y `decoding="async"`; el navegador puede descargar las lejanas al acercarse a ellas.
6. Autores: se aplanan los arrays de autores, se eliminan duplicados con `Set`, se ordenan por nombre completo en español y se asocian títulos. Si hubiera varias obras de un autor se separarían con « · ».
7. Miembros: orden fijo Toni, Mateo, Fernando, Alex, Carba, Alberto, Simón, David, Carlos. Sus listas se extraen de `books` en el orden global.
8. Un clic en un filtro actualiza `aria-pressed` de los cuatro botones. Usa el atributo `hidden` para ocultar rondas no seleccionadas. `[hidden]` tiene `display:none!important`.
9. El filtro solo afecta a la galería. Autores, miembros y resumen siguen representando el archivo completo. No hay cambio de ruta, petición remota, persistencia del filtro ni recarga de la página. Al recargar vuelve a «Todos».
10. Un clic en la marca o el menú desplaza al ancla correspondiente con desplazamiento suave y `scroll-padding-top:30px`. No abre nuevas páginas.
11. **Un clic en una portada no hace nada**: no hay enlace, modal, zoom ni ficha ampliada. El hover de cualquier parte de la ficha mueve su portada 4 px hacia arriba y ajusta la sombra en .25 s con `ease`.
12. Los enlaces del menú muestran una línea inferior al pasar el ratón. Los filtros cambian el fondo al pasar el ratón. No hay animaciones de entrada, parallax ni transición al filtrar.
13. Accesibilidad: `lang=es`, estructura de encabezados, navegación etiquetada, `aria-pressed`, estado `aria-live=polite`, portadas con alt «Portada de TÍTULO», botánica con alt vacío y `aria-hidden=true`, contorno de foco y salto al contenido.
14. La galería y los índices se generan con JavaScript. Sin JavaScript, quedan la portada y textos fijos pero no se generan esas listas; no existe fallback `noscript` en el original.
15. Al final hay una integración opcional de solo lectura con `document.modelContext.registerTool`. Registra `read_reading_archive`, devuelve los datos sin `cover` y rechaza parámetros no vacíos. No crea contenido ni se conecta a Sites. Si la API no existe se ignora; los errores de registro también se ignoran. Se conserva por fidelidad. Puede eliminarse sin cambiar el sitio visible.

## 4. Tecnologías y dependencias

HTML5 + CSS + JavaScript del navegador. No hay React/JSX, componentes de framework, Tailwind, Bootstrap, shadcn, Vite, Next, Node en producción, `package.json`, paquetes npm ni proceso de compilación. Las funciones equivalentes a componentes son `el()` y `card()` y los bucles de montaje.

No hay backend, base de datos, autenticación, cuentas, formularios, almacenamiento local, cookies propias, analítica propia, llamadas `fetch`, servicios de IA en ejecución ni APIs externas. Los archivos se sirven como estáticos. La infraestructura de alojamiento puede tener sus propios registros; no forman parte del código exportado.

Las únicas descargas necesarias del navegador son HTML, CSS, JS y los archivos locales de imágenes; el favicon es inline. Fuentes de sistema. No se necesitan las URLs antiguas de ChatGPT para ejecutar la copia.

# CÓDIGO

Los siguientes bloques son el contenido íntegro de los tres archivos originales, sin reconstrucción. El CSS conserva su formato compacto. En el ZIP están como archivos editables independientes.

## index.html

```html
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#f6f3eb"><meta name="description" content="El jardín de la lectura. Algunos nos encantaron, otros no tanto.">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20rx%3D%227%22%20fill%3D%22%23293c31%22/%3E%3Ctext%20x%3D%2216%22%20y%3D%2223%22%20text-anchor%3D%22middle%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2224%22%20fill%3D%22%23f6f3eb%22%3EJ%3C/text%3E%3C/svg%3E"><title>El jardín de la lectura</title>
<link rel="stylesheet" href="style.css"><script src="app.js" defer></script>
</head>
<body>
<a class="skip" href="#jardin">Ir a los libros</a>
<header class="header"><a class="wordmark" href="#inicio">El jardín <i>de la lectura</i></a><nav aria-label="Navegación principal"><a href="#jardin">Nuestro jardín</a><a href="#autores">Autores</a><a href="#miembros">Miembros</a></nav></header>
<main>
<section class="hero" id="inicio"><img class="botanical" src="assets/botanical.webp" alt="" aria-hidden="true"><div class="hero-copy"><p class="eyebrow">CLUB DE LECTURA</p><h1>El jardín<br><em>de la lectura</em></h1><p class="tagline">Los libros que hemos ido leyendo juntos.</p><p class="intro">Algunos nos encantaron, otros no tanto.</p></div></section>
<section id="jardin" class="garden"><div class="section-top"><h2>Nuestro jardín</h2><div class="filters" role="group" aria-label="Filtrar lecturas por ronda"><button aria-pressed="true" data-round="all">Todos</button><button aria-pressed="false" data-round="1">Primera ronda</button><button aria-pressed="false" data-round="2">Segunda ronda</button><button aria-pressed="false" data-round="3">Tercera ronda</button></div></div><div id="rounds"></div><p class="sr-only" id="filter-status" aria-live="polite"></p></section>
<section id="autores" class="directory"><div class="directory-heading"><p class="eyebrow">ÍNDICE LITERARIO</p><h2>Autores</h2></div><div id="author-list" class="author-list"></div></section>
<section id="miembros" class="directory members-section"><div class="directory-heading"><p class="eyebrow">LECTURAS COMPARTIDAS</p><h2>Miembros</h2></div><div id="member-list" class="member-list"></div></section>
<div class="summary" aria-label="Resumen del club"><p><strong>20</strong> turnos de elección</p><p><strong>23</strong> obras o textos</p><p><strong>9</strong> miembros que han realizado propuestas</p></div>
</main>
<footer><p>El jardín seguirá creciendo.</p><small>El jardín de la lectura</small></footer>
</body></html>

```

## style.css

```css
:root{--paper:#f6f3eb;--ink:#293c31;--muted:#6c7065;--line:#dcded2;--green:#3e5642;--soft:#e9ecdf}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:30px}body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.55}a{color:inherit;text-decoration:none}button{font:inherit}h1,h2,h3,p{margin:0}h1,h2,h3,.wordmark{font-family:Georgia,'Times New Roman',serif;font-weight:400}header,main,footer{max-width:1440px;margin:auto;padding-left:6%;padding-right:6%}.header{display:flex;align-items:center;justify-content:space-between;min-height:110px;gap:30px}.wordmark{font-size:21px;line-height:1.2}.wordmark i{display:block;font-size:16px}.header nav{display:flex;gap:36px;font-size:14px}.header nav a{padding:8px 0;border-bottom:1px solid transparent}.header nav a:hover{border-color:var(--ink)}.hero{position:relative;isolation:isolate;min-height:440px;display:flex;align-items:center;border-top:1px solid var(--line);overflow:hidden}.hero-copy{position:relative;z-index:1;padding:54px 0 66px}.eyebrow{font-size:12px;letter-spacing:.2em;line-height:1.5;color:var(--muted);margin-bottom:20px}h1{font-size:clamp(48px,5.7vw,82px);letter-spacing:-.045em;line-height:1.04}h1 em{font-weight:400}h2{font-size:38px;letter-spacing:-.035em;line-height:1.2}.tagline{font-family:Georgia,'Times New Roman',serif;font-size:21px;margin-top:27px}.intro{font-size:14px;color:var(--muted);margin-top:8px}.botanical{position:absolute;right:-7%;top:-5%;width:66%;height:110%;object-fit:cover;mix-blend-mode:multiply;z-index:0;opacity:.73;pointer-events:none}.garden{padding-top:26px}.section-top{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:25px 0 31px;border-bottom:1px solid var(--line)}.filters{display:flex;gap:6px;flex-wrap:wrap}.filters button{font-size:14px;cursor:pointer;background:none;color:var(--muted);border:1px solid transparent;border-radius:30px;padding:9px 16px}.filters button:hover{color:var(--ink);background:var(--soft)}.filters button[aria-pressed=true]{background:var(--ink);color:var(--paper)}.round{padding-top:35px;padding-bottom:35px}.round-heading{display:flex;align-items:center;gap:17px;margin-bottom:30px}.round-heading h3{font-size:25px}.round-heading .numeral{font-family:Georgia,serif;font-size:15px;color:#778372;border:1px solid #ccd2c3;width:33px;height:33px;display:grid;place-items:center;border-radius:50%}.round-heading span:last-child{margin-left:auto;font-size:12px;color:var(--muted);letter-spacing:.05em}.book-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));column-gap:38px;row-gap:41px}.book{min-width:0}.cover-space{height:285px;display:flex;justify-content:center;align-items:flex-end;padding:10px 5px 17px;background:rgba(230,231,218,.3);margin-bottom:17px}.cover-space img{display:block;max-width:94%;max-height:100%;width:auto;height:auto;object-fit:contain;box-shadow:3px 5px 9px #28302120;transition:transform .25s ease,box-shadow .25s ease}.book:hover .cover-space img{transform:translateY(-4px);box-shadow:4px 9px 13px #28302125}.book h4{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:20px;line-height:1.25;margin:0 0 7px;letter-spacing:-.02em}.book .author{font-size:14px;line-height:1.5;color:#666b61}.book .meta{font-size:12px;line-height:1.55;color:#71766b;margin-top:10px}.book .meta span{display:block}.selection{grid-column:1/-1;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:23px 0 25px;margin:2px 0}.selection-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:23px;gap:20px}.selection-head h4{font-family:Georgia,serif;font-size:21px;font-weight:400;margin:0}.selection-head p{font-size:12px;color:var(--muted)}.selection .book-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.directory{border-top:1px solid var(--line);padding-top:60px;margin-top:40px;display:grid;grid-template-columns:1fr 3fr;gap:38px}.directory-heading .eyebrow{margin-bottom:12px}.author-list{display:grid;grid-template-columns:1fr 1fr;gap:0 40px}.author-entry{padding:0 0 20px;margin-bottom:20px;border-bottom:1px solid var(--line)}.author-entry h3{font-size:19px;line-height:1.35;margin-bottom:5px}.author-entry p{font-size:14px;color:var(--muted)}.member-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:34px}.member h3{font-size:24px;margin-bottom:11px}.member ul{padding:0;margin:0;list-style:none}.member li{font-size:14px;color:var(--muted);margin-bottom:7px}.summary{display:flex;justify-content:center;align-items:center;gap:38px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-top:65px;padding:27px 0}.summary p{font-size:12px;color:var(--muted)}.summary strong{font-family:Georgia,serif;font-weight:400;font-size:25px;color:var(--ink);margin-right:5px}footer{text-align:center;padding-top:55px;padding-bottom:54px}footer p{font:italic 28px Georgia,serif}footer small{display:block;font-size:12px;margin-top:17px;color:var(--muted)}.skip{position:absolute;top:-100px;left:15px;background:var(--ink);color:white;padding:12px;z-index:10}.skip:focus{top:10px}:focus-visible{outline:2px solid #6d855d;outline-offset:5px}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}[hidden]{display:none!important}@media(min-width:1400px){.cover-space{height:315px}}@media(max-width:1000px){.book-grid,.selection .book-grid{column-gap:24px}.cover-space{height:240px}.section-top{align-items:flex-start;flex-direction:column}.directory{grid-template-columns:1fr;gap:30px}.directory-heading{display:flex;align-items:baseline;gap:25px}.directory-heading .eyebrow{order:2}.hero{min-height:400px}.botanical{right:-18%;width:82%;opacity:.55}}@media(max-width:650px){header,main,footer{padding-left:6%;padding-right:6%}.header{min-height:106px;flex-wrap:wrap;gap:18px;padding-top:24px;padding-bottom:20px}.wordmark{font-size:20px}.wordmark i{display:inline;font-size:20px}.header nav{width:100%;gap:26px;font-size:13px}.hero{min-height:345px}.hero-copy{padding:45px 0}.botanical{width:110%;height:110%;right:-42%;opacity:.25}h1{font-size:51px}.tagline{font-size:18px;max-width:270px}.intro{font-size:13px;max-width:260px}.eyebrow{font-size:11px}h2{font-size:32px}.garden{padding-top:10px}.section-top{padding-bottom:23px;gap:22px}.filters{gap:4px}.filters button{font-size:12px;padding:8px 11px}.book-grid,.selection .book-grid{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:20px;row-gap:30px}.cover-space{height:235px;padding:9px 3px 12px}.book h4{font-size:19px}.book .author{font-size:13px}.book .meta{font-size:12px}.round-heading{gap:12px}.round-heading h3{font-size:24px}.round-heading span:last-child{font-size:11px}.selection-head{align-items:flex-start;flex-direction:column;gap:4px}.directory{margin-top:25px;padding-top:36px}.directory-heading{display:block}.directory-heading .eyebrow{margin-bottom:12px}.author-list{grid-template-columns:1fr;gap:0}.member-list{grid-template-columns:1fr 1fr;gap:30px 24px}.summary{gap:15px;align-items:flex-start;justify-content:space-between;margin-top:45px}.summary p{font-size:12px;flex:1;max-width:130px}.summary strong{display:block;font-size:28px;margin-bottom:5px}footer p{font-size:25px}}@media(max-width:380px){.cover-space{height:200px}.filters button{padding:8px}.header nav{gap:20px}h1{font-size:45px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.cover-space img{transition:none}.book:hover .cover-space img{transform:none}}

```

## app.js

```javascript
const books = [
['Una historia ridícula',['Luis Landero'],'Toni',1,1],
['Flores para Algernon',['Daniel Keyes'],'Mateo',1,2],
['La juventud atracada',['José Ignacio Conde-Ruiz','Carlotta Conde Gasca'],'Fernando',1,3],
['El segador',['Terry Pratchett'],'Alex',1,4],
['En el camino',['Jack Kerouac'],'Carba',1,5],
['El príncipe destronado',['Miguel Delibes'],'Alberto',1,6],
['La nieta del señor Linh',['Philippe Claudel'],'Simón',1,7],
['Los mares del sur',['Manuel Vázquez Montalbán'],'David',1,8],
['Sab',['Gertrudis Gómez de Avellaneda'],'Toni',2,9],
['El terremoto en Chile',['Heinrich von Kleist'],'Mateo',2,10],
['Informe para una academia',['Franz Kafka'],'Mateo',2,10],
['¿Cuánta tierra necesita un hombre?',['Lev Tolstói'],'Mateo',2,10],
['Cadáver exquisito',['Agustina Bazterrica'],'Fernando',2,11],
['El señor de las moscas',['William Golding'],'Alex',2,12],
['Gente normal',['Sally Rooney'],'Carba',2,13],
['Atrapa al pez dorado',['David Lynch'],'Alberto',2,14],
['Cartas a un joven poeta',['Rainer Maria Rilke'],'Alberto',2,14],
['Fahrenheit 451',['Ray Bradbury'],'Carlos',2,15],
['Ubik',['Philip K. Dick'],'David',2,16],
['A sangre y fuego',['Manuel Chaves Nogales'],'Toni',3,17],
['Cándido',['Voltaire'],'Mateo',3,18],
['Mil cosas',['Juan Tallón'],'Fernando',3,19],
['El viejo y el mar',['Ernest Hemingway'],'Alex',3,20]
].map(([title,authors,member,round,turn],i)=>({title,authors,member,round,turn,cover:`assets/cover-${String(i+1).padStart(2,'0')}.jpg`}));
const names=['Primera ronda','Segunda ronda','Tercera ronda'];
function el(tag,className,text){const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node}
function card(book){const article=el('article','book');const frame=el('div','cover-space');const img=el('img');img.src=book.cover;img.alt=`Portada de ${book.title}`;img.loading='lazy';img.decoding='async';frame.append(img);article.append(frame,el('h4','',book.title),el('p','author',book.authors.join(' y ')));const meta=el('p','meta');meta.append(el('span','',`Propuesto por ${book.member}`),el('span','',names[book.round-1]));article.append(meta);return article}
for(let round=1;round<=3;round++){const section=el('section','round');section.dataset.round=round;section.setAttribute('aria-labelledby',`round-${round}`);const heading=el('div','round-heading');const h=el('h3','',names[round-1]);h.id=`round-${round}`;heading.append(el('span','numeral',['I','II','III'][round-1]),h,el('span','',`${books.filter(b=>b.round===round).length} obras o textos`));section.append(heading);const grid=el('div','book-grid');books.filter(book=>book.round===round).forEach(book=>grid.append(card(book)));section.append(grid);document.querySelector('#rounds').append(section)}
const authors=[...new Set(books.flatMap(b=>b.authors))].sort((a,b)=>a.localeCompare(b,'es'));
for(const author of authors){const entry=el('div','author-entry');entry.append(el('h3','',author),el('p','',books.filter(b=>b.authors.includes(author)).map(b=>b.title).join(' · ')));document.querySelector('#author-list').append(entry)}
for(const member of ['Toni','Mateo','Fernando','Alex','Carba','Alberto','Simón','David','Carlos']){const entry=el('div','member');entry.append(el('h3','',member));const list=el('ul');books.filter(b=>b.member===member).forEach(b=>list.append(el('li','',b.title)));entry.append(list);document.querySelector('#member-list').append(entry)}
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const value=button.dataset.round;document.querySelectorAll('.round').forEach(section=>section.hidden=value!=='all'&&section.dataset.round!==value);document.querySelector('#filter-status').textContent=value==='all'?'Se muestran todas las rondas':`Se muestra la ${names[Number(value)-1].toLowerCase()}`;}));
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'read_reading_archive',title:'Consultar el archivo de lecturas',description:'Devuelve las obras, autores, propuestas y rondas del club de lectura.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(input&&Object.keys(input).length)throw new Error('Esta consulta no admite parámetros.');return books.map(({cover,...book})=>book);}})).catch(()=>{});}catch{}}

```

# PUBLICACIÓN Y MANTENIMIENTO

## Publicar en GitHub Pages

## Publicar

1. Crea un repositorio público en GitHub, por ejemplo `el-jardin-de-la-lectura`.
2. Descomprime el ZIP. Sube **el contenido** de esta carpeta a la raíz del repositorio, conservando `assets/`. `index.html` debe quedar en la raíz, no dentro de otra carpeta.
3. Guarda los archivos en la rama `main`.
4. Abre **Settings → Pages → Build and deployment → Source → Deploy from a branch**.
5. Selecciona **main** y **/(root)** y pulsa **Save**.
6. Espera a que GitHub indique que la publicación se ha completado y abre la URL que muestre.

El archivo vacío `.nojekyll` indica que no hace falta procesar el sitio con Jekyll. Si tu explorador oculta ese archivo, puedes crearlo en GitHub con ese nombre. No subas el ZIP como único archivo: debes subir los archivos descomprimidos.

URL habitual de un repositorio de proyecto: `https://TU-USUARIO.github.io/el-jardin-de-la-lectura/`. Es un ejemplo, no una dirección ya creada. No incluye tu nombre de Sites: utiliza el nombre de tu cuenta de GitHub.

No se ha creado ningún repositorio ni se ha publicado en GitHub durante esta exportación. El Site actual sigue activo; esta copia no lo elimina.

## Abrir localmente

Abre `index.html` en un navegador con JavaScript habilitado. También puedes servir la carpeta con `python3 -m http.server 8000` y abrir `http://localhost:8000`. Python solo sirve para esa comprobación local; no es una dependencia de la web.


## Mantener y ampliar sin perder fidelidad

- Cambiar textos fijos: editar `index.html`.
- Cambiar diseño: editar `style.css`; recordar que los media queries posteriores sobrescriben reglas anteriores.
- Añadir una obra a una ronda existente: añadir una tupla al array `books`, con título, array de autores, miembro, número de ronda y turno. Guardar la portada correspondiente en `assets/`.
- Atención: los nombres de portada se calculan según posición. Insertar un libro en medio cambia el índice de los posteriores. Para una edición mínima, renombrar las imágenes posteriores de forma coherente; para una mejora futura, hacer explícita la ruta de portada en cada objeto. La exportación no modifica esta lógica original.
- Añadir una cuarta ronda: ampliar `names`, ampliar el array de romanos, cambiar el límite `round<=3`, añadir el botón con `data-round="4"` y sus datos. No hace falta rediseñar el CSS. El original no genera automáticamente los botones de nuevas rondas.
- Añadir un miembro nuevo: incorporarlo al array fijo de miembros para que aparezca en ese índice.
- Las entradas de autores y sus asociaciones se calculan automáticamente a partir de `books`.
- Los contadores de cada ronda sí se calculan automáticamente.
- Las tres cifras del resumen (20, 23 y 9) están escritas en el HTML: deben actualizarse manualmente al cambiar el catálogo, o automatizarse en una mejora posterior.
- `documentacion/libros.json` es una exportación informativa, no una fuente cargada por `app.js`: editar solo ese JSON no cambia la web.
- Las antiguas reglas `.selection` pueden eliminarse en una limpieza futura; no se usan. No restaurar bloques separados de Mateo o Alberto.
- Mantener rutas relativas `style.css`, `app.js`, `assets/...`. No convertirlas en `/assets/...`: en GitHub Pages de proyecto esa barra inicial apuntaría a la raíz del dominio y no a la del repositorio.

## Verificaciones realizadas y alcance

Se comprobó que los tres archivos de ejecución y las 24 imágenes coinciden byte a byte con el directorio original de la versión 3; que existen todas las referencias locales; que JavaScript tiene sintaxis válida; y que el montaje genera 8, 11 y 4 fichas como hijos directos de sus cuadrículas. Se comprobó también el funcionamiento del filtro de segunda ronda y la vuelta a Todas mediante un entorno DOM simulado. No equivale a una inspección visual en todos los navegadores; no se afirma haber probado esta copia en un GitHub Pages ya publicado.

No se ha borrado ni retirado el sitio de ChatGPT. No se ha creado un repositorio GitHub ni cambiado dominios. La copia es autónoma y está lista para que se publique por separado.

## Documentación de GitHub consultada

- Crear sitio: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Configurar origen de publicación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Instrucción de continuidad para otro chat

Trabaja sobre los archivos del ZIP adjunto. Es el código original completo de la versión 3 de El jardín de la lectura, no una captura que haya que reinterpretar. Publica una web estática en GitHub Pages conservando el diseño y todas las imágenes locales. Las rondas deben tener una cuadrícula continua con 8, 11 y 4 obras; no reintroduzcas bloques separados de selección. No añadas funciones sociales ni backend. Lee este documento para cualquier dato de contenido, diseño o procedencia de imágenes. Los JSON de documentación son informativos; la fuente de datos de ejecución es `app.js`.
