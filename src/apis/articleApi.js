import apiClient from "@apis/apiClient.js";

const articleApi = {
	getAll: async ({page = 1, limit = 6, keyword = '', category_slug = ''}) => {
		return await apiClient.get('public/article/get-all', {page, limit, keyword, category_slug});
	},
	
	getById: (slug) => {
		return apiClient.get(`public/article/get-by-id/${slug}`,);
	},
};

export default articleApi;
