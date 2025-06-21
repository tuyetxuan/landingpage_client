import apiClient from "@apis/apiClient.js";

const webSettingApi = {
	getAll: async () => {
		return await apiClient.get('public/web-settings/get');
	},
};

export default webSettingApi;
