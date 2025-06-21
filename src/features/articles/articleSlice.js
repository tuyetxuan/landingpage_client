import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import articleApi from "@apis/articleApi.js";

export const articles = createApi({
	reducerPath: "Articles",
	baseQuery: fetchBaseQuery({baseUrl: ""}),
	tagTypes: ['Articles'],
	endpoints: (builder) => ({
		getArticles: builder.query({
			queryFn: async (credentials) => {
				const result = await articleApi.getAll({page: credentials?.page || 1, limit: credentials?.limit || 6, keyword: credentials?.keyword || '', category_slug: credentials?.category_slug || ''});
				if (result.success) {
					return {data: result.data?.metadata || []};
				}
				return {error: {message: result.error, status: result.status}};
			},
			providesTags: ['Articles'],
		}),
		getById: builder.query({
			queryFn: async (slug) => {
				const result = await articleApi.getById(slug);
				if (result.success) {
					return {data: result.data?.metadata?.article || []};
				}
				return {error: {message: result.error, status: result.status}};
			}
		}),
	}),
});

export const {
	useGetArticlesQuery,
	useGetByIdQuery,
} = articles;
