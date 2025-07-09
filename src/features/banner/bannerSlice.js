import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import bannerApi from "@apis/bannerApi.js";

export const banners = createApi({
	reducerPath: "Banners",
	baseQuery: fetchBaseQuery({baseUrl: ""}),
	tagTypes: ['Banners'],
	endpoints: (builder) => ({
		getBanners: builder.query({
			queryFn: async (credentials) => {
				const result = await bannerApi.getAll(credentials);
				if (result.success) {
					return {data: result.data?.metadata?.banners || []};
				}
				return {error: {message: result.error, status: result.status}};
			},
			providesTags: ['Banners'],
		}),
	}),
});

export const {
	useGetBannersQuery,
} = banners;
