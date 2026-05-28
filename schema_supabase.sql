create table if not exists public.dt_users (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.dt_tickets (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.dt_ai_memories (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.dt_game_scores (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.touch_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists touch_dt_users on public.dt_users;
create trigger touch_dt_users before update on public.dt_users for each row execute function public.touch_updated_at();

drop trigger if exists touch_dt_tickets on public.dt_tickets;
create trigger touch_dt_tickets before update on public.dt_tickets for each row execute function public.touch_updated_at();

drop trigger if exists touch_dt_ai_memories on public.dt_ai_memories;
create trigger touch_dt_ai_memories before update on public.dt_ai_memories for each row execute function public.touch_updated_at();

drop trigger if exists touch_dt_game_scores on public.dt_game_scores;
create trigger touch_dt_game_scores before update on public.dt_game_scores for each row execute function public.touch_updated_at();

alter table public.dt_users enable row level security;
alter table public.dt_tickets enable row level security;
alter table public.dt_ai_memories enable row level security;
alter table public.dt_game_scores enable row level security;

drop policy if exists dt_users_select on public.dt_users;
create policy dt_users_select on public.dt_users for select to anon, authenticated using (true);
drop policy if exists dt_users_insert on public.dt_users;
create policy dt_users_insert on public.dt_users for insert to anon, authenticated with check (true);
drop policy if exists dt_users_update on public.dt_users;
create policy dt_users_update on public.dt_users for update to anon, authenticated using (true) with check (true);
drop policy if exists dt_users_delete on public.dt_users;
create policy dt_users_delete on public.dt_users for delete to anon, authenticated using (true);

drop policy if exists dt_tickets_select on public.dt_tickets;
create policy dt_tickets_select on public.dt_tickets for select to anon, authenticated using (true);
drop policy if exists dt_tickets_insert on public.dt_tickets;
create policy dt_tickets_insert on public.dt_tickets for insert to anon, authenticated with check (true);
drop policy if exists dt_tickets_update on public.dt_tickets;
create policy dt_tickets_update on public.dt_tickets for update to anon, authenticated using (true) with check (true);
drop policy if exists dt_tickets_delete on public.dt_tickets;
create policy dt_tickets_delete on public.dt_tickets for delete to anon, authenticated using (true);

drop policy if exists dt_ai_memories_select on public.dt_ai_memories;
create policy dt_ai_memories_select on public.dt_ai_memories for select to anon, authenticated using (true);
drop policy if exists dt_ai_memories_insert on public.dt_ai_memories;
create policy dt_ai_memories_insert on public.dt_ai_memories for insert to anon, authenticated with check (true);
drop policy if exists dt_ai_memories_update on public.dt_ai_memories;
create policy dt_ai_memories_update on public.dt_ai_memories for update to anon, authenticated using (true) with check (true);
drop policy if exists dt_ai_memories_delete on public.dt_ai_memories;
create policy dt_ai_memories_delete on public.dt_ai_memories for delete to anon, authenticated using (true);

drop policy if exists dt_game_scores_select on public.dt_game_scores;
create policy dt_game_scores_select on public.dt_game_scores for select to anon, authenticated using (true);
drop policy if exists dt_game_scores_insert on public.dt_game_scores;
create policy dt_game_scores_insert on public.dt_game_scores for insert to anon, authenticated with check (true);
drop policy if exists dt_game_scores_update on public.dt_game_scores;
create policy dt_game_scores_update on public.dt_game_scores for update to anon, authenticated using (true) with check (true);
drop policy if exists dt_game_scores_delete on public.dt_game_scores;
create policy dt_game_scores_delete on public.dt_game_scores for delete to anon, authenticated using (true);
