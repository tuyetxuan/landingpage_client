import apiClient from "@apis/apiClient.js";

const bannerApi = {
	getAll: async () => {
		return await apiClient.get('public/banner/get-all');
	},
};

export default bannerApi;
