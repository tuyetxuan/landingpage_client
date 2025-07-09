import React from "react";
import {Marquee} from "@/components/magicui/marquee";

const customers = [
	"logo-khach-hang-ccomedia1",
	"logo-khach-hang-ccomedia3",
	"logo-khach-hang-ccomedia4",
	"logo-khach-hang-ccomedia5",
	"logo-khach-hang-ccomedia6",
	"logo-khach-hang-ccomedia11",
	"logo-khach-hang-ccomedia10",
	"logo-khach-hang-ccomedia9",
	"logo-khach-hang-ccomedia7",
	"logo-khach-hang-ccomedia2",
];

const CustomerLogo = ({name}) => {
	return (
		<div className="flex items-center justify-center w-[250px] h-[150px] mx-4 rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]">
			<img
				loading="lazy"
				src={`https://dichvulandingpage.com/wp-content/uploads/2022/11/${name}-150x150.png`}
				alt="logo khách hàng"
				className="w-full h-full object-contain rounded-xl "
			/>
		</div>
	);
};

const CustomerLogoMarquee = () => {
	return (
		<div
			className="max-w-container mx-auto py-16 px-4 relative"
			style={{
				backgroundImage:
					"url(https://mona.media/template/assets/images/tkw-never-stop/h-procedure-blur.png)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="max-w-5xl mx-auto text-center mb-12">
				<h2 className="text-4xl font-bold text-black lg:text-5xl">
					KHÁCH HÀNG CỦA CHÚNG TÔI
				</h2>
				<p className="mt-4 text-lg leading-relaxed text-gray-600">
					Giúp doanh nghiệp bạn phát triển và để bạn cùng LÀM ĂN LÂU DÀI với CCOMEDIA.
					Sử dụng chất xám của CCOMEDIA để kiếm được nhiều tiền về cho bạn.
					Triển khai được nhiều phi vụ làm ăn vào đúng định hướng.
				</p>
			</div>
			<Marquee pauseOnHover className="[--duration:50s]">
				{[...customers, ...customers].map((logo, idx) => (
					<CustomerLogo key={`row1-${idx}`} name={logo}/>
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:70s] mt-6">
				{[...customers, ...customers].map((logo, idx) => (
					<CustomerLogo key={`row2-${idx}`} name={logo}/>
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"/>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"/>
		</div>
	);
};

export default CustomerLogoMarquee;
