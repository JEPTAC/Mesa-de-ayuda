# Editor Institucional de Procedimientos EI · V15

Esta versión corrige el problema de exportación causado por el uso de una imagen de plantilla como fondo.

## Cambio principal

La app ahora **crea el formato institucional en SVG real**, no como una imagen superpuesta. El logo se conserva como recurso gráfico, pero la estructura del procedimiento se dibuja como elementos vectoriales:

- Encabezado institucional.
- Franja azul.
- Título del procedimiento.
- Código y versión.
- Fila RESPONSABLE / FLUJOGRAMA.
- Columnas de proceso y responsable.
- Área del flujograma.
- Página narrativa.
- Fecha y paginación.

## Ventajas

- Exportación a PDF más limpia.
- Exportación PNG más estable.
- Exportación SVG por página.
- Menos desalineaciones, porque ya no se está “tapando” una imagen.
- Mejor base para seguir automatizando el documento.

## Uso

1. Abrir `index.html`.
2. Diligenciar datos del procedimiento.
3. Crear carriles/responsables.
4. Agregar figuras y conectores.
5. Exportar a PDF, PNG, SVG o JSON.

## Nota

El diseño ya no depende de `template_p1.png` ni `template_p2.png` para la salida. Esos archivos se conservan solo como referencia visual y respaldo.
