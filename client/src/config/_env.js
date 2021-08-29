export const env = {
  PORT: process.env.REACT_APP_API_1_PORT,
  PATH: process.env.REACT_APP_API_1_PATH,
};

export const url = `${env.PATH}:${env.PORT}`;
