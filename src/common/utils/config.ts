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
};

/* List of URLS */
export const profil_url = '/profil';
export const home_url = '/espace-personnel';
export const register_url = '/';
export const login_url = '/?action=signin';
export const ask_reset_password_url = '/auth/mot-de-passe-oublie';
export const reset_password_url = '/auth/reset_password';
export const email_verification_url = '/user/confirmation';
export const burrial_wishes_url = '/espace-personnel/volontes-ceremoniales';
export const medical_url = '/espace-personnel/volontes-medicales';
export const administrative_url = '/espace-personnel/demarches-administratives';
export const free_space_url = '/espace-personnel/espace-libre';
export const trust_people_url = '/espace-personnel/personnes_de_confiance';
//define urls that are only accessible once connected
export const protected_urls = [
  burrial_wishes_url,
  profil_url,
  home_url,
  profil_url,
  medical_url,
  administrative_url,
  free_space_url,
  trust_people_url,
];

//define urls that should not be accessible when you are connected
export const public_only_urls = [
  register_url,
  login_url,
  email_verification_url,
  ask_reset_password_url,
  reset_password_url,
];
