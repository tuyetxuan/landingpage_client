import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:5551/api/v1/",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});
let refreshTokenRequest = null;

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		} else {
			console.warn("No access token found in localStorage");
		}
		return config;
	},
	(error) => {
		console.error("Request error:", error);
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		const status = error.response?.status;
		const errorMessage = error.response?.data?.message || "Unknown error";
		if (
			status === 401 &&
			errorMessage.includes("Token expired") &&
			!originalRequest._retry
		) {
			originalRequest._retry = true;
			try {
				refreshTokenRequest =
					refreshTokenRequest ||
					axios.post(
						"/refresh-token",
						{refreshToken: localStorage.getItem("refreshToken")},
					);
				const {data} = await refreshTokenRequest;
				const {accessToken, refreshToken} = data;
				localStorage.setItem("accessToken", accessToken);
				localStorage.setItem("refreshToken", refreshToken);
				refreshTokenRequest = null;
				originalRequest.headers.Authorization = `Bearer ${accessToken}`;
				return axiosInstance(originalRequest);
			} catch (refreshError) {
				console.error("Refresh token failed:", refreshError);
				localStorage.removeItem("accessToken");
				localStorage.removeItem("refreshToken");
				refreshTokenRequest = null;
				window.location.href = "/login";
				return Promise.reject(refreshError);
			}
		}
		if (status === 403) {
			console.error(
				"Forbidden: You do not have permission to access this resource",
			);
		} else if (status === 400) {
			console.error("Bad Request:", errorMessage);
		} else if (status === 500) {
			console.error("Server Error:", errorMessage);
		}
		return Promise.reject(error);
	},
);

export default axiosInstance;
