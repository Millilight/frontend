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
