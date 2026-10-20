# Pruebas de Anestesia Vet 3.21.5

Fecha: 20 de octubre de 2026. **68 de 68 grupos aprobados**, sin excepciones JavaScript no controladas. Se probó el HTML distribuido, identificado por su SHA-256 en INTEGRIDAD.json.

## Formularios y analgesia combinada: 22 grupos

Compilación de los 26 bloques JavaScript; opción CRI + bloqueo con ambos controles visibles, cálculo bilateral total y por lado, administración separada, asociación de medicamentos del bloqueo y preparación independiente de la CRI. Se probaron el editor real de CRI, sus dosis, el cambio de bomba y la suspensión sin alterar el bloqueo, los dos informes, los modos individuales, guardado JSON, recarga y cambio de caso.

Se comprobaron las posiciones del desplegable Decúbito y la opción Otro, la conservación de posiciones desconocidas antiguas, la ocultación en el informe de la descripción anterior al cambiar Otro por un decúbito estándar, la ausencia de Pulso · amplitud en formulario e informes y su conservación en respaldos históricos. Para fluidoterapia: selector Acción oculto, mantenimiento calculado por peso, recuperación de borradores antiguos sin arrastrar una suspensión, bolo positivo en mL sin tasas de mantenimiento, rechazo de cero/negativos/texto, corrección y detalles de solo lectura sin modificar históricos.

Se inspeccionaron seis capturas de los formularios nuevos en tamaños vertical 390 × 844 y horizontal 844 × 390, sin desbordamiento general.

## Bloqueos bilaterales: 23 grupos

Se repitió la suite dimensional de 3.21.2 sobre el HTML de esta entrega: dosis total o por lado, bilateral y unilateral, mg/kg y mL/kg, concentración porcentual y coma decimal, datos insuficientes, recalculado por peso/dosis/concentración, volúmenes administrados separados, guardado, correcciones y auditoría, detalles, reutilización histórica, borradores antiguos, exportación, recarga e interfaz táctil.

## Regresión general: 16 grupos

Conservación de los controles de la base y nueve funciones originales del OCR; migración y registros históricos, casos y borradores, PAM y parser numérico, rechazo de una mutación inválida, gráfico, CSV Berry, correcciones con auditoría, adjuntos, ambos informes, interfaz móvil y recarga/service worker sin conexión.

## PDF reales: 7 grupos

Se generaron los PDF clínico y de auditoría con el exportador real de la app. Se verificaron CRI y bloqueo separados, decúbito, datos de fluidoterapia, ausencia de Pulso · amplitud y del campo Acción de fluidos, y conservación de las tablas numéricas. Se extrajo el texto y se inspeccionaron visualmente las páginas relevantes renderizadas. Los datos históricos ocultos se conservaron en el JSON.

## Alcance

La comparación con 3.21.4 conserva idénticos 17 de sus 26 módulos JavaScript al normalizar la etiqueta de versión. Los otros nueve contienen las adaptaciones de formularios, presentación y selección combinada. El generador directo de PDF, los datos e historial, el reinicio, la cámara, alineación y galería mantienen sus módulos sin modificaciones. Los nueve algoritmos originales de OCR también se compararon literalmente.

Las pruebas usan Chrome y datos ficticios. La suite focal de seis grupos sobre el parche combinado aislado se utilizó durante el desarrollo y no se suma al total de esta entrega. No se repitió la suite completa del botón Reiniciar ficha ni la galería y OCR de versiones anteriores, cuyos módulos se conservaron. No se probó un teléfono, cámara o monitor clínico físico. Estas pruebas de interfaz y consistencia de registros no establecen exactitud clínica del OCR ni prescriben dosis.
