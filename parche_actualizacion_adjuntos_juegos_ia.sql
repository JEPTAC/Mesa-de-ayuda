-- =========================================================
-- PARCHE ACTUALIZACIÓN APP MESA DE AYUDA CALIDAD
-- Versión: adjuntos + audios + juegos IA + Luis Grisales
-- Ejecutar en: Supabase > SQL Editor > New query > Run
-- =========================================================

begin;

-- 1) Crear / actualizar usuario Luis Grisales con la misma contraseña anterior: luis1234
insert into public.dt_users (id, payload, created_at, updated_at)
values (
  'luis-grisales',
  jsonb_build_object(
    'id','luis-grisales',
    'name','Luis Grisales',
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
)
on conflict (id) do update
set payload = excluded.payload,
    updated_at = now();

-- 2) Si antes existía Luis Grajales, mover tickets asignados al nuevo id Luis Grisales
update public.dt_tickets
set payload = jsonb_set(payload, '{assignedTo}', '"luis-grisales"', true),
    updated_at = now()
where payload->>'assignedTo' = 'luis-grajales';

-- 3) Eliminar el usuario viejo para que no aparezca duplicado en la APP
delete from public.dt_users
where id = 'luis-grajales';

-- 4) Preparar tickets antiguos para que soporten adjuntos de solicitud y adjuntos de respuesta
update public.dt_tickets
set payload =
    payload
    || jsonb_build_object(
      'attachments', coalesce(payload->'attachments', '[]'::jsonb),
      'resolutionFiles', coalesce(payload->'resolutionFiles', '[]'::jsonb)
    ),
    updated_at = now()
where not (payload ? 'attachments')
   or not (payload ? 'resolutionFiles');

-- 5) Agregar memorias nuevas para que la IA entienda las nuevas funciones
insert into public.dt_ai_memories (id, payload, created_at, updated_at)
values
(
  'ai_adjuntos_001',
  jsonb_build_object(
    'id','ai_adjuntos_001',
    'intent','adjuntos_solicitudes',
    'key','adjunto,archivo,documento,evidencia,pdf,imagen,anexo,soporte',
    'answer','Las solicitudes pueden tener adjuntos desde la radicación y también adjuntos de respuesta cuando se marcan como resueltas. Los adjuntos sirven como evidencia, soporte documental y trazabilidad del cierre.',
    'weight',9,
    'active',true
  ),
  now(),
  now()
),
(
  'ai_juegos_001',
  jsonb_build_object(
    'id','ai_juegos_001',
    'intent','juegos_ia_calidad',
    'key','juego,ranking,quiz,reaccion,comparacion,entrenar ia,criterio',
    'answer','Los juegos de calidad entrenan criterio operativo, priorización, reacción ante estados y comparación de solicitudes. Cada partida suma al ranking y puede reforzar memorias de la IA.',
    'weight',8,
    'active',true
  ),
  now(),
  now()
),
(
  'ai_espera_3h_001',
  jsonb_build_object(
    'id','ai_espera_3h_001',
    'intent','alerta_espera_mayor_3_horas',
    'key','3 horas,sin aceptar,pendiente,espera,demora,no aceptada',
    'answer','Si una solicitud lleva más de 3 horas sin ser aceptada, el sistema debe mostrar una alerta clara al usuario, explicar que sigue pendiente de aceptación y permitir revisar responsable, estado y trazabilidad.',
    'weight',9,
    'active',true
  ),
  now(),
  now()
),
(
  'ai_luis_grisales_001',
  jsonb_build_object(
    'id','ai_luis_grisales_001',
    'intent','equipo_luis_grisales',
    'key','luis grisales,jefe auditoria interna,auditoria interna',
    'answer','Luis Grisales es el Jefe de auditoría interna. Puede responder solicitudes relacionadas con auditoría, hallazgos, no conformidades, trazabilidad, acciones correctivas y seguimiento.',
    'weight',8,
    'active',true
  ),
  now(),
  now()
)
on conflict (id) do update
set payload = excluded.payload,
    updated_at = now();

commit;
