# Actualización 3.23

Consultá LEEME.md para las modalidades Lite/Completo y los informes 3.23. Las funciones de base descritas a continuación se conservan.

# Protocolo pendiente de verificación física

Fecha de preparación: 19 de octubre de 2026. Estas pruebas están preparadas y **no fueron ejecutadas** en dispositivos físicos durante esta entrega. Usar un caso ficticio sin pacientes identificables.

## Dispositivos y condiciones

Anotar modelo, memoria disponible, sistema, navegador, versión, modo instalado o navegador y dirección usada. Repetir en Xiaomi 15 Pro, otro Android, tablet y computadora. Registrar modelo de monitor y distribución de parámetros. Probar luz habitual, luz intensa, habitación más oscura y reflejos; conservar fotos fallidas sin datos personales para análisis.

## Actualización e integridad

1. Crear un caso ficticio 3.20 con medicaciones, bloqueo, ventilación, CSV, eventos y correcciones. Descargar JSON.
2. Actualizar en la misma dirección. Comprobar pacientes, varias anestesias, borradores, verificaciones, auditoría, deshacer y perfiles anteriores. Comparar los valores con el respaldo; documentar diferencias.
3. Crear una CRI y un bloqueo con productos ficticios. Agregar otra CRI independiente, un bolo, cambio de bomba, suspensión y reinicio. Comprobar qué sigue activo y que cada cambio tenga hora y responsable.

## Cálculos

Utilizar un cálculo independiente. Ejemplo ficticio: 20 kg, 2 mg/kg/h, bomba 5 mL/h, 50 mL finales, producto 20 mg/mL: 40 mg/h; 8 mg/mL finales; 400 mg; 20 mL de producto y 30 mL de diluyente. Repetir con µg/kg/min, µg/kg/h, mg/kg/min, porcentaje p/v y una mezcla de dos productos. Provocar volumen de productos mayor al volumen final y verificar rechazo. Una dosis mg/kg no debe aceptarse como CRI temporal.

## Cámara y calibración

1. Verificar permisos y mensajes de cámara no disponible. Capturar en vertical y horizontal; girar foto, enfocar números pequeños y confirmar que el disparador sea accesible sin taparlos.
2. Marcar cuatro esquinas de una foto representativa, colocar círculos y comprobar recorte ampliado, zoom, desplazamiento y cancelación.
3. Capturar 5, 20, 50 y 100 fotos sin OCR. Comprobar contador, hora original, confirmación breve y continuidad de cámara. Registrar duración de captura y fallos de almacenamiento.
4. Cambiar moderadamente distancia y perspectiva, girar 90° y repetir. Verificar alineación correcta o petición de ajuste; registrar falsas coincidencias. Probar desenfoque, pantalla cortada y otro monitor: no deben producir valores confirmados automáticamente.
5. Desactivar la red tras cargar la app. Guardar nuevas fotos, cerrar y reabrir el navegador y comprobar originales y miniaturas. Si faltan recursos OCR, las capturas deben permanecer pendientes.

## Lotes, confirmación y tiempos

Importar fotos con EXIF, sin EXIF y con hora dudosa. Procesar un lote, detenerlo y reanudarlo. Corregir solamente fotos problemáticas. Modificar el perfil mientras se procesa debe quedar bloqueado. Cambiar de caso no debe enviar valores al paciente nuevo.

Revisar cada parámetro contra la fotografía visible; dejar vacíos los ausentes. Confirmar fuera de orden, corregir la hora con motivo y comprobar gráfico cronológico único junto a mediciones manuales y CSV. Reprocesar y reconfirmar la misma foto debe corregir su registro vinculado, sin crear una fila nueva. Corregir luego desde el editor y consultar foto y auditoría.

## Respaldos e informes

Descargar JSON y .avphotos. Restaurar primero el caso y después sus fotos en un perfil de navegador de prueba. Comprobar integridad de originales, perfiles, horarios, OCR detectado, valores confirmados, correcciones y vínculos. Reimportar el mismo paquete debe evitar duplicados idénticos. Probar paquete incompleto: informar error y conservar lo ya almacenado.

Generar ambos PDF con mezcla, bloqueo y fotografías confirmadas. Revisar que figure una sola curva, dosis, concentraciones, bomba y cambios. Deben aparecer las dos tablas de parámetros por hora, completas y con encabezados repetidos al cambiar de página. Los valores deben coincidir con la app, conservando ceros, decimales, ausentes y la marca de PAM estimada. No deben insertarse automáticamente las fotos de galería. Registrar capturas de problemas, tiempos y resultado por dispositivo antes de considerar aprobada la prueba física.


## Comprobaciones adicionales de 3.22

1. En Chrome Android, cambiar pestañas largas: título visible bajo la barra y sin saltos al escribir, abrir/cerrar teclado o guardar parámetros/eventos.
2. Abrir y contraer gráfico, mediciones y herramientas; verificar que conserva datos y estado al volver al mismo caso. Consultar cursor, rangos, leyenda y tema oscuro en vertical y horizontal.
3. Abrir cámara con una foto histórica guardada; distinguir video y guía fantasma. Reiniciar, cerrar, enviar al fondo y volver: comprobar permiso, liberación de cámara y reintento. Tomar varias fotos y confirmar que quedan pendientes sin OCR.
4. Elegir, crear, editar y restablecer perfiles; verificar que conserva versiones y fotos previas. Cambiar de paciente durante una selección lenta y comprobar que no aparece la referencia anterior.
5. Descargar los informes completo, colega, tutor y auditoría en el teléfono; comprobar apertura, legibilidad y contenido. Exportar y restaurar un respaldo de prueba con JSON y .avphotos antes de usar datos reales.


## Pendiente en dispositivo físico · 3.23

1. En Chrome Android, crear un caso Lite y otro Completo; cambiar de modo con datos y borradores, cerrar/reabrir y comprobar archivo/pacientes correctos.
2. Probar cuatro etapas, seis acciones, teclado, vertical/horizontal y tema oscuro, sin desbordes ni saltos.
3. Capturar varias fotos con la cámara física; guía fantasma, calibración reutilizable, OCR y galería; comprobar datos antes de confirmar, perfilar otro monitor y reabrir el caso.
4. Abrir seguridad, guardar varios checks, cerrar y volver: pendientes/fallidos y excepción documentada deben conservarse.
5. Con una ficha ficticia, descargar y abrir los tres PDF desde cada modo, con logo/firma autorizada si se usa. Restaurar JSON y paquete de fotos de prueba antes de trabajar con datos reales.
