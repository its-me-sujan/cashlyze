import axios, { type AxiosRequestConfig } from "axios";
import { Action } from "./actions";

let baseUrl = import.meta.env.VITE_API;
if (!baseUrl || baseUrl == "/") {
  baseUrl = "http://127.0.0.1:8000";
}

export const baseURL = baseUrl;

export const api = axios.create({
  baseURL: `${baseUrl}/${Action.API}`,
});

// eslint-disable-next-line
export async function postAPI(
  url: string,
  // eslint-disable-next-line
  data: any,
  config?: AxiosRequestConfig
  // eslint-disable-next-line
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.post(`/${url}/`, data, config);
    apiResponse.then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        // if (
        //   url == Action.RefreshToken &&
        //   (error.status_code == 400 || error.status_code == 401)
        // ) {
        //   resolve({});
        // }
        reject(error);
      }
    );
  });
}

// eslint-disable-next-line
export async function putAPI(
  url: string,
  // eslint-disable-next-line
  data: any,
  config?: AxiosRequestConfig
  // eslint-disable-next-line
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.put(`/${url}/`, data, config);
    apiResponse.then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        // if (
        //   url == Action.RefreshToken &&
        //   (error.status_code == 400 || error.status_code == 401)
        // ) {
        //   resolve({});
        // }
        reject(error);
      }
    );
  });
}

// eslint-disable-next-line
export async function patchAPI(
  url: string,
  // eslint-disable-next-line
  data: any,
  config?: AxiosRequestConfig
  // eslint-disable-next-line
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.patch(`/${url}/`, data, config);
    apiResponse.then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        // if (
        //   url == Action.RefreshToken &&
        //   (error.status_code == 400 || error.status_code == 401)
        // ) {
        //   resolve({});
        // }
        reject(error);
      }
    );
  });
}

// eslint-disable-next-line
export async function deleteAPI(
  url: string,
  config?: AxiosRequestConfig
  // eslint-disable-next-line
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.delete(`/${url}/`, config);
    apiResponse.then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        // if (
        //   url == Action.RefreshToken &&
        //   (error.status_code == 400 || error.status_code == 401)
        // ) {
        //   resolve({});
        // }
        reject(error);
      }
    );
  });
}

// eslint-disable-next-line
export function getAPI(
  url: string,
  query = "",
  config?: AxiosRequestConfig
): Promise<any> {
  return new Promise((resolve, reject) => {
    const apiResponse = api.get(`/${url}/${query}`, config);
    apiResponse.then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
