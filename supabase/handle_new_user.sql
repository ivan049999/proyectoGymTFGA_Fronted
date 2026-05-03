-- Ejecutar UNA VEZ en Supabase → SQL Editor (como postgres).
-- Crea la fila en public.users cuando se registra un usuario en auth.users
-- (mismo id y correo). La contraseña real queda en Auth; aquí se guarda cadena vacía
-- (ajusta si tu columna contraseña exige otro valor o hazla nullable).

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, correo, contraseña)
  values (new.id, coalesce(new.email, ''), '')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute procedure public.handle_new_user();
