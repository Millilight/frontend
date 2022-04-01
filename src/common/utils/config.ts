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
export const register_url = '/';
export const login_url = '/?action=signin';
export const email_verification_url = '/verification';
export const burrial_wishes_url = '/volontes-ceremoniales';

//define urls that are only accessible once connected
export const protected_urls = [burrial_wishes_url, profil_url];

//define urls that should not be accessible when you are connected
export const public_only_urls = [register_url, login_url];
