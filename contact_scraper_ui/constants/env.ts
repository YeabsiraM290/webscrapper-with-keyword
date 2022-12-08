export interface EnvVariables {
  apiUrl: string;
}

const env: EnvVariables = {
  apiUrl: process.env.API_URL ?? "",
};

export default env;
