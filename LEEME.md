# Anestesia Vet 3.21.5

Actualización de la versión completa 3.21.4, del 20 de octubre de 2026.

## Cambios de esta versión

- **CRI + bloqueo:** nueva opción en el primer selector de Analgesia. Muestra «CRI del plan» y los campos del bloqueo. «Nueva CRI» abre el editor de preparación y bomba; «+ Agregar bloqueo» registra el bloqueo. Ambos conviven en la misma ficha, con sus dosis, cálculos, horarios e historial independientes. Las CRI pueden contener varios medicamentos y el bloqueo conserva sus medicamentos asociados y su cálculo bilateral.
- **Decúbito:** desplegable con Dorsal, Esternal / ventral, Lateral derecho, Lateral izquierdo y Otro. «Otro» permite especificar una posición diferente. Las posiciones escritas en fichas anteriores se conservan.
- **Pulso · amplitud:** se quita del formulario y de los informes. Se mantienen la frecuencia y la regularidad del pulso. Un dato de amplitud ya guardado se conserva en el respaldo histórico.
- **Fluidoterapia:** se quita el selector Acción del formulario y del editor. Para mantenimiento se registran la solución, vía, tasa y bomba como antes. El volumen de bolo en mL queda como campo opcional; al completarlo se registra un bolo y se ocultan las tasas de mantenimiento para esa entrada. Las acciones de registros anteriores permanecen en sus datos históricos.

Se conservan el botón Reiniciar ficha con su pregunta de guardado, los pacientes e historial, cámara, guía fantasma, calibración, OCR, galería, tablas numéricas, gráfico, informes PDF y las demás funciones de 3.21.4.

## Actualizar en GitHub Pages

1. Descomprimí el ZIP.
2. En el mismo repositorio, usá Código → Añadir archivo → Subir archivos. Subí el contenido descomprimido, con `index.html`, `sw.js`, `manifest.webmanifest` e `icons/` en la raíz; conservá la estructura de carpetas.
3. Confirmá los cambios en la rama que publica GitHub Pages. Esperá a que termine el despliegue y abrí la app desde su dirección habitual.
4. Cerrá otras ventanas de la app y verificá que el encabezado muestre **3.21.5** después de actualizar.

El ZIP también es compatible con el alojamiento estático de Netlify. No requiere compilación. Usar la misma dirección y navegador conserva el almacenamiento local; las copias JSON y .avphotos siguen siendo las herramientas de respaldo.

Consultá PRUEBAS.md para esta entrega, GUIA_FUNCIONES.md para las funciones generales y CALCULOS.md para los cálculos.
