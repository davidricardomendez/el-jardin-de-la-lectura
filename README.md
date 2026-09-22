# El jardín de la lectura — copia original para GitHub Pages

Esta carpeta contiene el código original de la versión 3 del Site, con las portadas ordenadas de forma continua por rondas: 8, 11 y 4 obras. No requiere reconstrucción ni instalación.

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

## Archivos

- `index.html`: estructura y textos fijos.
- `style.css`: CSS original completo.
- `app.js`: catálogo, generación de galerías, autores, miembros y filtros.
- `assets/`: 23 portadas JPEG y la ilustración botánica WebP.
- `documentacion/RECONSTRUCCION_COMPLETA.md`: especificación exhaustiva y código íntegro.
- `documentacion/libros.json`: copia legible del catálogo; informativa, no cargada por la web.
- `documentacion/imagenes.json`: procedencia, dimensiones y huellas de portadas.
- `documentacion/SHA256SUMS.txt`: huellas de los archivos de la web.

No hay React, paquetes npm, compilación, backend, base de datos, APIs ni fuentes remotas. Las rutas de recursos son relativas, aptas para un sitio publicado en una subcarpeta de GitHub Pages.

La web conserva una integración opcional de solo lectura con `document.modelContext`. Se detecta antes de usarla y no necesita ChatGPT ni conexión a Sites; en navegadores sin soporte se omite. Puede quitarse la última línea de `app.js` sin cambiar la apariencia ni los filtros.

## Documentación oficial de publicación

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Imágenes

Se incluyen los archivos exactos utilizados, no enlaces remotos necesarios para funcionar. Las portadas provienen de editoriales y librerías; el manifiesto identifica su procedencia, pero no documenta una licencia abierta. No se asigna una licencia abierta a esas imágenes. La ilustración botánica se generó para este proyecto. Consulta la guía para las tres particularidades de títulos/ediciones.
