const getEnvironmentVariable = (
  environmentVariableName: string,
  environmentVariable: undefined | string
) => {
  if (!environmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariableName}`
    );
  } else {
    return environmentVariable;
  }
};

export const config = {
  nodeEnv: getEnvironmentVariable('NODE_ENV', process.env.NODE_ENV),
  apiURL: getEnvironmentVariable(
    'NEXT_PUBLIC_API_URL',
    process.env.NEXT_PUBLIC_API_URL
  ),
  crispWebsiteId: 'c03c561a-cc0f-43b2-9969-ec1f7926b437',
};

/* List of URLS */
export const profil_url = '/espace-personnel/mon-compte';
export const home_url = '/espace-personnel';
export const register_url = '/';
export const login_url = '/?action=signin';
export const ask_reset_password_url = '/auth/mot-de-passe-oublie';
export const reset_password_url = '/auth/reinitialisation';
export const email_verification_url = '/user/confirmation';
export const burrial_wishes_url = '/espace-personnel/volontes-ceremoniales';
export const medical_url = '/espace-personnel/volontes-medicales';
export const administrative_url = '/espace-personnel/demarches-administratives';
export const free_space_url = '/espace-personnel/espace-libre';
export const trusted_users_url = '/espace-personnel/personnes-de-confiance';
export const legators_safe_url = '/espace-personnel/coffre-fort-de-mes-proches';
export const my_account_url = '/espace-personnel/mon-compte';
export const legators_safe_notification_url =
  '/espace-personnel/coffre-fort-de-mes-proches?notification=true';
//define urls that are only accessible once connected
export const protected_urls = [
  burrial_wishes_url,
  profil_url,
  home_url,
  profil_url,
  medical_url,
  administrative_url,
  free_space_url,
  trusted_users_url,
  legators_safe_url,
];

//define urls that should not be accessible when you are connected
export const public_only_urls = [
  register_url,
  login_url,
  email_verification_url,
  ask_reset_password_url,
  reset_password_url,
];
