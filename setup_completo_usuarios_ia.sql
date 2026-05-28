-- =========================================================
-- USUARIOS INTERNOS - MESA DE AYUDA CALIDAD
-- Juan Esteban Pérez = Super Admin / Desarrollador
-- =========================================================

begin;

insert into public.dt_users (id, payload, created_at, updated_at)
values
(
  'juan-esteban-perez',
  jsonb_build_object(
    'id','juan-esteban-perez',
    'name','Juan Esteban Pérez',
    'role','Super Admin / Desarrollador',
    'roleKey','super_admin',
    'area','Calidad y mejora continua',
    'email','',
    'canAnswerTickets',true,
    'canManageUsers',true,
    'canSeeKPIs',true,
    'canCloseTickets',true,
    'canExtendWait',true,
    'isSuperAdmin',true,
    'statusText','Desarrollador y administrador principal de la Mesa de Ayuda de Calidad.',
    'avatar','assets/enviado_penguin.gif',
    'pinHash','0ca4a4f1cff90553b0473d52fe0127f3a0e311477ae449c214a14bc863af4c09',
    'active',true
  ),
  now(),
  now()
),
(
  'juan-camilo-montoya',
  jsonb_build_object(
    'id','juan-camilo-montoya',
    'name','Juan Camilo Montoya',
    'role','Analista de calidad',
    'roleKey','analista_calidad',
    'area','Calidad y mejora continua',
    'email','',
    'canAnswerTickets',true,
    'canManageUsers',false,
    'canSeeKPIs',true,
    'canCloseTickets',true,
    'canExtendWait',true,
    'isSuperAdmin',false,
    'statusText','Disponible para atender solicitudes, revisar procesos y apoyar documentación.',
    'avatar','assets/soporte_trabajando.gif',
    'pinHash','ed5955c149f00ce17ba64acd89ffa3963f5c42dc3e62ac2b45acd45c2bfeda1b',
    'active',true
  ),
  now(),
  now()
),
(
  'maria-fernanda-zamudio',
  jsonb_build_object(
    'id','maria-fernanda-zamudio',
    'name','María Fernanda Zamudio',
    'role','Analista de calidad',
    'roleKey','analista_calidad',
    'area','Calidad y mejora continua',
    'email','',
    'canAnswerTickets',true,
    'canManageUsers',false,
    'canSeeKPIs',true,
    'canCloseTickets',true,
    'canExtendWait',true,
    'isSuperAdmin',false,
    'statusText','Apoyo en gestión documental, procedimientos, indicadores y seguimiento.',
    'avatar','assets/documento_proceso.gif',
    'pinHash','90de4e454ee7dc8a0a33a006ecb48ae76cd8d29a182c38e6a2b129c466a7d8b8',
    'active',true
  ),
  now(),
  now()
),
(
  'luis-grajales',
  jsonb_build_object(
    'id','luis-grajales',
    'name','Luis Grajales',
    'role','Jefe de auditoría interna',
    'roleKey','jefe_auditoria_interna',
    'area','Auditoría interna',
    'email','',
    'canAnswerTickets',true,
    'canManageUsers',false,
    'canSeeKPIs',true,
    'canCloseTickets',true,
    'canExtendWait',true,
    'isSuperAdmin',false,
    'statusText','Enfocado en auditoría, hallazgos, trazabilidad y cierre con evidencia.',
    'avatar','assets/ampliar_espera.gif',
    'pinHash','7f25da57311a420ee12b065d163eecab55538f34ec017db5d34628914fc48dde',
    'active',true
  ),
  now(),
  now()
),
(
  'yessica-castro',
  jsonb_build_object(
    'id','yessica-castro',
    'name','Yessica Castro',
    'role','Jefe general',
    'roleKey','jefe_general',
    'area','Auditoría y calidad',
    'email','',
    'canAnswerTickets',true,
    'canManageUsers',false,
    'canSeeKPIs',true,
    'canCloseTickets',true,
    'canExtendWait',true,
    'isSuperAdmin',false,
    'statusText','Dirección general de calidad, auditoría, seguimiento y mejora continua.',
    'avatar','assets/login_dance.gif',
    'pinHash','dca4277d226c9d940715a39f26f4f4093342d88b966bdc6c08c01ff4bcb5f446',
    'active',true
  ),
  now(),
  now()
)
on conflict (id) do update
set payload = excluded.payload,
    updated_at = now();

commit;

-- =========================================================
-- ENTRENAMIENTO IA / CHATBOT ROBUSTO
-- =========================================================

-- Entrenamiento inicial grueso para IA de Mesa de Ayuda Calidad
-- Ejecutar después de schema_supabase.sql y crear_usuarios_y_memorias.sql.
-- Carga memorias base para que el chatbot pueda responder, clasificar y ayudar a crear solicitudes.

insert into public.dt_ai_memories (id, payload, created_at, updated_at)
values
('base_saludo', '{"id": "base_saludo", "key": "hola,buenas,hey,saludos,ayuda", "answer": "¡Hola! Soy la IA del Dream Team de Calidad. Te puedo ayudar a radicar solicitudes, consultar radicados, ordenar procedimientos, analizar KPIs, preparar respuestas y dejar trazabilidad sin enredarte.", "intent": "saludo", "route": "chat", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_crear_solicitud', '{"id": "base_crear_solicitud", "key": "crear solicitud,radicar,registrar solicitud,necesito pedir,ayudame a crear,hacer ticket,mesa de ayuda", "answer": "Para crear una solicitud fuerte necesito cinco datos: quién solicita, área de origen, qué necesita, por qué lo necesita y qué evidencia tiene. Con eso puedo proponerte asunto, categoría, prioridad, modalidad, responsable y descripción lista para pegar.", "intent": "radicacion", "route": "draft", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_consulta_radicado', '{"id": "base_consulta_radicado", "key": "radicado,codigo,código,consultar,estado de solicitud,dt-", "answer": "Para consultar una solicitud usa el código tipo DT-0001. El sistema debe mostrar estado, responsable, línea de tiempo, chat y evidencia. Si no aparece, revisa que el código esté completo y sin espacios.", "intent": "consulta", "route": "lookup", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_roles', '{"id": "base_roles", "key": "rol,roles,analista,jefe,solicitante,usuarios,permisos", "answer": "Los analistas y jefes responden solicitudes. El usuario general no necesita cuenta: radica y consulta por radicado. Solo el Super Admin administra usuarios internos, roles y configuración.", "intent": "roles", "route": "policy", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_procedimiento', '{"id": "base_procedimiento", "key": "procedimiento,proceso,flujo,caracterización,caracterizacion,manual,paso a paso", "answer": "Para un procedimiento conviene pedir: nombre del proceso, versión actual, cambio requerido, responsable del proceso, evidencia, riesgo de no actualizarlo y fecha esperada. La respuesta debe dejar trazabilidad de revisión, ajuste, validación y publicación.", "intent": "procedimiento", "route": "quality", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_auditoria', '{"id": "base_auditoria", "key": "auditoría,auditoria,hallazgo,no conformidad,observación,observacion,criterio,evidencia", "answer": "Para auditoría separa criterio, condición, evidencia, causa probable, responsable, acción inmediata, acción correctiva y fecha de verificación. Eso evita cierres débiles o respuestas sin soporte.", "intent": "auditoria", "route": "quality", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_kpis', '{"id": "base_kpis", "key": "kpi,indicador,productividad,gráfica,grafica,dashboard,panel,medición,medicion", "answer": "Los KPIs base son solicitudes recibidas, cerradas, abiertas, tiempo promedio de aceptación, tiempo promedio de cierre, carga por responsable, categorías más frecuentes, ampliaciones de espera y solicitudes vencidas.", "intent": "indicadores", "route": "analytics", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_tiempos', '{"id": "base_tiempos", "key": "tiempo,demora,respuesta,sla,vencido,plazo,rapidez,espera", "answer": "Mide tres tiempos: recepción a aceptación, aceptación a resolución y resolución a cierre. Cuando una solicitud se demora, el responsable debe ampliar espera con comentario y nueva expectativa.", "intent": "sla", "route": "analytics", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_documental', '{"id": "base_documental", "key": "documento,pdf,formato,acta,matriz,procedimiento documentado,archivo", "answer": "Si la solicitud es documental, puede quedar En proceso mientras se elabora o revisa. Se debe dejar avance, versión, evidencia y cierre solo cuando el entregable esté validado.", "intent": "documental", "route": "quality", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_trazabilidad', '{"id": "base_trazabilidad", "key": "trazabilidad,seguimiento,historial,línea de tiempo,linea de tiempo,evidencia,registro", "answer": "Una trazabilidad fuerte responde: quién solicita, de dónde viene, a quién se asigna, qué se hizo, cuándo cambió de estado, qué evidencia soporta el cierre y quién valida.", "intent": "trazabilidad", "route": "quality", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_prioridad', '{"id": "base_prioridad", "key": "prioridad,crítica,critica,alta,media,baja,urgente", "answer": "Usa Crítica cuando bloquea operación o compromete auditoría/gerencia; Alta cuando impacta plazo o cumplimiento; Media cuando requiere gestión normal; Baja cuando es mejora o consulta sin urgencia.", "intent": "priorizacion", "route": "triage", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_modalidad', '{"id": "base_modalidad", "key": "modalidad,presencial,documental,mixta,visita,reunion,reunión", "answer": "Documental aplica para formatos, procedimientos, matrices y análisis. Presencial aplica cuando se requiere observar, levantar información o validar en campo. Mixta aplica cuando hay revisión documental y acompañamiento presencial.", "intent": "triage", "route": "triage", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_asignacion', '{"id": "base_asignacion", "key": "responsable,asignar,a quién,a quien,analista asignado,derivar", "answer": "Asigna según naturaleza: procedimiento/documento a analistas de calidad; auditoría, hallazgos o verificación a jefatura de auditoría/calidad; temas estratégicos o saturación al jefe general.", "intent": "asignacion", "route": "triage", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_ampliar_espera', '{"id": "base_ampliar_espera", "key": "ampliar espera,más tiempo,mas tiempo,demora grande,solicitud grande,aplazar,prórroga,prorroga", "answer": "Cuando el caso es grande, el responsable debe usar Ampliar espera, explicar motivo, nueva expectativa y avance. El solicitante verá el comentario y la solicitud queda trazable.", "intent": "espera", "route": "workflow", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_cierre', '{"id": "base_cierre", "key": "cerrar,cierre,terminado,resuelto,finalizado,notificar", "answer": "Para cerrar bien: confirma resultado, deja evidencia, resume qué se hizo, indica fecha de cierre y notifica al solicitante. No cierres si falta validación o soporte mínimo.", "intent": "cierre", "route": "workflow", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_chat_interno', '{"id": "base_chat_interno", "key": "chat,mensaje,comentario,conversación,conversacion,actualización,actualizacion", "answer": "El chat interno debe usarse para avances, aclaraciones, evidencia y decisiones. Evita mensajes sueltos tipo ‘ok’; escribe qué cambió, quién queda responsable y cuál es el siguiente paso.", "intent": "comunicacion", "route": "workflow", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_solicitud_incompleta', '{"id": "base_solicitud_incompleta", "key": "incompleta,no entiendo,falta información,falta informacion,sin evidencia,mal radicada", "answer": "Si la solicitud llega incompleta, no la cierres ni la ignores. Pide aclaración concreta: qué requiere, proceso afectado, evidencia, plazo esperado y contacto responsable.", "intent": "validacion", "route": "triage", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_no_encontrado', '{"id": "base_no_encontrado", "key": "no aparece,no encontró,no encontro,no sale,perdida,perdido,buscar solicitud", "answer": "Primero revisa código completo, nombre del solicitante, responsable y fecha aproximada. Si no hay coincidencia, el sistema debe orientar al usuario y no inventar información.", "intent": "busqueda", "route": "lookup", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_saturacion', '{"id": "base_saturacion", "key": "saturado,muchas solicitudes,carga,capacidad,cola,atrasado,represado", "answer": "Cuando hay muchas solicitudes, revisa carga por responsable, antigüedad de tickets, prioridades críticas y categorías repetidas. Luego reasigna o amplía espera con comentario.", "intent": "capacidad", "route": "analytics", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_pareto', '{"id": "base_pareto", "key": "pareto,80/20,más pedido,mas pedido,frecuente,causa principal", "answer": "Un Pareto de categorías muestra qué solicitudes consumen más capacidad. Si pocas categorías concentran la mayoría de tickets, ahí está la primera oportunidad de estandarización o capacitación.", "intent": "analitica", "route": "analytics", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_mejora_continua', '{"id": "base_mejora_continua", "key": "mejora continua,mejorar,acción de mejora,accion de mejora,oportunidad,optimizar", "answer": "Convierte la mejora en solicitud trazable: problema actual, efecto, propuesta, responsable, indicador esperado y evidencia de cierre. Sin indicador, la mejora queda en intención.", "intent": "mejora", "route": "quality", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_riesgos', '{"id": "base_riesgos", "key": "riesgo,control,mitigar,impacto,probabilidad,matriz", "answer": "Para riesgos registra causa, evento, consecuencia, control existente, responsable, nivel de riesgo y acción de tratamiento. Luego valida si el control quedó documentado y aplicado.", "intent": "riesgo", "route": "quality", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_capacitacion', '{"id": "base_capacitacion", "key": "capacitación,capacitacion,inducción,induccion,entrenamiento,socialización,socializacion", "answer": "Una capacitación debe quedar con objetivo, población, tema, evidencia de asistencia, material usado, evaluación rápida y compromisos. Eso permite medir cobertura y efectividad.", "intent": "capacitacion", "route": "quality", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_responder_usuario', '{"id": "base_responder_usuario", "key": "cómo respondo,como respondo,redacta respuesta,qué le digo,que le digo,mensaje al usuario", "answer": "Responde con estructura breve: saludo, estado actual, acción realizada, evidencia o avance, siguiente paso y fecha estimada. Mantén tono claro, humano y trazable.", "intent": "respuesta", "route": "writing", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_tono', '{"id": "base_tono", "key": "tono,amigable,curioso,formal,informal,humano", "answer": "Usa un tono cercano pero responsable: claro, breve, sin tecnicismos innecesarios y con trazabilidad. La app puede ser curiosa, pero los cierres deben sonar profesionales.", "intent": "tono", "route": "writing", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_calidad_municipal', '{"id": "base_calidad_municipal", "key": "alcaldía,alcaldia,municipal,gobierno,calidad pública,calidad publica,proceso público,publico", "answer": "En contexto municipal importa dejar evidencia, responsable, fecha y trazabilidad. La mesa debe ayudar a ordenar solicitudes internas sin volver complejo el acceso del ciudadano o usuario general.", "intent": "contexto", "route": "context", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_supabase', '{"id": "base_supabase", "key": "supabase,base de datos,guardar,tabla,dt_tickets,dt_users,dt_ai_memories", "answer": "La app guarda usuarios en dt_users, solicitudes en dt_tickets, memorias de IA en dt_ai_memories y ranking en dt_game_scores. Si algo no aparece, revisa conexión y políticas RLS.", "intent": "tecnico", "route": "tech", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_github_pages', '{"id": "base_github_pages", "key": "github,github pages,publicar,hosting,subir app,index", "answer": "Para GitHub Pages sube index.html y la carpeta assets completa. Si no subes assets, logo y GIFs no cargan. El HTML usa Supabase como base de datos.", "intent": "tecnico", "route": "tech", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_seguridad', '{"id": "base_seguridad", "key": "seguridad,key,clave,service role,anon,publishable,rls", "answer": "En el HTML solo debe ir la key pública/publishable. Nunca pongas service_role en frontend. Las tablas deben tener RLS y políticas acordes al flujo de prueba o producción.", "intent": "seguridad", "route": "tech", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_aprendizaje', '{"id": "base_aprendizaje", "key": "aprende,entrenar,memoria,documentos,pdf,base de conocimiento", "answer": "La IA aprende de memorias manuales, documentos cargados, cierres de tickets, ampliaciones de espera y respuestas del juego. Cada aprendizaje queda guardado y luego entra al modelo de búsqueda por relevancia.", "intent": "aprendizaje", "route": "ai", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_modelo_matematico', '{"id": "base_modelo_matematico", "key": "modelo matemático,modelo matematico,scoring,algoritmo,clasificador,relevancia", "answer": "El modelo usa puntaje ponderado: coincidencia de intención, cobertura de palabras clave, similitud de tokens, contexto de tickets y memoria entrenada. La respuesta con mayor score gana; si el score es bajo, pide más datos o genera borrador guiado.", "intent": "ai_model", "route": "ai", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_juego_ia', '{"id": "base_juego_ia", "key": "juego,ranking,reto,puntos,marco,elogio", "answer": "El juego entrena criterio operativo. Cada respuesta correcta suma puntos y refuerza memorias sobre trazabilidad, prioridad, cierre, evidencia y atención al usuario.", "intent": "gamificacion", "route": "game", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_procedimiento_vencido', '{"id": "base_procedimiento_vencido", "key": "vencido,fuera de tiempo,se pasó,se paso,incumplido", "answer": "Si una solicitud se venció, deja comentario de causa, acción inmediata, nueva fecha y responsable. Luego analiza si el vencimiento se repite por categoría o por carga del responsable.", "intent": "workflow", "route": "workflow", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_evidencia', '{"id": "base_evidencia", "key": "evidencia,soporte,captura,link,drive,adjunto,prueba", "answer": "La evidencia puede ser enlace, archivo, acta, captura, PDF o descripción verificable. Sin evidencia, el cierre queda débil y no sirve para auditoría ni mejora continua.", "intent": "evidencia", "route": "quality", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_indicador_sugerido', '{"id": "base_indicador_sugerido", "key": "qué indicador,que indicador,medir esto,cómo mido,como mido,metrica,métrica", "answer": "Propón indicador con nombre, fórmula, fuente de datos, frecuencia, meta y responsable. Ejemplo: Tiempo promedio de cierre = horas totales de cierre / solicitudes cerradas.", "intent": "analytics", "route": "analytics", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_clasificar_solicitud', '{"id": "base_clasificar_solicitud", "key": "clasifica,clasificar,categoría,categoria,qué categoría,que categoria", "answer": "Clasifico por intención: documento/formato va a Documento; flujo o paso a paso a Procedimiento; medición a Indicador/KPI; hallazgo a Auditoría o Riesgo/Hallazgo; formación a Capacitación.", "intent": "triage", "route": "triage", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_solicitante_externo', '{"id": "base_solicitante_externo", "key": "usuario general,solicitante,externo,sin cuenta,radicar sin usuario", "answer": "El solicitante no necesita usuario interno. Debe radicar con nombre, correo, área, asunto, descripción y responsable. Luego consulta por código de radicado.", "intent": "usuarios", "route": "policy", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_jefe_general', '{"id": "base_jefe_general", "key": "yessica,jefe general,jefe de calidad,administrar usuarios,crear usuarios", "answer": "El jefe general revisa KPIs, puede responder solicitudes, validar cierres y mirar carga global. La administración de usuarios internos queda reservada al Super Admin / Desarrollador.", "intent": "roles", "route": "policy", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_analistas', '{"id": "base_analistas", "key": "juan esteban,juan camilo,maria fernanda,maría fernanda,analistas,analista de calidad", "answer": "Los analistas de calidad atienden solicitudes operativas de procedimientos, documentos, indicadores, capacitaciones, mejoras y consultas. Juan Esteban Pérez además es Super Admin / Desarrollador. Deben aceptar, comentar, ampliar espera si aplica y resolver con evidencia.", "intent": "roles", "route": "policy", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_auditoria_interna', '{"id": "base_auditoria_interna", "key": "luis,grajales,auditoría interna,auditoria interna,jefe de auditoria", "answer": "Auditoría interna debe enfocarse en hallazgos, verificaciones, evidencias, acciones correctivas y control de cierre. No todo ticket es hallazgo; primero se clasifica por impacto y evidencia.", "intent": "roles", "route": "policy", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_pqr_vs_mesa', '{"id": "base_pqr_vs_mesa", "key": "pqrs,pqr,ventanilla,mesa de ayuda,alcance", "answer": "Esta mesa está pensada para Calidad y Mejora Continua. Puede orientar solicitudes internas, procedimientos, auditoría, indicadores y documentos; no reemplaza automáticamente sistemas formales de PQRS o ventanilla externa.", "intent": "alcance", "route": "scope", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_respuesta_gruesa', '{"id": "base_respuesta_gruesa", "key": "respuesta gruesa,respuesta completa,explica mejor,detallado,bien elaborado", "answer": "Para una respuesta gruesa usa: contexto del caso, análisis del problema, acción propuesta, evidencia necesaria, responsable, plazo, riesgo de no actuar y cierre esperado. Así la respuesta no queda floja.", "intent": "writing", "route": "writing", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_validar_solicitud', '{"id": "base_validar_solicitud", "key": "validar solicitud,está bien,esta bien,lógica,logica,coherente", "answer": "Una solicitud es lógica si tiene asunto claro, necesidad concreta, proceso de origen, responsable probable, evidencia o contexto y resultado esperado. Si falta algo, pide aclaración antes de aceptar.", "intent": "validation", "route": "triage", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_convertir_idea', '{"id": "base_convertir_idea", "key": "convertir idea,ordenar idea,no sé cómo pedir,no se como pedir,ayúdame a redactar,ayudame a redactar", "answer": "Cuéntame la idea en lenguaje normal. Yo la convierto en asunto, categoría, prioridad, modalidad, descripción, evidencia sugerida y responsable probable para que puedas radicarla mejor.", "intent": "draft", "route": "draft", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_pdf_resumen', '{"id": "base_pdf_resumen", "key": "leer pdf,resumir pdf,documento cargado,archivo cargado,extraer texto", "answer": "Cuando subas un PDF o texto, la IA extrae contenido útil y lo guarda como memoria. Luego puede responder usando ese material, siempre que el archivo tenga texto legible.", "intent": "documents", "route": "documents", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_whatsapp_estado', '{"id": "base_whatsapp_estado", "key": "estado,estado tipo whatsapp,avatar,gif,foto perfil,perfil", "answer": "Cada usuario puede tener avatar o GIF y un estado corto. Eso ayuda a ver disponibilidad, pero la trazabilidad real la dan los tickets, estados y comentarios.", "intent": "profile", "route": "profile", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_productividad_equipo', '{"id": "base_productividad_equipo", "key": "productividad equipo,productividad general,medir equipo,efectividad,rendimiento", "answer": "La productividad debe verse por volumen, tiempo, calidad de cierre y carga. No basta contar tickets cerrados: revisa complejidad, vencimientos, ampliaciones y evidencia de cierre.", "intent": "analytics", "route": "analytics", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_mejor_responsable', '{"id": "base_mejor_responsable", "key": "quién debe responder,quien debe responder,a quien asigno,mejor responsable", "answer": "El mejor responsable depende de tema e impacto: documentos/procedimientos a analistas; hallazgos/verificación a auditoría; prioridades críticas o decisiones transversales al jefe general.", "intent": "assignment", "route": "triage", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_acciones_correctivas', '{"id": "base_acciones_correctivas", "key": "acción correctiva,accion correctiva,acción inmediata,accion inmediata,plan de mejora", "answer": "Diferencia acción inmediata de acción correctiva: la inmediata contiene el problema; la correctiva ataca causa raíz. Ambas deben tener responsable, fecha y evidencia.", "intent": "audit", "route": "audit", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_causa_raiz', '{"id": "base_causa_raiz", "key": "causa raíz,causa raiz,ishikawa,5 porqués,5 porques,problema repetido", "answer": "Para causa raíz usa 5 porqués o espina de pescado. Si el problema se repite, no cierres solo con corrección; deja acción correctiva y verificación posterior.", "intent": "audit", "route": "audit", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_formulario_solicitud', '{"id": "base_formulario_solicitud", "key": "formulario,campos,qué campos,que campos,datos necesarios", "answer": "Campos mínimos: solicitante, correo, área origen, responsable, categoría, prioridad, modalidad, asunto, descripción y evidencia. Para casos críticos agrega fecha requerida e impacto.", "intent": "draft", "route": "draft", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_calidad_cierre', '{"id": "base_calidad_cierre", "key": "calidad del cierre,cierre bueno,cierre débil,cierre debil,validación final,validacion final", "answer": "Un buen cierre tiene resultado concreto, evidencia, trazabilidad de cambios, responsable y validación. Un cierre débil dice ‘listo’ sin demostrar qué se resolvió.", "intent": "closure_quality", "route": "workflow", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now()),
('base_automatizacion', '{"id": "base_automatizacion", "key": "automatizar,notificación,notificacion,correo,alerta,popup", "answer": "Las notificaciones deben aparecer al enviar, aceptar, ampliar espera, poner en proceso, resolver y cerrar. Cada evento debe dejar línea de tiempo para auditoría del flujo.", "intent": "tech", "route": "tech", "createdBy": "Modelo base grueso", "active": true}'::jsonb, now(), now())
on conflict (id) do update
set payload = excluded.payload,
    updated_at = now();



insert into public.dt_ai_memories (id, payload, created_at, updated_at)
values
('base_super_admin_juan_esteban', '{"id":"base_super_admin_juan_esteban","key":"super admin,administrador,desarrollador,juan esteban,crear usuarios,permisos","answer":"Juan Esteban Pérez es el Super Admin / Desarrollador de la mesa de ayuda. Solo este perfil administra usuarios internos, roles, configuración y ajustes técnicos. Yessica Castro es Jefe general, puede responder y revisar KPIs, pero no es Super Admin.","intent":"roles","route":"policy","createdBy":"Modelo base grueso","active":true}'::jsonb, now(), now())
on conflict (id) do update
set payload = excluded.payload,
    updated_at = now();

select id, payload->>'intent' as intent, payload->>'key' as palabras_clave
from public.dt_ai_memories
where id like 'base_%'
order by id;
