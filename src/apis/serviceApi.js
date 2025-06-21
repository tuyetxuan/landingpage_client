import apiClient from "@apis/apiClient.js";

const serviceApi = {
	getAll: async ({page = 1, limit = 6, keyword = '', categoryId = ''}) => {
		return await apiClient.get('public/service/get-all', {page, limit, keyword, categoryId});
	},
	
	getByIdCategory: (category_id) => {
		return apiClient.get(`public/service/get-by-id-category/${category_id}`);
	},
};

export default serviceApi;
