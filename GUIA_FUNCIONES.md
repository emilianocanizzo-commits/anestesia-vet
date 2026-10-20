# Anestesia Vet 3.21.5

Actualización de la base completa Anestesia Vet 3.20, localizada y verificada frente a la copia preparada para publicar. Mantiene el archivo de pacientes, múltiples anestesias, IndexedDB, formularios y autoguardado, auditoría y deshacer, verificaciones del equipo, evaluaciones, medicamentos, fluidos, ventilación, recuperación, dolor, CSV Berry Pet, gráfico único, informes, cámara individual anterior, perfiles previos y temas claro/oscuro.

## Analgesia simultánea

En el primer selector, **CRI + bloqueo** muestra los controles de ambos componentes dentro del mismo plan. «Nueva CRI» abre su preparación y bomba; «+ Agregar bloqueo» confirma el bloqueo. Cada componente conserva sus cálculos, horarios e historial independientes. También siguen disponibles los modos CRI, Bloqueo y Fármaco.

«Nueva CRI» abre una infusión con un medicamento. «+ Agregar medicamento a esta CRI» añade productos a la misma preparación y bomba. Para una segunda bomba creá otra CRI: tiene identificador, preparación, velocidad y estado propios. La aplicación no deduce mezclas de medicamentos antiguos ni los agrupa por tener el mismo nombre.

Ingresá dosis y unidad, concentración comercial, peso usado, volumen FINAL, diluyente y velocidad de bomba. El resumen distingue concentración final, cantidad en mg, volumen comercial y diluyente. También se puede calcular desde concentraciones finales conocidas. No hay dosis prescritas por defecto; la compatibilidad fisicoquímica y la adecuación clínica deben verificarse antes de preparar una mezcla. Ver CALCULOS.md para ecuaciones y ejemplos numéricos de prueba.

Los cambios de dosis, bomba, concentración, preparación, suspensión y reinicio son eventos nuevos con hora, motivo y profesional declarado. Cambiar la velocidad conserva la preparación y calcula las dosis que esa misma solución entregará. Una suspensión retira solamente esa infusión de las activas y mantiene el historial.

El formulario individual existente sigue registrando bolos y bloqueos aunque haya CRI activas. El botón para añadir otro medicamento al mismo bloqueo conserva su asociación sin escribir identificadores. Los volúmenes totales y por lado continúan siendo datos separados. Las tarjetas se agrupan en infusiones, bloqueos y otras administraciones.

## Decúbito y fluidoterapia

Decúbito se elige en un desplegable: Dorsal, Esternal / ventral, Lateral derecho, Lateral izquierdo u Otro. Otro permite especificar una posición diferente; su descripción se muestra en el informe mientras esté elegida esa opción. Se conservan las posiciones históricas. Se quita Pulso · amplitud del formulario e informes, manteniendo frecuencia y regularidad.

Fluidoterapia registra la solución, vía, tasa y bomba sin un selector Acción. El campo opcional de volumen de bolo registra mL; al completarlo se ocultan las tasas de mantenimiento para esa entrada. Las acciones de registros históricos se conservan internamente.

## Capturar ahora, revisar después

1. Abrí el caso y «Capturar monitor». Elegí un perfil si ya existe o guardá las fotos para calibrarlas después.
2. Usá las cuatro referencias y la guía fantasma para encuadrar. «Tomar fotografía» guarda el original y su hora en la galería sin ejecutar OCR. La cámara permanece abierta para la siguiente toma.
3. También podés importar varias fotografías desde el teléfono. Se intenta leer DateTimeOriginal de EXIF. Si no existe, la hora de captura queda desconocida: la fecha del archivo se conserva como sugerencia y no sustituye la hora clínica.
4. En «Ver galería», ordená, filtrá y seleccioná las imágenes. Elegí una representativa y calibrá sus cuatro esquinas; después marcá los números con el círculo y la cruz. Guardá el perfil y aplicalo al grupo seleccionado.
5. «Procesar pendientes» alinea y lee secuencialmente. Si no reconoce referencias suficientes, pide corregir las cuatro esquinas de esa imagen y conserva las zonas numéricas. El botón de corrección individual permite reutilizar los círculos; la calibración representativa permite definir una distribución nueva.
6. Revisá la fotografía original, hora y campos OCR. Identificá al profesional y confirmá expresamente los valores visibles. Recién entonces se agrega la medición al registro y al gráfico, en la hora de captura revisada.

La hora original, incorporación, intentos OCR, procesamiento, confirmación, modificaciones y responsable declarado quedan diferenciados. Una corrección de hora exige motivo y conserva la original. El usuario puede conservar dos mediciones a la misma hora tras revisar el posible duplicado. No se eliminan fotos por tener imágenes o valores parecidos.

Las mediciones del gráfico y de la tabla de la aplicación ofrecen acceso a la foto de origen. Los valores faltantes siguen vacíos: la galería no interpola ni fabrica parámetros. La PAM estimada de la lectura individual anterior continúa identificada como cálculo; en la galería se confirman exclusivamente los valores revisados de la fotografía.

## Alineación y «aprendizaje»

La app conserva una referencia de pantalla y sus zonas, y busca rasgos fijos en la foto siguiente. Evalúa coincidencias distribuidas, descarta las incompatibles, corrige perspectiva, escala y giros y aplica las zonas sobre el encuadre corregido. Las áreas de los números se excluyen de la referencia para que sus cambios no se confundan con el diseño fijo del monitor.

Guardar una referencia no entrena un modelo médico ni garantiza la misma distancia o ángulo físicos. Reflejos, desenfoque, una pantalla demasiado pequeña o un cambio de distribución pueden requerir ajuste manual. Los perfiles antiguos permanecen disponibles; los que fueron definidos sobre una fotografía original necesitan una nueva referencia de pantalla para el procesamiento automático por lote.

## Almacenamiento y respaldos

Las fotografías originales y las pantallas corregidas se guardan como Blob en IndexedDB; la galería usa miniaturas al abrirse y procesa una imagen por vez. Se consulta la cuota aproximada del navegador antes de almacenar y se comunica la falta de espacio. El guardado local no equivale a una copia externa; borrar datos del navegador o perder el dispositivo puede eliminarlo. La cuota y la posibilidad de persistencia dependen del navegador: [API de almacenamiento de MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API).

Para un respaldo completo descargá **ambos** archivos:

- El JSON clínico del caso o de todos los casos, desde las herramientas existentes.
- El paquete **.avphotos** desde la galería de cada caso: contiene originales, miniaturas reconstruibles, metadatos, intentos, perfiles utilizados y pantallas ajustadas. Las imágenes no se agregan al JSON clínico grande.

Al restaurar, abrí primero el caso JSON correspondiente y después restaurá su paquete de fotos. Si el identificador de caso coincide, conserva los vínculos y no duplica archivos idénticos. Si elegís asociar el paquete a otro caso, se pide confirmación, conserva procedencia y genera fotos pendientes de una nueva confirmación clínica. No reemplaza automáticamente registros de otro caso. GitHub Pages y Netlify alojan la app; no respaldan los pacientes ni las fotos en la nube.

## Publicar o actualizar

1. Exportá JSON y paquetes fotográficos antes de actualizar.
2. Descomprimí el ZIP para publicar. Subí su contenido completo a la raíz de GitHub Pages; index.html, manifest.webmanifest, sw.js, .nojekyll e icons deben conservar su relación de carpetas. No hay compilación ni claves que configurar.
3. Si ya usás la misma dirección y navegador, la actualización conserva las identidades de almacenamiento 3.20. Cerrá otras ventanas de la app, esperá el guardado y aceptá la actualización disponible desde la ayuda cuando corresponda. Verificá el encabezado 3.21.5.
4. Si cambiás de dominio, carpeta de publicación, navegador o dispositivo, exportá e importá los respaldos: el almacenamiento no se traslada por publicar el HTML en otra dirección.

La captura y la galería no necesitan conexión para guardar, cuando el navegador permite cámara y almacenamiento. La PWA requiere una primera carga completa por HTTPS para disponer de su interfaz sin conexión. El OCR conserva Tesseract local del flujo anterior y puede necesitar internet inicialmente para descargar biblioteca, modelo y motor; la galería permite seguir capturando aunque esos recursos no estén disponibles. El dictado conserva las restricciones anteriores del navegador.

## Informes y validación

Los PDF clínico y de auditoría muestran las preparaciones y cambios de CRI, los bloqueos y el gráfico único. La versión 3.21.3 añade las tablas de parámetros registrados por hora, en dos grupos para mantener su legibilidad en A4. La galería no se inserta automáticamente. Los datos detallados permanecen también en la aplicación y los respaldos.

Ver PRUEBAS.md, LIMITACIONES.md y PROTOCOLO_DISPOSITIVOS.md. Las pruebas automatizadas usan datos, imágenes y video sintéticos. Se probó el procesamiento de píxeles y la generación real de PDF; las respuestas de lectura OCR se simularon para comprobar el flujo. No se realizaron pruebas con pacientes, monitores físicos ni Xiaomi 15 Pro.
