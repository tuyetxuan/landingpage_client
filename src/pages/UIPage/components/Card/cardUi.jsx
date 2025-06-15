import {Button} from "antd";
import {ArrowRightOutlined, EyeOutlined} from "@ant-design/icons";
import React from "react";

export default function WebsiteCard() {
	return (
		<div className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-[300px] mx-auto bg-white cursor-pointer">
			<div className="relative h-[420px] overflow-hidden">
				<img
					src="https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/bat-dong-san-05-20250410073550-0ha51.jpg"
					alt="Web demo"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-neutral-600/60 to-neutral-700/80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:translate-x-0 translate-x-[-100%]"></div>
				<div className="absolute inset-0 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<Button
						type="primary"
						size="large"
						icon={<EyeOutlined/>}
						className="bg-orange-500 hover:bg-orange-600 text-white px-6 font-semibold"
					>
						Xem Live
					</Button>
					<Button
						size="large"
						icon={<ArrowRightOutlined/>}
						className="bg-white/10 backdrop-blur-sm text-white px-6 font-medium"
					>
						Chi tiết web mẫu
					</Button>
				</div>
			</div>
			<div className="p-4 text-left">
				<h3 className="text-base font-semibold text-gray-800">
					Mẫu Website Dịch Vụ Du Lịch Đơn Giản - Hiện Đại
				</h3>
				<div className="flex gap-2 mt-2">
					<span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">
						BOOKING - ĐẶT VÉ
					</span>
					<span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">
						DU LỊCH
					</span>
				</div>
			</div>
		</div>
	);
}
