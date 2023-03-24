import axios from "axios";

const BASE_URL = "https://api-test.innoloft.com";

export const fetchConfigure = async (appId: number) => {
  return fetch(`${BASE_URL}/configuration/${appId}`, { redirect: "follow" });
};

export const fetchProduct = async () => {
  return fetch(`${BASE_URL}/product/6781`, { redirect: "follow" });
};

export const postProduct = async (title: string, content: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = `{title="${title}"\r\n    sdf="${content}"}`;

  return fetch(`${BASE_URL}/product/6781`, {
    method: "PUT",
    redirect: "follow",
    body: raw,
    headers: myHeaders,
  });
};
