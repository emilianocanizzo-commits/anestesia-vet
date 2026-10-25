# Actualización 3.23

Consultá LEEME.md para las modalidades Lite/Completo y los informes 3.23. Las funciones de base descritas a continuación se conservan.

# Referencias de diseño del gráfico 3.22

Consulta: 21 de octubre de 2026. Las referencias públicas se usaron para estudiar organización y flujo de documentación, sin copiar código, imágenes, iconos ni una interfaz comercial. No se tuvo acceso a sus cuentas clínicas o implementaciones internas.

- [ADEXSIMS - Anesthesia Charting](https://www.adexsims.com/features/anesthesia-charting): presenta documentación perioperatoria con constantes, medicamentos, eventos y fluidos en una cronología común. Se tomó como referencia la relación temporal visible y la conservación del registro completo del caso.
- [VaporChart - ficha oficial del desarrollador en App Store](https://apps.apple.com/us/app/vaporchart/id6758907258): describe una cronología compartida, intervalos temporales elegibles y documentación de inicio, cambios de velocidad y suspensión de infusiones. Se tomó como referencia la consulta por períodos y las marcas diferenciadas de eventos. El sitio vaporchart.com no pudo abrirse durante esta revisión; la ficha oficial y [el sitio del desarrollador](https://briantse.com/) identifican el producto.
- [Bolus - sitio oficial](https://bolusanesthesia.com/): describe registro móvil durante el procedimiento y continuidad desde preoperatorio hasta recuperación, con exportación PDF. Se tomó como referencia que consultar tendencias requiera pocas acciones y no interrumpa la entrada clínica.
- [Philips IntelliSpace Critical Care and Anesthesia - instrucciones de uso oficiales, edición 6](https://www.documents.philips.com/assets/Instruction%20for%20Use/20250226/75ed3b5a4a724f54b022b29000fc5ca1.pdf?feed=ifu_docs_feed): las secciones A-3 y A-28 documentan el recorrido horizontal, el cambio de resolución temporal y límites mínimo/máximo del eje gráfico para un caso. Se tomó como referencia que el período y la escala sean controles explícitos; no se reprodujeron pantallas ni reglas clínicas.

La elección de bandas independientes con ejes numéricos reales, símbolos estables y un cursor que distingue hora consultada y hora de medición es una solución propia para los requisitos de Anestesia Vet. Las páginas públicas no prueban que todos estos productos utilicen esas mismas decisiones. Las bandas se ajustan a los datos registrados y no representan rangos de normalidad ni umbrales clínicos.

## Comportamiento implementado

Presiones PAS/PAM/PAD comparten una banda en mmHg. FC, SpO₂, EtCO₂, FR, temperatura y flujo de oxígeno utilizan sus bandas con unidades y límites numéricos propios. Una sola cronología mantiene puntos y eventos alineados. Los límites se calculan a partir de los datos completos del caso para que el zoom temporal no cambie silenciosamente la escala vertical.

El cursor consulta datos reales. Cuando no hay medición en ese instante, la lectura cercana se identifica como tal e incluye su hora y diferencia temporal; no se interpola. Los registros simultáneos se conservan separados. Los segmentos no atraviesan un registro faltante, un intervalo mayor que la continuidad elegida ni dos registros con el mismo horario.

Las vistas Toda, 5, 10, 15 y 30 minutos, intervalo propio, controles de recorrido y restablecimiento solo cambian la presentación. La leyenda conserva datos y usa texto, color y símbolo. Las marcas muestran inicio/fin clínico documentados y registros de medicación, CRI, fluidos, ventilación y eventos. No deducen causalidad.

Se conservan nodos del gráfico durante cambios de presentación y se evita renderizarlo cuando sólo cambian borradores ajenos. Una ventana temporal limita los puntos SVG visibles de registros largos; no elimina ni resume las mediciones originales. Los informes completos incluyen el gráfico de toda la ficha y las tablas numéricas existentes.
