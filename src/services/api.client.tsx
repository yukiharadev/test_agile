import axios from "axios";
import { BASE_URL, REFRESH_TOKEN_URL } from "../configs/api.url";

const TIMEOUT = 10000;
const controller = new AbortController();

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: TIMEOUT,
    signal: controller.signal,
});



apiClient.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        console.log("Request error:", error);
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if(error.response.status === 401 || !originalRequest._retry){
            console.log("401");
            originalRequest._retry = true;
            try{
                const refreshToken = localStorage.getItem("refreshToken");
                if(!refreshToken){
                    return Promise.reject(error);
                }
                const response = await apiClient.post(REFRESH_TOKEN_URL, {
                    refreshToken,
                });
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                return apiClient(originalRequest);
            }catch(refreshError){
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = "/auth/login";
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;   
