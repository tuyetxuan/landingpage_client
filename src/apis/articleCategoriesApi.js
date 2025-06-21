import apiClient from "@apis/apiClient.js";

const articleCategoriesApi = {
	getAll: async () => {
		return await apiClient.get('public/article-category/get-all');
	},
};

export default articleCategoriesApi;
