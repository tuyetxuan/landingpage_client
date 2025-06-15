import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import ZaloRing from "@components/ZaloRing/ZaloRing.jsx";
import HotlineRing from "@components/HotlineRing/HotlineRing.jsx";
import "@styles/index.css";

const __root = ReactDOM.createRoot(document.getElementById("__root"));
__root.render(
	<React.StrictMode>
		{/*<Provider store={store}>*/}
		{/*	<App/>*/}
		{/*</Provider>*/}
		<App/>
		<ZaloRing/>
		<HotlineRing/>
	</React.StrictMode>,
);
