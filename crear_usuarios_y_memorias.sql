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

-- Ejecuta después entrenamiento_ia_modelo_grueso.sql para cargar el chatbot robusto.
