import { AxiosResponse } from "axios";

export const authorizationHeader = (): { [index: string]: string } => {
  const token = getCookies("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export const fileDownloader = (
  response: AxiosResponse<any>,
  fileName: string
) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
};

export const signOut = () => {
  // Object.keys(CookieConstant).forEach((item) => {
  //   setCookies(item, "", 1);
  // });
};

export const getCookies = (name: string) => {
  let cookies = document.cookie.split(";");

  let response = cookies.find(cookie => {
    return cookie.match(name);
  });

  return response ? response.split("=")[1] : "";
};

export const setCookies = (
  name: string,
  value: string,
  maxAge?: number,
  expires?: string
) => {
  document.cookie = `${name}=${value}; max-age=${maxAge}; expires=${expires}`;
};
