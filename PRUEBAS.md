# Pruebas de Anestesia Vet 3.22

Fecha: 21 de octubre de 2026. **191 de 191 grupos aprobados**, sin errores JavaScript no controlados. Las suites finales identifican el HTML distribuido por SHA-256 y confirman que no cambió durante sus pruebas. Los resultados preliminares y de parches aislados no se suman al total.

## Navegación y monitorización: 20 grupos

Orden clínico de Monitorización, acciones rápidas, últimos valores con hora propia, formularios desplegables, pestañas con título visible, guardado sin saltos de la app, persistencia por caso, importación CSV y correcciones reflejadas en la tarjeta de últimos parámetros, apertura de galería con estado accesible, formularios rápidos con los nodos originales, categorías de analgesia, campo Veterinaria y fin anestésico auditado.

Se comprobaron pantallas vertical 390 × 844, horizontal 844 × 390 y tablet 1024 × 768. Se probó Chrome de escritorio y Microsoft Edge real. El cambio de altura visible con un campo enfocado simula el efecto del teclado y comprueba que la app no llama desplazamientos automáticos ni pierde el texto; no equivale a una prueba con un teclado Android físico.

## Cámara, calibración y galería: 20 grupos

20 grupos de captura y calibración verifican video MediaStream real creado desde un canvas, tres capturas JPEG con Blob e IndexedDB, separación de foto antigua/vivo/referencia, reinicio y liberación de pistas, permisos rechazados, reintento, fondo, cambio de pestaña, acceso a cuatro esquinas y círculos, nuevas versiones de perfil, edición y restablecimiento confirmados, EXIF desconocido, orientación y recarga. Otros 10 grupos introducen esperas reales en listas, Blob, importación y limpieza; comprueban que cambiar de caso/pestaña o cancelar no abre referencias tardías, que un error permite reintentar, y que no se muestran ni aplican fotos del paciente anterior. También cubren el cierre del círculo y del diálogo de nombre de perfil al cambiar de caso. Se inspeccionaron las capturas finales vertical y horizontal.

## Gráfico: 19 grupos

Bandas con escalas explícitas, valores y horas originales, leyenda, símbolos, cursor con ratón/tacto simulado/teclado, rangos y recorrido temporal, discontinuidades, eventos, inicio/fin explícitos, cambio de caso, caso vacío y registros con hora inválida. Se verificaron conservación del SVG, omisión de renderizados innecesarios, 1500 mediciones y selección visible de ventanas cortas, tema oscuro e identificadores SVG únicos entre vista previa e impresión tradicional. Se inspeccionaron capturas vertical y horizontal.

## Informes PDF: 17 grupos

Se generaron cuatro PDF reales: completo (6 páginas), colega (3), tutor (1) y auditoría (11). Se extrajo su texto nativo y se comprobaron identificaciones, tratamientos separados, fórmulas conservadas, horas propias por variable, ausencia de borradores administrados, datos faltantes, suspensión de CRI y ausencia de conclusiones de normalidad inventadas. Se inspeccionaron las 21 páginas renderizadas, tablas, encabezados repetidos, gráficos, numeración, recuperación y controles móviles/oscuros. Los resúmenes no cambian el registro clínico.

## Funciones previas

Se repitieron sobre esta distribución las suites de regresión general (16 grupos), bloqueos bilaterales (23), CRI multifármaco (24), formularios de 3.21.5 (22) y reinicio de ficha (20). Cubren migración, pacientes e historial, borradores, guardado, PAM, parser numérico, CSV, correcciones y auditoría, adjuntos, los nueve algoritmos originales del OCR, fórmulas y conversiones, dosis total/por lado, infusiones independientes y suspensión, exportación, reapertura, reinicio y conservación de fotos/perfiles. La comprobación del shell offline combina una recarga local con un entorno simulado del service worker.

Las adaptaciones de los tests previos se limitan a la etiqueta de versión, los controles de zoom sustituidos intencionalmente y abrir el nuevo desplegable fotográfico antes de interactuar con el importador CSV. Los controles clínicos y sus comprobaciones se conservan.

## Alcance físico

Las imágenes, videos, pacientes y medicamentos utilizados son ficticios. No se probó un monitor clínico, una cámara de teléfono Android ni un teclado virtual físico. Los ensayos de OCR conservan el motor y parser; para comprobar el flujo de confirmación se usan respuestas sintéticas, y estas pruebas no acreditan exactitud clínica del reconocimiento.

Chrome de este entorno canceló descargas Blob, como en las pruebas de versiones anteriores. Se verificaron el evento de descarga, nombre y contenido JSON restaurable, y los bytes reales de los cuatro PDF. No se comprobó la escritura final de una descarga en el teléfono.

El ZIP se volvió a abrir y se verificaron los hashes de todos sus archivos, los recursos de la PWA y la huella del HTML en el service worker. No se publicaron cambios en el sitio del usuario durante la preparación de esta entrega.
