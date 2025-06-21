import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import {services} from "@features/services/serviceSlice.js";
import {webSettings} from "@features/services/webSettingsSlice.js";
import {serviceCategories} from "@features/services/serviceCategoriesSlice.js";
import {articleCategories} from "@features/articles/articleCategoriesSlice.js";
import {articles} from "@features/articles/articleSlice.js";
import {sunmitContact} from "@features/contacts/submitContactSlice.js";


export const store = configureStore({
	reducer: {
		[services.reducerPath]: services.reducer,
		[webSettings.reducerPath]: webSettings.reducer,
		[serviceCategories.reducerPath]: serviceCategories.reducer,
		[articleCategories.reducerPath]: articleCategories.reducer,
		[articles.reducerPath]: articles.reducer,
		[sunmitContact.reducerPath]: sunmitContact.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(services.middleware)
			.concat(webSettings.middleware)
			.concat(serviceCategories.middleware)
			.concat(articleCategories.middleware)
			.concat(articles.middleware)
			.concat(sunmitContact.middleware);
	}
});

setupListeners(store.dispatch);
