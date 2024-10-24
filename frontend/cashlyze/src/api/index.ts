import axios, { type AxiosRequestConfig } from "axios";
import { Action } from "@/api/actions";
import router from "@/router";

import { useToast } from "vue-toastification";

import { useJwtStore } from "@/stores/jwt";
const toast = useToast();

let baseUrl = import.meta.env.VITE_API;
if (!baseUrl || baseUrl == "/") {
  baseUrl = "";
}

export const baseURL = baseUrl;

export const api = axios.create({
  baseURL: `${baseUrl}/${Action.API}`,
});

api.defaults.xsrfCookieName = "csrftoken";
api.defaults.xsrfHeaderName = "X-CSRFToken";
api.defaults.headers.common["Camel-Case"] = true;

export function JwtExpired(): boolean {
  const JwtStore = useJwtStore();
  const exp = JwtStore.DecodedPayload.exp;
  const now = Math.floor(new Date().getTime() / 1000);
  if (exp <= now) {
    return true;
  }
  return false;
}

async function refreshing() {
  const JwtStore = useJwtStore();
  while (JwtStore.RefreshingToken) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return false;
}

api.interceptors.request.use(
  async (config) => {
    const JwtStore = useJwtStore();
    if (config.url != `/${Action.RefreshToken}/` && JwtStore.RefreshingToken) {
      await refreshing();
    }
    if (
      config.url != `/${Action.ClearToken}/` &&
      config.url != `/${Action.RefreshToken}/` &&
      config.url != `/${Action.Token}/` &&
      JwtStore.AccessToken &&
      JwtStore.AccessToken != ""
    ) {
      if (JwtExpired()) {
        JwtStore.refreshingToken();
        await JwtStore.refreshAccessToken();
      }
      if (config && config.headers) {
        config.headers.Authorization = "Bearer " + JwtStore.AccessToken;
      }
    } else {
      if (config && config.headers) {
        delete config.headers.Authorization;
      }
    }
    // LoadingBar.start();
    // LoadingBar.increment(0.5);

    return config;
  },
  (error) => {
    // LoadingBar.stop();
    // LoadingBar.increment(1);
    // Notify.create({
    //   type: "negative",
    //   message: error,
    // });
    // const toast = useToast();
    // if (toast) {
    //   toast.error({ title: "Error", body: error }, { variant: "danger" });
    // }
    return new Promise(error);
  }
);

api.interceptors.response.use(
  (config) => {
    // LoadingBar.stop();
    // LoadingBar.increment(1);
    return config;
  },
  (error) => {
    const JwtStore = useJwtStore();
    // LoadingBar.stop();
    // LoadingBar.increment(1);
    console.log(error);

    /** Handler for logging out if refresh token is expired */
    if (error.response.config.url == `/${Action.RefreshToken}/`) {
      if (error.response.status == 401) {
        if (error.response.data.message != "NoError") {
          JwtStore.clearJWT().then(() => {
            router.push({ name: "Home" });
            // Notify.create({
            //   message: "You have been logged out! Please login again",
            //   type: "negative",
            //   position: "top-right",
            // });
            // const toast = useToast();
            // if (toast) {
            //   toast.show(
            //     {
            //       title: "Logged out",
            //       body: "You have been logged out! Please login again",
            //     },
            //     { variant: "danger" }
            //   );
            // }
          });
          return Promise.reject(error);
        }
      }
    }

    /** Handler for refreshing access token */
    if (error.response.config.url != `/${Action.RefreshToken}/`) {
      if (
        (error.response.status == 403 || error.response.status == 401) &&
        error.response.data.message == "Token is invalid or expired"
      ) {
        JwtStore.refreshingToken();
        JwtStore.refreshAccessToken().then(() => {
          const config = error.response.config;
          if (JwtStore.AccessToken && JwtStore.AccessToken != "") {
            config.headers.Authorization = `Bearer ${JwtStore.AccessToken}`;
            api.request(config);
          }
          return config;
        });
        return new Promise(error.response.config);
      }
    }

    /** Handler for error response with and without message */
    if (error.response.data.message) {
      if (error.response.data.message != "NoError") {
        if (toast) {
          toast.error(error.response.data.message);
        }
      }
    } else {
      if (toast) {
        toast.error("Network Error");
      }
    }
    return new Promise(error);
  }
);

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
        if (
          url == Action.RefreshToken &&
          (error.status_code == 400 || error.status_code == 401)
        ) {
          resolve({});
        }
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
