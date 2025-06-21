import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import webSettingApi from "@apis/webSettingsApi.js";
import {webSettingsService} from "@services/webSettingsService.js";

export const webSettings = createApi({
	reducerPath: "WebSetting",
	baseQuery: fetchBaseQuery({baseUrl: ""}),
	tagTypes: ['WebSetting'],
	endpoints: (builder) => ({
		getWebSettings: builder.query({
			queryFn: async (credentials) => {
				const result = await webSettingApi.getAll(credentials);
				if (result.success) {
					return {data: webSettingsService(result.data?.metadata?.web_settings?.settings || []) || []};
				}
				return {error: {message: result.error, status: result.status}};
			},
			transformResponse: (response) => {
				console.log(webSettingsService(response));
				return webSettingsService(response);
			},
			providesTags: ['WebSetting'],
		})
	}),
});

export const {
	useGetWebSettingsQuery,
} = webSettings;
