import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import serviceApi from "@apis/serviceApi.js";

export const services = createApi({
	reducerPath: "Services",
	baseQuery: fetchBaseQuery({baseUrl: ""}),
	tagTypes: ['Services'],
	endpoints: (builder) => ({
		getServices: builder.query({
			queryFn: async (credentials) => {
				const result = await serviceApi.getAll({page: credentials?.page || 1, limit: credentials?.limit || 6, keyword: credentials?.keyword || '', categoryId: credentials?.categoryId || ''});
				if (result.success) {
					return {data: result.data?.metadata || []};
				}
				return {error: {message: result.error, status: result.status}};
			},
			providesTags: ['Services'],
		}),
		getByIdCategory: builder.query({
			queryFn: async (category_id) => {
				const result = await serviceApi.getByIdCategory(category_id);
				if (result.success) {
					return {data: result.data?.metadata?.services || []};
				}
				return {error: {message: result.error, status: result.status}};
			}
		}),
	}),
});

export const {
	useGetServicesQuery,
	useGetByIdCategoryQuery,
} = services;
