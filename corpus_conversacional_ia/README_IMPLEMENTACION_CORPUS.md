# Paquete de documentos conversacionales IA Nivel 1

Proyecto: Mesa de Ayuda de Calidad
Marca interna sugerida: Dream Team de Calidad y Mejoramiento Continuo
Super Admin / Desarrollador de referencia: Juan Esteban Pérez

Este paquete contiene documentos, corpus en texto plano, dataset JSONL, base de conocimiento importable y SQL para alimentar una IA Nivel 1 sin API paga.

## Qué incluye

- `docs/`: documentos Word para revisión humana y entrenamiento conceptual.
- `plain_text/`: corpus limpio por categoría para cargarlo a una base documental.
- `data/dataset_conversaciones_entrenamiento.jsonl`: conversaciones usuario/asistente para probar el motor.
- `data/knowledge_base_import.csv`: base de conocimiento importable.
- `data/knowledge_base_import.json`: misma base en JSON.
- `data/intents_synonyms_seed.json`: intenciones, ejemplos y palabras clave.
- `data/response_templates_seed.json`: plantillas de respuesta.
- `sql/importar_corpus_conversacional.sql`: tabla y registros para Supabase.

## Uso recomendado

1. Revisar los documentos Word y ajustar términos propios del proceso.
2. Importar `knowledge_base_import.csv` o `knowledge_base_import.json` a la tabla `dt_ai_knowledge_base`.
3. Ejecutar `sql/importar_corpus_conversacional.sql` para guardar el dataset conversacional.
4. Conectar el motor `ai-brain.js` para que busque por intención, palabras clave y categoría.
5. Activar aprendizaje controlado: todo nuevo conocimiento entra como pendiente, no como regla oficial.

## Regla clave

La IA puede conversar y sugerir, pero no debe aprobar aprendizajes, cambiar roles, revelar credenciales ni cerrar tickets de forma automática.
