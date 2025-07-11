import React, {useState} from 'react';
import './BannerSection.scss';
import ConsultationPopup from "@components/Consultation/consultationPopup.jsx";
import {useNavigate} from "react-router";
import {Icon} from "@iconify/react";
import {Carousel} from "antd";
import {useGetBannersQuery} from "@features/banner/bannerSlice.js";
import {Particles} from "@components/magicui/particles.jsx";


const BannerSection = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const {data: banners = [], isLoading: isBannersLoading, error: bannersError} = useGetBannersQuery(
		undefined
		, {
			refetchOnMountOrArgChange: true,
		});
	
	return (
		<section className="banner-section relative max-w-full flex items-center justify-center overflow-hidden"
		         style={{
			         backgroundSize: 'cover',
			         backgroundPosition: 'center',
			         backgroundRepeat: 'no-repeat',
			         maxHeight: '600px',
			         minHeight: '600px'
		         }}>
			<div className="w-full h-[600px] relative">
				<Carousel
					dots={false}
					autoplay
					autoplaySpeed={3000}
					style={{height: "600px"}}
					arrows>
					{
						banners && banners.length > 0 ? (
							banners.map((banner, index) => (
								<img
									key={index}
									className="banner-bg inset-0 bg-cover bg-center bg-no-repeat"
									style={{
										maxHeight: '600px',
										minHeight: '600px'
									}}
									src={banner?.image_url || "/hero-section-bg.svg"}
									alt={`Banner background ${banner.title} ${index + 1}`}
								/>
							))
						) : (
							<img
								className="banner-bg inset-0 bg-cover bg-center bg-no-repeat"
								style={{
									maxHeight: '600px',
									minHeight: '600px'
								}}
								src="/hero-section-bg.svg"
								alt="Default banner background"
							/>
						)
					}
				</Carousel>
			</div>
			<Particles
				className="absolute inset-0 z-0"
				quantity={900}
				ease={10}
				color={'#ffffff'}
				refresh
			/>
			<div className="banner-overlay absolute inset-0  opacity-90">
				<div className="max-w-container relative mx-auto flex items-center justify-between h-full mt-[70px]">
					<div className="banner-content text-white z-10">
						<h1 className="text-6xl font-bold">DỊCH VỤ THIẾT KẾ WEB LANDING PAGE CHUYÊN NGHIỆP</h1>
						<p className="mt-4 text-lg">
							Chuyên thiết kế web Landing Page giúp bạn xây dựng thương hiệu và tăng doanh số bán hàng online hiệu quả.
						</p>
						<div className="mt-6 flex items-center justify-start gap-6">
							<button
								onClick={() => {
									setOpen(!open);
								}}
								className="bg-white px-6 py-2 max-h-[39px] min-h-[39px] w-auto text-black rounded-full hover:bg-white cursor-pointer">
								ĐĂNG KÝ TƯ VẤN MIỄN PHÍ
							</button>
							<button
								onClick={
									() => {
										navigate('/giao-dien');
									}
								}
								className="flex items-center max-h-[39px] gap-1 bg-transparent w-auto border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black cursor-pointer">
								XEM GIAO DIỆN
								<Icon
									icon="mingcute:arrow-right-fill"
									width={23}
								/>
							</button>
						</div>
					</div>
					{/*<div className="marquee--banner flex items-center justify-center w-[50%] h-full">*/}
					{/*	<Marquee speed={50} direction={'down'} className='flex flex-col justify-between  overflow-hidden '*/}
					{/*	>*/}
					{/*		<div className="w-[200px] h-[300px] rounded-3xl overflow-hidden">*/}
					{/*			<img className='w-full h-full object-cover object-center' alt="example" src="https://mona.media/wp-content/uploads/2023/03/screencapture-roam-world-monamedia-net-2024-07-01-15_13_54.png"/>*/}
					{/*		</div>*/}
					{/*		<div className="w-[200px] h-[300px]  rounded-3xl overflow-hidden">*/}
					{/*			<img className='w-full h-full object-cover object-center' alt="example" src="https://mona.media/wp-content/uploads/2023/03/screencapture-primeluxe-monamedia-net-2024-09-05-11_25_06.png"/>*/}
					{/*		</div>*/}
					{/*		<div className="w-[200px] h-[300px]   rounded-3xl overflow-hidden">*/}
					{/*			<img className='w-full h-full object-cover object-center' alt="example" src="https://mona.media/wp-content/uploads/2023/03/screencapture-roam-world-monamedia-net-2024-07-01-15_13_54-400x1710.png"/>*/}
					{/*		</div>*/}
					{/*	</Marquee>*/}
					{/*</div>*/}
				</div>
			</div>
			<ConsultationPopup open={open} setOpen={setOpen}/>
		</section>
	);
};

export default BannerSection;
