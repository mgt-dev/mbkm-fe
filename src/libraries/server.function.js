"use server";

import { getCookie, setCookie } from "vinxi/http";

export const getSetting = async () => {
  return {
    apiUrl: process.env.MBKM_API_URL,
  };
};

export const getAuth = async () => {
  const token = getCookie("auth");
  return { token };
};

/**
 * @param {string} token
 */
export const setAuth = async (token) => {
  setCookie("auth", token, { secure: true, maxAge: 60 * 60 * 24 * 30 });
  return {};
};

export const removeAuth = async () => {
  setCookie("auth", "", { secure: true, maxAge: 0 });
  return {};
};
