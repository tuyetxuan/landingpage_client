import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "@styles/index.css";
import {Provider} from "react-redux";
import {store} from "@stores/store.js";

const __root = ReactDOM.createRoot(document.getElementById("__root"));
__root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);
