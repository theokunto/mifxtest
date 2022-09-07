import axios from "axios";
import store from "../redux/store";
import { PREFIX_URL } from "../variables/urls";

export const hitApi = axios.create({
    baseURL: `${PREFIX_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
})

Object.setPrototypeOf(hitApi, axios)

hitApi.interceptors.request.use(
    (config) => {
        if (!config.url.includes("login") && !config.url.includes("register")) {
            config.headers.Authorization = store.getState().auth.token
        } else {
            config.headers.Authorization = ""
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

hitApi.interceptors.response.use(
    (result) => {
        return result
    },
    (error) => {
        return Promise.reject(error)
    }
)