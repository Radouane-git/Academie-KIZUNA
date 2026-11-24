-- Planning famille : schéma Supabase
-- À coller dans Supabase > SQL Editor > New query, puis « Run ».
-- Toutes les tables sont protégées : seul un utilisateur connecté (le compte famille)
-- peut lire ou écrire. Le programme de synchronisation utilise la clé « service_role »,
-- qui contourne ces règles et ne doit JAMAIS être mise dans le site.

create extension if not exists pgcrypto;

-- Réglages de la famille (enfants, activités, tâches récurrentes, corvées)
create table if not exists settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- Une ligne par semaine de planning (l'historique est conservé)
create table if not exists plans (
  week_start date primary key,
  data jsonb not null,
  source text not null default 'auto',      -- 'auto' (régénérée) ou 'claude' / 'manuel' (verrouillée)
  updated_at timestamptz not null default now()
);

-- Cases cochées (partagées entre tous les appareils)
create table if not exists checks (
  id text primary key,
  done boolean not null default true,
  updated_at timestamptz not null default now()
);

-- Devoirs ajoutés à la main depuis la page (hors EcoleDirecte)
create table if not exists extras (
  id uuid primary key default gen_random_uuid(),
  child text not null,
  due date not null,
  subject text,
  text text not null,
  kind text not null default 'dev',          -- dev | app | rev | lec
  created_at timestamptz not null default now()
);

-- Journal des synchronisations (affiché dans la page)
create table if not exists sync_log (
  id bigint generated always as identity primary key,
  ran_at timestamptz not null default now(),
  status text not null,                       -- ok | mfa | error
  message text,
  details jsonb
);

-- Réponses à la question de sécurité EcoleDirecte, saisies depuis la page
create table if not exists mfa_answers (
  question text primary key,
  answer text not null,
  created_at timestamptz not null default now()
);

-- Stockage réservé au programme de synchro (jeton d'appareil EcoleDirecte…)
-- Aucune règle d'accès : invisible pour le site.
create table if not exists private_kv (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- « famille » = utilisateur connecté avec e-mail + mot de passe (jamais une connexion anonyme)
create or replace function public.is_family() returns boolean
language sql stable as $$
  select auth.role() = 'authenticated'
     and coalesce((auth.jwt() ->> 'is_anonymous')::boolean, false) = false
$$;

alter table settings    enable row level security;
alter table plans       enable row level security;
alter table checks      enable row level security;
alter table extras      enable row level security;
alter table sync_log    enable row level security;
alter table mfa_answers enable row level security;
alter table private_kv  enable row level security;

drop policy if exists "famille lit settings" on settings;
create policy "famille lit settings" on settings for select to authenticated using (public.is_family());
drop policy if exists "famille modifie settings" on settings;
create policy "famille modifie settings" on settings for all to authenticated using (public.is_family()) with check (public.is_family());

drop policy if exists "famille plans" on plans;
create policy "famille plans" on plans for all to authenticated using (public.is_family()) with check (public.is_family());

drop policy if exists "famille checks" on checks;
create policy "famille checks" on checks for all to authenticated using (public.is_family()) with check (public.is_family());

drop policy if exists "famille extras" on extras;
create policy "famille extras" on extras for all to authenticated using (public.is_family()) with check (public.is_family());

drop policy if exists "famille lit sync_log" on sync_log;
create policy "famille lit sync_log" on sync_log for select to authenticated using (public.is_family());

drop policy if exists "famille mfa" on mfa_answers;
create policy "famille mfa" on mfa_answers for all to authenticated using (public.is_family()) with check (public.is_family());

-- Les coches apparaissent en direct sur les autres appareils
do $$ begin
  alter publication supabase_realtime add table checks;
exception when duplicate_object then null; end $$;

-- Droits d'accès aux tables (les nouveaux projets Supabase ne les donnent plus automatiquement).
-- Les règles RLS ci-dessus continuent de filtrer : seul le compte famille passe.
grant usage on schema public to authenticated, service_role;
grant select, insert, update, delete on settings, plans, checks, extras, mfa_answers to authenticated;
grant select on sync_log to authenticated;
grant all on all tables in schema public to service_role;
grant usage, select on all sequences in schema public to service_role;

-- v0.2.0 : idées de loisirs et de sorties (proposées par les parents)
create table if not exists ideas (
  id uuid primary key default gen_random_uuid(),
  child text not null,                 -- identifiant de l'enfant ou « tous »
  kind text not null default 'autre',  -- lecture | sortie | defi | echecs | sport | autre
  title text not null,
  detail text,
  link text,
  date date,
  time text,
  created_at timestamptz not null default now()
);
alter table ideas enable row level security;
drop policy if exists "famille ideas" on ideas;
create policy "famille ideas" on ideas for all to authenticated using (public.is_family()) with check (public.is_family());
grant select, insert, update, delete on ideas to authenticated;
grant all on ideas to service_role;

-- ============================================================ v0.3.0 : tampons de l'Académie et mot du sensei
create table if not exists public.stamps (
  id uuid primary key default gen_random_uuid(),
  child text not null,
  title text not null,
  note text,
  message text,
  date date default current_date,
  created_at timestamptz default now()
);
create table if not exists public.sensei_messages (
  id uuid primary key default gen_random_uuid(),
  child text not null,
  text text not null,
  created_at timestamptz default now()
);
alter table public.stamps enable row level security;
alter table public.sensei_messages enable row level security;
drop policy if exists "famille stamps" on public.stamps;
create policy "famille stamps" on public.stamps for all to authenticated using (public.is_family()) with check (public.is_family());
drop policy if exists "famille sensei" on public.sensei_messages;
create policy "famille sensei" on public.sensei_messages for all to authenticated using (public.is_family()) with check (public.is_family());
grant select, insert, update, delete on public.stamps, public.sensei_messages to authenticated;

-- ============================================================ v0.3.0 (suite) : bibliothèque des livres lus
create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  child text not null,
  title text not null,
  author text,
  pages integer check (pages is null or pages between 1 and 5000),
  finished date default current_date,
  created_at timestamptz default now()
);
alter table public.books enable row level security;
drop policy if exists "famille books" on public.books;
create policy "famille books" on public.books for all to authenticated using (public.is_family()) with check (public.is_family());
grant select, insert, update, delete on public.books to authenticated;

-- ============================================================ v0.4.0 : cours annulés (prof absent)
create table if not exists public.cancellations (
  id uuid primary key default gen_random_uuid(),
  child text not null,
  date date not null,
  subject text not null,
  start text,
  reason text,
  created_at timestamptz default now()
);
alter table public.cancellations enable row level security;
drop policy if exists "famille cancellations" on public.cancellations;
create policy "famille cancellations" on public.cancellations for all to authenticated using (public.is_family()) with check (public.is_family());
grant select, insert, update, delete on public.cancellations to authenticated;

-- ============================================================ v0.9.0 : difficulté ressentie (1 à 5) sur les missions cochées
alter table public.checks add column if not exists difficulty smallint check (difficulty is null or difficulty between 1 and 5);

-- ============================================================ v0.10.0 : retours des professeurs
create table if not exists public.teacher_notes (
  id uuid primary key default gen_random_uuid(),
  child text not null,
  date date default current_date,
  source text,
  subject text,
  teacher text,
  tone text,
  original text,
  kid_strengths text,
  kid_expect text,
  kid_next text,
  goal text,
  goal_active boolean default true,
  shared boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.teacher_notes enable row level security;
drop policy if exists "famille teacher_notes" on public.teacher_notes;
create policy "famille teacher_notes" on public.teacher_notes for all to authenticated using (public.is_family()) with check (public.is_family());
grant select, insert, update, delete on public.teacher_notes to authenticated;

-- ============================================================ v0.11.0 : idées proposées par les enfants + méthode de travail
alter table public.ideas add column if not exists status text default 'ok';
alter table public.ideas add column if not exists proposed_by text;
alter table public.checks add column if not exists method text;
alter table public.checks add column if not exists minutes smallint;

-- ============================================================ v0.12.0 : conseils de la famille (professeurs, livres)
create table if not exists public.tips (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  source_type text default 'famille',
  source text,
  subject text,
  moments text default 'general',
  child text default 'tous',
  active boolean default true,
  created_at timestamptz default now()
);
alter table public.tips enable row level security;
drop policy if exists "famille tips" on public.tips;
create policy "famille tips" on public.tips for all to authenticated using (public.is_family()) with check (public.is_family());
grant select, insert, update, delete on public.tips to authenticated;
