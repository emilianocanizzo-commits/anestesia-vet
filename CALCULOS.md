# Actualización 3.23

Consultá LEEME.md para las modalidades Lite/Completo y los informes 3.23. Las funciones de base descritas a continuación se conservan.

# Bloqueos bilaterales: alcance de la dosis, 3.21.2

Para una dosis en mg/kg: volumen de la dosis ingresada (mL) = dosis (mg/kg) × peso (kg) ÷ concentración (mg/mL).

Para una dosis en mL/kg: volumen de la dosis ingresada (mL) = dosis (mL/kg) × peso (kg). Esta conversión no requiere concentración. La concentración solo permite obtener además la equivalencia de masa. Se conserva la conversión de porcentaje p/v: 1 % p/v = 10 mg/mL.

En bilateral, **por lado** significa que ese volumen corresponde a cada lado; volumen total = 2 × volumen por lado. La dosis total en mg/kg también es el doble de la dosis por lado, cuando puede calcularse la masa.

En bilateral, **total del bloqueo** significa que el volumen calculado ya corresponde a ambos lados; volumen por lado = volumen total ÷ 2 como reparto teórico en partes iguales. La dosis total no se duplica. En unilateral, el factor es uno.

La elección es necesaria porque bilateralidad y dosis total son conceptos diferentes: las [técnicas de anestesia local de AAHA](https://www.aaha.org/resources/2020-aaha-anesthesia-and-monitoring-guidelines-for-dogs-and-cats/local-anesthetic-techniques/for-dental-extractions/) describen aplicación uni o bilateral dentro de una dosis total. La aplicación no deduce una pauta por técnica ni propone dosis.

Prueba dimensional con medicamento ficticio: 10 kg, 1 mg/kg y 5 mg/mL producen 2 mL para la dosis ingresada. Si esa dosis es por lado: derecho 2 mL, izquierdo 2 mL y total 4 mL, equivalentes a 2 mg/kg totales. Si esa dosis ya es total: derecho 1 mL, izquierdo 1 mL y total 2 mL, equivalentes a 1 mg/kg total. Estos números verifican aritmética y no representan una recomendación terapéutica.

Los resultados conservan ocho cifras significativas para presentación, como la base previa. Si faltan datos necesarios o el resultado no es finito, no se conserva un total anterior en la calculadora. Las cantidades calculadas no rellenan los volúmenes administrados.

Se guarda `doseBasis`, número de lados, volumen total, volumen por lado, fórmula y dosis total en el snapshot del cálculo. Los registros históricos no se recalculan al abrirlos. Una corrección explícita conserva los volúmenes administrados y deja auditoría del cambio.


---

# Cálculos y registro de analgesia 3.21

La calculadora no prescribe ni ofrece dosis predeterminadas. La persona responsable introduce peso, dosis, unidades, productos comerciales, preparación y velocidad. Debe verificar compatibilidad fisicoquímica, estabilidad y adecuación clínica. No se consulta ni se supone una tabla de compatibilidad.

Para cada medicamento se convierte la velocidad a mg/h: dosis × peso en kg, multiplicada por 0,001 si usa µg y por 60 si usa minutos. Los prefijos siguen la [definición SI del BIPM](https://www.bipm.org/en/committees/cg/cgpm/11-1960/resolution-12): 1 mg = 1000 µg. Se acepta mg/kg/h, mg/kg/min, µg/kg/h y µg/kg/min. Una dosis única mg/kg se registra como bolo con el formulario individual existente y se rechaza como velocidad de CRI.

Modo de velocidad compartida: concentración final (mg/mL) = requerimiento (mg/h) ÷ bomba (mL/h). Cantidad de producto (mg) = concentración final × volumen FINAL. Volumen comercial (mL) = cantidad ÷ concentración comercial (mg/mL). El diluyente añadido es volumen final menos la suma de TODOS los productos. El volumen final incluye los medicamentos; no es el volumen de diluyente. La concentración comercial admite mg/mL, µg/mL y % p/v (1 % p/v = 10 mg/mL).

Modo de concentraciones finales conocidas: bomba (mL/h) = requerimiento (mg/h) ÷ concentración final (mg/mL). En una misma mezcla los medicamentos deben conducir a una velocidad común (tolerancia numérica relativa de una parte por millón). Si requieren bombas distintas, se rechaza la mezcla y se pide corregirla o crear infusiones independientes. Cada Nueva CRI tiene identificador y bomba propios; registrar el mismo medicamento dos veces no los mezcla automáticamente.

No se aceptan masas, concentraciones, pesos, velocidades o volumen final nulos, negativos o no finitos. Se rechazan preparaciones cuyos productos suman más que el volumen final. No hay resultados completos mientras falte un dato requerido. Un volumen calculable puede ser impráctico: se destaca si un producto requiere menos de 0,01 mL; no se valida la exactitud de la bomba, la jeringa, la medición de volúmenes ni límites clínicos de dosis.

El cambio de velocidad conserva la misma preparación: no altera masa cargada, volumen de producto, diluyente ni concentración. Recalcula la dosis REAL programada de cada medicamento usando concentración × bomba y convierte a la unidad original. Un cambio de dosis/concentración/preparación exige revisar y guardar una configuración completa. Suspensión conserva el último estado y deja de aparecer como activa. Reinicio conserva la cadena de eventos y exige una nueva revisión. No se aceptan cambios anteriores al último evento de esa infusión: evita estados cronológicos contradictorios.

Cada evento se incorpora como un registro nuevo a `data.analgesia`, con `cri321.infusionId`, `previousEventId`, `snapshot`, horario del evento, horario de registro, responsable declarado y motivo. El snapshot contiene todos los medicamentos y cálculos. No se crean filas separadas por medicamento en la mezcla. Los registros 3.20 no se convierten ni se agrupan como mezclas por inferencia; bloqueos mantienen su `blockGroupId` automático y sus volúmenes administrados y laterales individuales. Los eventos nuevos no ofrecen edición que reemplace el snapshot; se usan cambios sucesivos.

Los valores de las pruebas automatizadas son ficticios para verificar dimensiones; no representan recomendaciones terapéuticas. Ejemplo independiente: 20 kg × 2 mg/kg/h = 40 mg/h; a 5 mL/h requiere 8 mg/mL. Para 50 mL finales se necesitan 400 mg, equivalentes a 20 mL de producto de 20 mg/mL más 30 mL de diluyente. Duplicar la bomba a 10 mL/h con esa misma preparación duplica la dosis a 4 mg/kg/h.
