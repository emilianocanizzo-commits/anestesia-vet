# Anestesia Vet 3.23

Actualización del 24 de octubre de 2026 sobre la versión 3.22. El paquete contiene una sola aplicación estática, lista para actualizar el mismo sitio de GitHub Pages.

## Elegir modalidad

Al iniciar una nueva anestesia aparecen dos tarjetas: **Modo Completo** y **Modo Lite**. La elección se guarda dentro de esa anestesia. Desde esa pantalla también se puede entrar directamente a **Pacientes e historial**.

Los casos históricos sin modalidad se abren en Completo, sin volver a pedir la elección. Cada caso conserva su propia modalidad al cerrarlo, reabrirlo o recargar la app. El botón **Cambiar modo de trabajo**, visible en el encabezado, permite cambiar en cualquier momento compatible con la operación en curso. Una lectura o captura fotográfica debe terminar antes de cambiar. La elección y los cambios quedan en el historial del caso.

Los dos modos usan el mismo caso, paciente, IndexedDB, autoguardado y formularios. Cambiar de modo no crea otra anestesia, administra medicamentos ni completa verificaciones.

## Modo Lite

Cuatro etapas:

1. **Paciente y evaluación:** identificación, peso, procedimiento, profesionales, ASA, antecedentes, examen y signos esenciales. Los botones «Otros datos del paciente» y «Otros datos de evaluación» permiten ampliar los mismos formularios.
2. **Plan anestésico:** premedicación, inducción, analgesia/CRI/bloqueos y fluidoterapia en tarjetas desplegables. Un acceso abre el mantenimiento en su formulario original. Se conservan los cálculos y las administraciones sucesivas.
3. **Monitorización:** panel principal con seis acciones grandes, los ocho últimos parámetros con sus propias horas, mantenimiento confirmado, CRI activas, fluidoterapia y modificaciones documentadas. Debajo permanecen los formularios, ventilación, gráfico, tabla, cámara guiada, OCR, calibración y galería.
4. **Recuperación e informe:** recuperación, escalas de dolor, medicación posoperatoria, observaciones e informes PDF.

Las acciones rápidas son **Registrar medición**, **Agregar medicamento**, **Agregar evento**, **Abrir cámara**, **Modificar CRI** y **Ver gráfico**. Los valores anteriores conservan su hora y antigüedad; una PAM calculada se identifica como estimada.

## Modo Completo y verificaciones

Completo conserva las etapas y formularios clínicos de 3.22. El acceso secundario **Ver verificaciones de seguridad** abre los controles originales de equipo, preinducción, pausa y checklist general, también desde Lite.

Ocultar un checklist no sustituye su realización. Ningún punto se aprueba automáticamente. Los estados pendientes, fallidos y realizados se conservan al cambiar de modo. Para registrar el inicio anestésico en Lite se mantiene el control del equipo: si está pendiente o no aprobado se abre su verificación. El acceso excepcional existente requiere documentar el motivo y confirmar; no convierte el equipo en aprobado.

## Informes independientes

En ambos modos se elige **Informe completo** o **Informe resumido**, con destinatario **Colega veterinario** o **Propietario o tutor**. La auditoría adicional sigue disponible. Cambiar modalidad no cambia el formato de informe elegido.

El completo conserva la información efectivamente registrada y las verificaciones con sus estados reales. Los resúmenes omiten checklists, curvas y mediciones individuales. No se deducen resultados normales ni se inventan datos ausentes.

En **Veterinaria y firma del informe** se puede guardar un centro, su logotipo y una firma digitalizada para esta anestesia. La firma solo se incorpora al autorizar expresamente su uso e indicar al profesional firmante. Es una imagen con autorización declarada, sin autenticación criptográfica. Sin imágenes cargadas no se generan logotipos ni firmas. Al cambiar el centro, las imágenes asociadas al centro anterior no aparecen como propias del nuevo. El respaldo JSON conserva los recursos guardados y su autorización.

## Funciones conservadas

OCR y PAM, cámara y guía fantasma, captura horizontal adaptable, giros y encuadre, calibración con esquinas y círculo con cruz, perfiles versionados, galería con Blob/IndexedDB, medicamentos y CRI de una o varias bombas, mezclas, bloqueos bilaterales, fluidoterapia, ventilación, eventos, gráficos y tabla numérica, recuperación/dolor, historial, auditoría, deshacer, borradores, JSON y Reiniciar ficha con opción de guardar.

La galería se respalda además con su paquete de fotografías `.avphotos`, como en 3.22. Conservar un JSON no sustituye ese respaldo de la galería.

## Actualizar el mismo sitio

1. Guardar una copia JSON y el paquete de fotografías de los casos que se quieran respaldar.
2. Descomprimir `Anestesia_Vet_3_23_GitHub_Pages.zip`.
3. Subir el contenido descomprimido a la raíz del mismo repositorio, reemplazando los archivos anteriores. Incluir `index.html`, `sw.js`, `manifest.webmanifest`, `icons/` y `.nojekyll`. No subir únicamente el ZIP.
4. Confirmar los cambios en la rama que ya publica GitHub Pages y esperar que termine el despliegue.
5. Abrir la misma dirección, verificar **Anestesia Vet 3.23** y reabrir un caso de prueba. Si la app instalada ofrece una actualización en «Uso y conexión», aplicarla cuando los cambios estén guardados. No borrar datos del navegador para actualizar.

No se publicó automáticamente este paquete. Mantener la misma dirección y navegador permite acceder al mismo almacenamiento local. Cambiar de dirección, navegador o dispositivo requiere restaurar los respaldos correspondientes.

## Sin conexión y pruebas

Después de una primera carga completa, el service worker conserva la aplicación para reabrirla sin red. Se probó una recarga realmente sin conexión bajo una subcarpeta equivalente a GitHub Pages, con persistencia de Lite, cambios de modo, una medición y los tres PDF. El OCR o dictado que dependa de recursos externos conserva sus requisitos anteriores.

Consultar `PRUEBAS.md` e `INTEGRIDAD.json` para el detalle verificable. Las pruebas móviles usan tamaños y entrada táctil simulados; no se ejecutaron en un teléfono Android físico ni se validó la exactitud clínica del OCR sobre un monitor real.
