import AntdConfig from "@configs/Antd/index.jsx";
import {App as AntdApp} from "antd";
import AppRouter from "./routes/index";
import {useGetWebSettingsQuery} from "@features/services/webSettingsSlice.js";
import ZaloRing from "@components/ZaloRing/zaloRing.jsx";
import HotlineRing from "@components/HotlineRing/hotlineRing.jsx";
import React from "react";

const AppStore = () => {
	const {data: webSettings = [], isLoading, isError, error} = useGetWebSettingsQuery();
	
	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-2xl font-bold text-gray-700">Đang kết nối đến Server ...</div>
			</div>
		);
	}
	
	if (isError) {
		return (
			<div className="fixed inset-0 flex justify-center items-center bg-red-100">
				<div className="text-center p-8 bg-red-500 text-white rounded-lg shadow-lg">
					<h1 className="text-4xl font-bold mb-4">Lỗi Kết Nối Server</h1>
					<p className="text-2xl">
						{"Không thể kết nối đến server. Vui lòng thử lại sau!"}
					</p>
				</div>
			</div>
		);
	}
	
	return (
		<AntdConfig>
			<AntdApp>
				<AppRouter/>
			</AntdApp>
			<ZaloRing/>
			<HotlineRing/>
		</AntdConfig>
	);
};

export default AppStore;
