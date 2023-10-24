export const API_URL =
  process.env.NODE_ENV === "development"
    ? `${process.env.API_URL_LOCAL}/api`
    : `${process.env.API_URL_PROD}/api`;
