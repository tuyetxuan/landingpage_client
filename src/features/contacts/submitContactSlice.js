import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import submitContactApi from "@apis/submitContact.js";

export const sunmitContact = createApi({
	reducerPath: "SubmitContact",
	baseQuery: fetchBaseQuery({baseUrl: ""}),
	tagTypes: ['SubmitContact'],
	endpoints: (builder) => ({
		submitContact: builder.mutation({
			queryFn: async ({service, name, phone, email, address, message}) => {
				const result = await submitContactApi.submit({service, name, phone, email, address, message});
				if (result.success) {
					return {data: result.data?.metadata};
				}
				return {error: {message: result.error, status: result.status}};
			},
		}),
	}),
});

export const {
	useSubmitContactMutation,
} = sunmitContact;
