// resource for handling cookies taken from here:
import cookie from "js-cookie";

/*
 set cookies on the browser after login
 note: cookies are persisted and passed to the server side
 */
export const setCookie = (key: any, value: any) => {
  if (process.browser) {
    cookie.set(key, value);
  }
};

/*
 remove cookies on logout
 */
export const removeCookie = (key: any) => {
  if (process.browser) {
    cookie.remove(key);
  }
};

/*
 supply cookies to both server side request and client side request;
 */
export const getCookie = (key: any, req = {}) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

/*
 get cookies normally from the browser
 */
const getCookieFromBrowser = (key: any) => {
  return cookie.get(key);
};

/*
 get cookies from the server side
 */
const getCookieFromServer = (key: any, req: any) => {
  if (!req.headers?.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c: any) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};
