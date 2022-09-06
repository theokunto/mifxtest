import axios from "axios";
import store from "../redux/store";
import { PREFIX_URL } from "../variables/urls";

export const HitApi = axios.create({
    baseURL: `${PREFIX_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
})

Object.setPrototypeOf(HitApi, axios)

HitApi.interceptors.request.use(
    (config) => {
        if (!config.url.includes("login")) {
            config.headers.Authorization = store.getState().auth.authKey
        } else {
            config.headers.Authorization = ""
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

HitApi.interceptors.response.use(
    (result) => {
        return result
    },
    (error) => {
        return Promise.reject(error)
    }
)