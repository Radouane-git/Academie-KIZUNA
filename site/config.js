// Réglages publics du site. Ces valeurs ne sont pas secrètes :
// la clé « anon » de Supabase est faite pour être dans une page web,
// les données restent protégées par le mot de passe familial (règles RLS).
// NE JAMAIS mettre ici la clé « service_role ».
window.PLANNING_CONFIG = {
  SUPABASE_URL: "",            // ex. "https://abcdefgh.supabase.co"
  SUPABASE_ANON_KEY: "",       // Supabase > Project Settings > API > anon public
  FAMILY_EMAIL: "",            // e-mail du compte famille créé dans Supabase > Authentication
  GITHUB_ACTIONS_URL: "https://github.com/Radouane-git/Kidz-Homeworks/actions/workflows/sync.yml"
};
