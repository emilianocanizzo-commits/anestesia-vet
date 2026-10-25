# Pruebas de Anestesia Vet 3.23

Fecha: 24 de octubre de 2026. Datos clínicos ficticios. Resultado final: **308 de 308 grupos aprobados**, sin errores JavaScript no controlados. Todos corresponden al mismo archivo `index.html`, SHA-256 `51574464e31be87e16745369c77a225c05b09bbb75c55c026a9b02e1198818f5`, sin cambios durante cada suite.

## Nueva modalidad

- 25 grupos: selección inicial Lite/Completo, archivo desde el selector, persistencia y recarga, cuatro etapas, datos esenciales/ampliados, acciones táctiles, medicación sucesiva, PAM estimada, parámetros, eventos, ventilación, galería, acceso OCR, CRI, bloqueo bilateral, fluidos, recuperación, seguridad pendiente, excepción documentada, inicio, cambios de modo, nueve borradores, registros/horarios/IDs, PDF elegido, JSON histórico y protección ante otro caso activo.
- 19 grupos de revisión independiente: conservación clínica entre casos y modos, historial/importación/recuperación, almacenamiento compartido, seguridad, modal conservado al guardar checklist y fallo de guardado del modo sin mensaje de éxito falso.
- 8 grupos de PWA/offline y Microsoft Edge: caché bajo `/anestesia-vet/`, recarga con red desconectada, borradores, cambios de modo, registro/PAM, los tres PDF sin conexión, retorno de red y persistencia en Edge.
- 26 grupos de informes: seis PDF reales (Completo y Lite por cada uno de los tres formatos), datos confirmados, ausencia de checklists/curvas/mediciones individuales en resúmenes, contenido independiente del modo, datos ausentes, logotipo, firma autorizada y revocable, cambio de centro, JSON, recarga y carga de imagen interrumpida por cambio de paciente.

## Regresión

154 grupos del flujo Completo: general/OCR/PAM/JSON/CSV/migración (16), bloqueos bilaterales (23), CRI (24), formularios y fluidos (22), reinicio (20), cámara/calibración/galería (20), carreras asíncronas de cámara/casos (10), gráficos (19).

76 grupos adicionales ejecutados en Lite: cámara/calibración/galería (20), carreras de cámara (10), CRI (24), formularios/fluidos/bloqueos (22). Se selecciona realmente Lite y se abren los datos secundarios con su botón, sin forzar estilos ni eliminar aserciones clínicas.

## Revisión visual y límites

Se revisaron controles en claro y oscuro, teléfono vertical 390×844, horizontal 844×390, tablet 1024×768 y escritorio 1440×1000. La reducción del área visible con un campo enfocado comprueba conservación del borrador y ausencia de llamadas nuevas de desplazamiento desde la app; no equivale a probar un teclado Android físico.

Se generaron seis PDF y se revisaron visualmente sus 18 páginas renderizadas, con texto nativo, tablas, encabezados, pies, gráfico completo, logotipo y firma proporcionales, sin recortes ni solapamientos detectados.

La cámara se probó con MediaStream de un canvas, JPEG, Blob e IndexedDB reales del navegador, perfiles y cambios de caso. No se utilizó una cámara física ni un monitor veterinario real. No se midió la precisión clínica del OCR. La prueba de red desconectada sí recarga el sitio servido localmente bajo una subcarpeta con su service worker; no implica que servicios externos de OCR/dictado funcionen sin red.

El ZIP se volvió a abrir y se comprobaron los hashes de todos sus archivos. No se desplegó automáticamente.
