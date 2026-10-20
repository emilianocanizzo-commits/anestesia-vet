# Anestesia Vet 3.21.4

Actualización de la versión completa 3.21.3, del 19 de octubre de 2026.

## Reiniciar ficha

El botón **Reiniciar ficha** aparece al principio, arriba de los datos del paciente. Antes de reiniciar pregunta si querés guardar la ficha actual y ofrece:

- **Guardar copia y reiniciar:** solicita la descarga de una copia JSON restaurable de la ficha, comprueba el guardado local y abre una ficha vacía.
- **Reiniciar sin descargar:** abre una ficha vacía sin descargar una copia externa.
- **Cancelar:** conserva la ficha abierta y sus campos.

El reinicio crea un caso nuevo. Limpia los datos del paciente, evaluación, registros, medicación, fluidos, ventilación, recuperación y borradores de la ficha activa, y vuelve al control inicial del equipo. Conserva los perfiles de monitor y preferencias del dispositivo. La ficha anterior y sus fotografías permanecen en **Pacientes e historial**; no se eliminan otros pacientes ni casos.

La copia JSON contiene los datos clínicos y borradores de la ficha. Las fotografías originales de la galería permanecen en el caso anterior; para llevarlas a otro dispositivo se conserva la descarga independiente del paquete de fotografías desde la galería.

Si falla el guardado, la exportación o la creación de la ficha nueva, el reinicio no se confirma y se muestra el problema. Durante la operación se impiden dobles pulsaciones. Tampoco se reinicia durante una lectura OCR, giro/captura de fotografía o procesamiento activo de la galería.

Se conservan las tablas numéricas y el gráfico en la app y los PDF, los bloqueos bilaterales y las demás funciones de 3.21.3. La revisión documental eliminada continúa sin aparecer.

## Publicar en Netlify o GitHub Pages

1. Descomprimí el ZIP.
2. Publicá la carpeta completa, con `index.html` en la raíz junto a `sw.js`, `manifest.webmanifest`, `_headers` e `icons/`. No necesita compilación.
3. Para actualizar la instalación, conservá la misma dirección y navegador y verificá el encabezado **3.21.4** después de cargar la actualización.

Consultá PRUEBAS.md para esta entrega, GUIA_FUNCIONES.md para las funciones generales y CALCULOS.md para los cálculos.
