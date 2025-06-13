import React from "react";
import {Icon} from "@iconify/react";

const Feature = () => {
	return (
		<>
			<section className="max-w-container py-15 px-4 mx-auto">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div className="flex flex-col items-start gap-1 text-left ">
						<p className="font-bold text-xl">Với nền tảng là doanh nghiệp thiết kế website chuyên nghiệp</p>
						<h2 className="text-[30px] font-bold text-left mb-3">
							Chúng tôi mang đến những tính năng vượt trội cho Landing Page của bạn
						</h2>
						<div className="bg-background-primary rounded-md p-3 mb-3 w-auto">
							<p className="text-lg leading-relaxed font-[500] text-white">
								Các Landing Page đều có các tính năng
							</p>
						</div>
						<div className="flex flex-col items-start justify-center gap-2 w-full">
							<div className="flex flex-nowrap items-start justify-start gap-2 text-background-orange  w-full rounded-l"
							     style={{backgroundColor: "rgb(247, 181, 1, 0.1)", padding: "10px 20px"}}>
								<Icon
									icon="material-symbols:chat-paste-go-2-rounded"
									width={23}
								/>
								<div className="text-[15px] leading-relaxed font-bold">
									CÀI ĐẶT MIỄN PHÍ SSL CHO WEB
								</div>
							</div>
							<div className="flex flex-nowrap items-start justify-start gap-2 text-background-orange  w-full rounded-l"
							     style={{padding: "10px 20px"}}>
								<Icon
									icon="entypo:popup"
									width={23}
									color={"#f79e00"}
								/>
								<div className="text-[15px] leading-relaxed font-bold">
									POPUP HIỂN THỊ THÔNG BÁO
								</div>
							</div>
							<div className="flex flex-nowrap items-start justify-start gap-2 text-background-orange  w-full rounded-l"
							     style={{padding: "10px 20px"}}>
								<Icon
									icon="fluent:form-28-filled"
									width={23}
									color={"#f79e00"}
								/>
								<div className="text-[15px] leading-relaxed font-bold">
									FORM THU THẬP THÔNG TIN
								</div>
							</div>
							<div className="flex flex-nowrap items-start justify-start gap-2 text-background-orange  w-full rounded-l"
							     style={{padding: "10px 20px"}}>
								<Icon
									icon="streamline-ultimate:business-lucky-cat-bold"
									width={23}
									color={"#f79e00"}
								/>
								<div className="text-[15px] leading-relaxed font-bold">
									VÒNG QUAY MAY MẮN
								</div>
							</div>
							<div className="flex flex-nowrap items-start justify-start gap-2 text-background-orange  w-full rounded-l"
							     style={{padding: "10px 20px"}}>
								<Icon
									icon="arcticons:fossify-thankyou"
									width={23}
									color={"#f79e00"}
								/>
								<div className="text-[15px] leading-relaxed font-bold">
									TẠO POPUP CẢM ƠN THANK
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start gap-1 text-left overflow-hidden">
						<div className="relative w-[380px] h-[480px] mx-auto">
							<div className="absolute top-0 left-0 w-[90%] rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
								<img
									src="https://mona.media/template/assets/images/thiet-ke-landing-page/frame-image-01-1920.jpg"
									alt="Ảnh 1"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="absolute top-50 left-30 w-[90%] rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105 z-10">
								<img
									src="https://mona.media/template/assets/images/thiet-ke-landing-page/frame-image-02-1920.jpg"
									alt="Ảnh 2"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				
				</div>
			</section>
		</>
	);
};

export default Feature;
