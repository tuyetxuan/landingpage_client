import apiClient from "@apis/apiClient.js";

const serviceCategoriesApi = {
	getAll: async () => {
		return await apiClient.get('public/service-category/get-all');
	},
};

export default serviceCategoriesApi;
