import React from 'react';
import ServiceCard from "@pages/ServicePage/components/ServiceCard/serviceCard.jsx";

const ServiceSection = () => {
	const services = [
		{
			title: "THIẾT KẾ LANDING PAGE",
			description: "Chuyên thiết kế các mẫu giao diện Landing Page mới linh hoạt",
			icon: "https://w.ladicdn.com/s1300x1150/57b167caca57d39c18a1c57e/asset-47-8-20250512084314-cecwz.png",
		},
		{
			title: "TỐI ƯU LANDING PAGE",
			description: "Chỉnh sửa và tối ưu Landing Page giúp web load nhanh và chuẩn SEO",
			icon: "https://w.ladicdn.com/s1150x700/57b167caca57d39c18a1c57e/asset-12x-8-20250507065010-lsqye.png",
		},
		{
			title: "QUẢN LÝ TRANG WEB",
			description: "Giúp quản trị web giữ ban đầu và giữ gian hàng luôn hoạt động",
			icon: "https://w.ladicdn.com/s1150x1050/57b167caca57d39c18a1c57e/asset-422x-8-20250509101250-r8fms.png",
		},
		{
			title: "QUẢNG CÁO ONLINE",
			description: "Cung cấp từ gói chạy quảng cáo đến báo cáo chi tiết hàng tháng Doanh Số",
			icon: "https://w.ladicdn.com/s1150x650/57b167caca57d39c18a1c57e/asset-41-8-20250509095232-7tnbv.png",
		},
	];
	
	return (
		<div className="max-w-container mx-auto py-15">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">DỊCH VỤ ĐANG CUNG CẤP</h2>
				<p className="mt-4 text-lg leading-relaxed text-gray-600">
					Chúng tôi luôn sẵn sàng cung cấp cho bạn những giải pháp dịch vụ website landing page tốt nhất để giúp bạn tối ưu chi phí quảng cáo, gia tăng khách hàng và xây dựng thương hiệu mạnh mẽ.
				</p>
			</div>
			<div className="py-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
				{services.map((service, index) => (
					<ServiceCard key={index} {...service} />
				))}
			</div>
		</div>
	);
};

export default ServiceSection;
