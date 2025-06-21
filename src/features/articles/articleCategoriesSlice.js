import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import articleCategoriesApi from "@apis/articleCategoriesApi.js";

export const articleCategories = createApi({
	reducerPath: "ArticleCategories",
	baseQuery: fetchBaseQuery({baseUrl: ""}),
	tagTypes: ['ArticleCategories'],
	endpoints: (builder) => ({
		getArticleCategories: builder.query({
			queryFn: async (credentials) => {
				const result = await articleCategoriesApi.getAll(credentials);
				if (result.success) {
					return {data: result.data?.metadata?.article_categories};
				}
				return {error: {message: result.error, status: result.status}};
			},
			providesTags: ['ArticleCategories'],
		}),
	}),
});

export const {
	useGetArticleCategoriesQuery,
} = articleCategories;
