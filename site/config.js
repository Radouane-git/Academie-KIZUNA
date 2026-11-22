// Réglages publics du site. Ces valeurs ne sont pas secrètes :
// la clé « anon » de Supabase est faite pour être dans une page web,
// les données restent protégées par le mot de passe familial (règles RLS).
// NE JAMAIS mettre ici la clé secrète (sb_secret_… ou service_role).
window.PLANNING_CONFIG = {
  SUPABASE_URL: "https://ldfvcosaylgpizdqrpdv.supabase.co",            // ex. "https://abcdefgh.supabase.co"
  SUPABASE_ANON_KEY: "sb_publishable_jb9fOAL43SlL_DEIPj7BNg_nMh_zTjh",       // clé « Publishable » (sb_publishable_…) : Project Settings > API Keys
  FAMILY_EMAIL: "kidz.homeworks@famille.com",            // e-mail du compte famille créé dans Supabase > Authentication
  GITHUB_ACTIONS_URL: ""
};
