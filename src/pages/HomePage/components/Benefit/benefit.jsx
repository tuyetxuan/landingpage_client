import React from "react";

const Benefit = () => {
	return (
		<div className="max-w-container py-15 mx-auto">
			<div className="max-w-3xl mx-auto text-center ">
				<h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">
					NHỮNG LỢI ÍCH KHI SỬ DỤNG DỊCH VỤ CỦA CHÚNG TÔI
				</h2>
				<p className="mt-4 text-lg leading-relaxed text-gray-600">
					Chúng tôi luôn sẵn sàng cung cấp cho bạn những giải pháp dịch vụ website landing page tốt nhất để giúp bạn tối ưu chi phí quảng cáo, gia tăng khách hàng và xây dựng thương hiệu mạnh mẽ.
				</p>
			</div>
			<div className="max-w-[1200px] py-2 px-4 mx-auto space-y-2">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="md:w-1/2 text-center md:text-left">
						<p className="text-3xl text-blue-500 font-extrabold mb-2">01</p>
						<h3 className="text-3xl font-bold text-black ">THIẾT KẾ NHANH CHÓNG</h3>
						<p className="mt-4 text-xl leading-relaxed text-gray-600">
							Thời gian hoàn thành thiết kế Landing Page từ 1- 3 ngày và có thể nhanh hơn tuỳ thuộc vào yêu cầu và những thông tin mà khách hàng cung cấp
						</p>
					</div>
					<div className="w-[30px]"></div>
					<div className="md:w-1/2 flex justify-center">
						<img
							src="https://dichvulandingpage.com/wp-content/uploads/2022/11/Thoi-gian-thiet-ke-landing-page.png"
							alt="Thiết kế nhanh chóng"
							className="w-[60%] max-w-md rounded-xl object-contain"
						/>
					</div>
				</div>
				<div className="flex flex-col md:flex-row-reverse items-center gap-8">
					<div className="md:w-1/2 text-center md:text-left">
						<p className="text-3xl text-blue-500 font-extrabold mb-2">02</p>
						<h3 className="text-3xl font-bold text-black ">LANDING PAGE THU HÚT</h3>
						<p className="mt-4 text-xl leading-relaxed text-gray-600">
							Landing page thiết kế với nội dung hấp dẫn và thu hút giúp nâng cao TỶ LỆ CHUYỂN ĐỔI thông qua các biểu mẫu đăng ký có trên website
						</p>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<img
							src="https://dichvulandingpage.com/wp-content/uploads/2022/11/Noi-dung-landing-page-thu-hut-khach-hang.png"
							alt="Landing Page thu hút"
							className="w-[60%] max-w-md rounded-xl object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefit;
