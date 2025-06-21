import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import serviceCategoriesApi from "@apis/serviceCategoriesApi.js";

export const serviceCategories = createApi({
	reducerPath: "ServiceCategories",
	baseQuery: fetchBaseQuery({baseUrl: ""}),
	tagTypes: ['ServiceCategories'],
	endpoints: (builder) => ({
		getServiceCategories: builder.query({
			queryFn: async (credentials) => {
				const result = await serviceCategoriesApi.getAll(credentials);
				if (result.success) {
					return {data: result.data?.metadata?.service_categories};
				}
				return {error: {message: result.error, status: result.status}};
			},
			providesTags: ['ServiceCategories'],
		}),
	}),
});

export const {
	useGetServiceCategoriesQuery,
} = serviceCategories;
