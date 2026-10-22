# Anestesia Vet 3.22

Actualización de la app completa 3.21.5. Fecha: 21 de octubre de 2026. El ZIP contiene una aplicación funcional para alojamiento estático, con los datos clínicos y fotografías guardados en el dispositivo como en las versiones anteriores.

## Monitorización y navegación

- Al elegir una pestaña principal, su título queda visible debajo de la navegación fija. Las actualizaciones dentro de un formulario no vuelven a llevar la página a la barra de pestañas.
- Monitorización comienza con **Registrar parámetros**, **Agregar evento**, **Capturar monitor** y **Abrir galería**, junto a los últimos valores registrados y la hora propia de cada uno.
- Los formularios, gráfico, tabla y herramientas fotográficas se despliegan cuando se necesitan. Parámetros y eventos están antes del gráfico; ocultar una vista no elimina sus datos. Se recuerda el estado de las vistas por caso durante la sesión.
- Registrar mediciones o eventos mantiene abierto el formulario. Los formularios rápidos del panel usan los mismos controles y las mismas rutas de guardado.

## Cámara y calibración

**Nueva captura / Reiniciar cámara** cierra la sesión previa y limpia la vista temporal sin borrar las fotos, mediciones ni perfiles. La cámara en vivo se distingue de la guía fantasma guardada, que se conserva como referencia de encuadre.

En **Fotografías, galería y perfiles de monitor** quedan accesibles Seleccionar perfil, Calibrar monitor, Editar calibración y Restablecer calibración. La calibración usa las cuatro esquinas y el círculo con cruz para los números. Editar o restablecer conserva una versión anterior; reemplazar un perfil existente requiere confirmación. La referencia puede tomarse con la cámara, importarse o elegirse entre las fotos del caso.

La galería sigue guardando fotos sucesivas sin ejecutar OCR, y permite importación múltiple, procesamiento inmediato o por lote, alineación, revisión, correcciones y confirmación expresa antes de incorporar mediciones. Los horarios de captura, importación, procesamiento y confirmación permanecen separados. Una importación sin EXIF no recibe silenciosamente la hora de importación como hora de medición.

## Gráfico de tendencias

Un único componente muestra las variables en bandas, con escalas numéricas y unidades explícitas; PAS, PAM y PAD comparten la escala de presión. Los colores y símbolos son estables y la leyenda permite ocultar curvas sin borrar registros.

El cursor temporal muestra lecturas reales y su propia hora; si usa una lectura cercana, lo indica con su distancia temporal. Se puede ver toda la anestesia, ventanas de 5, 10, 15 o 30 minutos, o un período específico, recorrer el tiempo y restablecer la vista. Los segmentos respetan la continuidad visual seleccionada y los huecos de datos. No se crean mediciones intermedias.

Las marcas muestran medicamentos, CRI, fluidos, ventilación y eventos documentados. Inicio y fin se toman de horarios clínicos explícitos. El panel permite guardar el **Fin anestésico documentado**, separado de la finalización administrativa de la ficha.

## Analgesia e informes

Se mantienen **CRI + bloqueo**, las mezclas multifármaco con una bomba, las infusiones independientes, el cálculo bilateral por lado o total y los historiales. Cada categoría —Infusiones continuas, Bloqueos locorregionales y Otras administraciones— tiene acceso para agregar su técnica sin reemplazar las ya registradas.

Al generar PDF se puede elegir **Informe completo** o **Informe resumido**. El resumido ofrece **Colega veterinario** y **Propietario o tutor**. Las tres presentaciones usan el mismo registro; la auditoría anterior sigue disponible. El resumen para tutor usa datos y notas documentados y no genera indicaciones médicas ni conclusiones de normalidad. Se agrega un campo opcional **Veterinaria / centro** en Paciente.

Se conservan los pacientes e historial, IndexedDB, respaldos, reinicio con pregunta de guardado, tablas numéricas en app y PDF, decúbito desplegable y las demás funciones previas. No reaparecen la revisión documental eliminada, Pulso · amplitud ni el selector Acción de fluidoterapia.

## Actualizar en GitHub Pages

1. Descomprimí el ZIP y subí su contenido al mismo repositorio, en la raíz que ya publica la app.
2. Conservá juntos `index.html`, `sw.js`, `manifest.webmanifest`, `.nojekyll` e `icons/`, con su estructura de carpetas. No requiere compilación ni claves.
3. Confirmá los cambios y esperá el despliegue. Abrí la dirección habitual, cerrá las otras ventanas de la app y verificá el encabezado **3.22** después de actualizar.

El paquete también funciona en Netlify. Usar la misma dirección y navegador conserva el almacenamiento local. Los respaldos siguen siendo el JSON clínico y, para la galería completa, el paquete .avphotos del caso; el alojamiento web no es un respaldo de pacientes.

PRUEBAS.md describe la validación y su alcance. INFORMES.md explica las presentaciones PDF. REFERENCIAS_GRAFICO.md documenta las referencias de diseño. LIMITACIONES.md y PROTOCOLO_DISPOSITIVOS.md distinguen las pruebas automatizadas de las verificaciones físicas pendientes.
