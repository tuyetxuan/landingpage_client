import apiClient from "@apis/apiClient.js";

const submitContactApi = {
	submit: async ({service, name, phone, email, address, message}) => {
		return await apiClient.post('public/contact/submit', {service, name, phone, email, address, message});
	},
};

export default submitContactApi;
