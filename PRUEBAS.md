# Pruebas de Anestesia Vet 3.21.4

Fecha: 19 de octubre de 2026. **36 de 36 grupos aprobados**, sin excepciones JavaScript no controladas. Se probó el HTML incluido en el ZIP, identificado en INTEGRIDAD.json.

## Reiniciar ficha: 20 grupos

Se probaron las decisiones de guardar y reiniciar, reiniciar sin descarga y cancelar; generación, solicitud de descarga y contenido del JSON, conservación del caso anterior y sus fotografías, nueva identidad de caso y paciente, limpieza de datos y formularios, reinicio de la verificación del equipo, reapertura de la ficha anterior y recarga.

Se verificaron fallos de guardado/exportación/creación, cambio del caso activo y doble pulsación, y se comprobaron los bloqueos durante OCR, captura/giro y procesamiento fotográfico. Se revisaron el botón al principio y el diálogo en pantallas verticales y horizontales. Los errores simulados se usan para comprobar que no se confirme un reinicio incompleto.

## Regresión general: 16 grupos

Compilación de los 26 bloques JavaScript, conservación de los controles de la base y nueve funciones originales del OCR; migración y registros históricos, casos y borradores, PAM y parser numérico, guardado inválido, gráfico, CSV Berry, correcciones con auditoría, adjuntos, ambos informes, interfaz móvil y recarga/service worker sin conexión.

La comparación con 3.21.3 confirma que 24 de sus 25 módulos permanecen idénticos al normalizar la etiqueta de versión. El módulo de datos solo añade el control del identificador de caso esperado antes de crear una ficha. El nuevo módulo independiente contiene el botón y el diálogo. Los generadores de PDF, tablas, cálculos, cámara, calibración y galería conservan su implementación de base.

Se utilizaron datos ficticios y Chrome automatizado. Chrome canceló las descargas Blob en este entorno, también en una página vacía independiente de la app. Se validaron el evento real de descarga, su nombre y los bytes JSON producidos, y se comprobó que el JSON es aceptado por el restaurador. No se pudo verificar que el navegador terminara de escribir la descarga en disco.

No se repitieron las 83 pruebas completas de 3.21.3 ni la inspección de sus 38 páginas PDF: los cambios de esta entrega se limitan al reinicio y su control de caso. No se probó un teléfono, cámara o monitor clínico físico.
