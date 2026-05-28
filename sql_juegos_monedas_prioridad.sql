-- =========================================================
-- PARCHE JUEGOS + MONEDAS + CÓDIGOS DE PRIORIDAD
-- Mesa de Ayuda Calidad y Mejoramiento Continuo
-- Ejecutar en: Supabase > SQL Editor > New query > Run
-- =========================================================

begin;

-- 1. Asegurar que los puntajes antiguos tengan monedas y lista de códigos
update public.dt_game_scores
set payload =
    payload
    || jsonb_build_object(
      'coins', coalesce(payload->'coins', payload->'points', '0'::jsonb),
      'codes', coalesce(payload->'codes', '[]'::jsonb)
    ),
    updated_at = now()
where not (payload ? 'coins')
   or not (payload ? 'codes');

-- 2. Preparar tickets antiguos para reconocer prioridad por monedas
update public.dt_tickets
set payload =
    payload
    || jsonb_build_object(
      'priorityBoost', coalesce(payload->'priorityBoost', 'false'::jsonb),
      'priorityCode', coalesce(payload->'priorityCode', 'null'::jsonb),
      'priorityBoostCost', coalesce(payload->'priorityBoostCost', '0'::jsonb)
    ),
    updated_at = now()
where not (payload ? 'priorityBoost')
   or not (payload ? 'priorityCode')
   or not (payload ? 'priorityBoostCost');

-- 3. Memorias para que la IA entienda juegos, monedas y códigos de prioridad
insert into public.dt_ai_memories (id, payload, created_at, updated_at)
values
(
  'ai_juegos_monedas_001',
  jsonb_build_object(
    'id','ai_juegos_monedas_001',
    'intent','juegos_monedas_prioridad',
    'key','juegos,monedas,puntos,codigo prioridad,comprar prioridad,ranking',
    'answer','Los juegos de calidad entregan puntos y monedas. Con 50 monedas el usuario puede generar un código de prioridad. Ese código se pega al radicar una solicitud para subirla a prioridad crítica y marcarla como priorizada por monedas.',
    'weight',10,
    'active',true
  ),
  now(),
  now()
),
(
  'ai_juegos_variedad_001',
  jsonb_build_object(
    'id','ai_juegos_variedad_001',
    'intent','variedad_juegos_calidad',
    'key','quiz,reaccion,comparacion,verdadero falso,clasificar,secuencia,memoria,palabra clave,kpi,electro ingenieria',
    'answer','La sección de juegos incluye variedad de retos: quiz, reacción, comparación, verdadero/falso, clasificación, secuencia, memoria, palabra clave, KPI y Electro Ingeniería. Cada juego refuerza criterios útiles para calidad, auditoría y mejoramiento continuo.',
    'weight',9,
    'active',true
  ),
  now(),
  now()
),
(
  'ai_prioridad_monedas_001',
  jsonb_build_object(
    'id','ai_prioridad_monedas_001',
    'intent','prioridad_por_monedas',
    'key','prioridad por monedas,codigo EI-PRIO,solicitud priorizada,subir prioridad',
    'answer','Si el usuario tiene un código EI-PRIO activo, puede pegarlo al crear la solicitud. El sistema valida el código, lo marca como usado y sube la solicitud a prioridad crítica con una nota de trazabilidad.',
    'weight',10,
    'active',true
  ),
  now(),
  now()
),
(
  'ai_electro_ingenieria_juegos_001',
  jsonb_build_object(
    'id','ai_electro_ingenieria_juegos_001',
    'intent','juegos_electro_ingenieria',
    'key','electro ingenieria,empresa,calidad,procedimientos,auditoria,mejora continua',
    'answer','Los juegos de Electro Ingeniería deben reforzar buenas prácticas del sistema de calidad: radicar con evidencia, controlar versiones documentales, gestionar hallazgos, medir indicadores y cerrar solicitudes con trazabilidad.',
    'weight',9,
    'active',true
  ),
  now(),
  now()
)
on conflict (id) do update
set payload = excluded.payload,
    updated_at = now();

commit;

-- Verificación rápida:
-- select id, payload->>'userName' as jugador, payload->>'points' as puntos, payload->>'coins' as monedas, payload->'codes' as codigos
-- from public.dt_game_scores
-- order by updated_at desc;
--
-- select id, payload->>'code' as radicado, payload->>'priority' as prioridad, payload->>'priorityBoost' as prioridad_monedas, payload->>'priorityCode' as codigo_prioridad
-- from public.dt_tickets
-- order by updated_at desc;
