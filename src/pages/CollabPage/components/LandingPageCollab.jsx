import React from "react";

const LandingPageCollab = () => {
	return (
		<>
			<div className="max-w-container mx-auto text-center">
				<h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl uppercase">Hợp tác thiết kế Landing Page</h2>
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-between bg-white p-6 lg:p-12 max-w-screen-xl mx-auto">
				<div className="lg:w-1/2 space-y-5">
					<p className="text-gray-700">
						Xin chào bạn, nếu bạn đang như cầu sau thì hãy nhanh tay liên hệ ngay
						với chúng tôi để hợp tác bạn nhé:
					</p>
					<ul className="list-decimal list-inside text-gray-700 space-y-2">
						<li>
							Bạn đang có hệ thống giải pháp giúp thiết kế các trang{" "}
							<span className="font-bold">LANDING PAGE</span> nhanh gọn và đang tìm các bên để phân phối tiếp thị tới khách hàng.
						</li>
						<li>
							Bạn đang muốn học hỏi để có thể tự biết thiết kế landing page hoặc
							muốn tìm việc làm thiết kế trang landing page online.
						</li>
					</ul>
					<p className="text-gray-700">
						<span className="font-bold text-blue-600">VẬY</span> thì bạn đã tìm
						đúng nơi để hợp tác rồi, chúng tôi sẵn sàng hợp tác cùng bạn để đôi
						bên cùng <span className="font-bold">WIN WIN</span>.
					</p>
					<p className="text-gray-700">
						Nếu bạn đang có nhu cầu hãy liên hệ ngay để chúng ta cùng trao đổi chi
						tiết bạn nhé.
					</p>
					<div className="mt-4">
						<a
							href="tel:0902813410"
							className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition"
						>
							HOTLINE/ZALO: 0902 813 410
						</a>
					</div>
				</div>
				<div className="w-1/2 mt-10 lg:mt-0 flex justify-center">
					<img
						src="https://dichvulandingpage.com/wp-content/uploads/elementor/thumbs/hop-tac-thiet-ke-landingpage-pxvud6zrgqfxv22iq7mkd6al0qcgp5fb83f9wo2748.png"
						alt="Collaboration Illustration"
						className="w-[70%] h-auto"
					/>
				</div>
			</div>
		</>
	
	);
};

export default LandingPageCollab;
