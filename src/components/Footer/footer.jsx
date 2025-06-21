import React, {useEffect, useState} from 'react';
import LogoDK from '@images/img-dangky.png';
import LogoTB from '@images/img-thongbao.png';
import "./footer.scss";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import {useGetWebSettingsQuery} from "@features/services/webSettingsSlice.js";

const Footer = () => {
	const {data: webSettings = {}, isLoading} = useGetWebSettingsQuery();
	
	const [settings, setSettings] = useState({
		websiteName: 'Chưa có thông tin',
		hotline: [],
		email: 'Chưa có thông tin',
		address: 'Chưa có thông tin',
		socialLinks: {facebook: '', instagram: '', twitter: '', youtube: ''},
		websiteUrl: '',
	});
	
	useEffect(() => {
		if (webSettings) {
			const {
				website_name = 'Chưa có thông tin',
				website_url = '',
				contact_info = {},
			} = webSettings;
			
			const {
				hotline = [],
				email = 'Chưa có thông tin',
				address = 'Chưa có thông tin',
				social_links = {facebook: '', instagram: '', twitter: '', youtube: ''},
			} = contact_info;
			
			setSettings({
				websiteName: website_name,
				hotline,
				email,
				address,
				socialLinks: social_links,
				websiteUrl: website_url,
			});
		}
	}, [webSettings]);
	
	const {websiteName, hotline, email, address, socialLinks, websiteUrl} = settings;
	
	return (
		<>
			<div
				className="max-w-full bg-cover bg-center py-16 text-white text-center"
				style={{backgroundImage: 'url(/cta-section-bg.svg)'}}
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
					Tư vấn miễn phí
				</h2>
				<p className="text-sm md:text-base font-light mb-6">
					Bạn cần sự hỗ trợ hoặc tư vấn thêm về thông tin sản phẩm dịch vụ hãy liên hệ ngay với <strong>{websiteName}</strong>
				</p>
				<button className="bg-background-yellow text-black px-6 py-2 rounded-full font-semibold cursor-pointer transition hover-pulse">
					HOTLINE/ZALO: {hotline[0] || 'Chưa có thông tin'}
				</button>
			</div>
			<footer className="text-white bg-black max-w-full text-sm">
				<div className="max-w-header mx-auto flex flex-col items-center justify-between gap-4 md:flex-row p-4">
					<div className="bg-black text-white py-1 px-4 md:px-16">
						<div className="grid grid-cols-1 md:grid-cols-5 gap-5 text-sm">
							<div>
								<h6 className="font-bold mb-2">LIÊN HỆ VỚI {websiteName}</h6>
								{hotline.map((line, index) => (
									<p key={index}>HOTLINE {index + 1}: {line}</p>
								))}
								<p>
									EMAIL:{' '}
									<a href={`mailto:${email}`} className="text-blue">
										{email}
									</a>
								</p>
								<p>{address}</p>
								<div className="flex space-x-3 mt-2 text-xl">
									<a href={socialLinks.facebook}><FaFacebookF/></a>
									<a href={socialLinks.instagram}><FaInstagram/></a>
									<a href={socialLinks.twitter}><FaTwitter/></a>
									<a href={socialLinks.youtube}><FaYoutube/></a>
								</div>
							</div>
							<div>
								<h6 className="font-bold mb-2">DỊCH VỤ</h6>
								<ul className="space-y-1">
									<li>ĐK TÊN MIỀN</li>
									<li>ĐK HOSTING</li>
									<li>TÀI KHOẢN LADIPAGE</li>
									<li>QUẢN TRỊ WEBSITE</li>
									<li>TỐI ƯU SEO WEB</li>
								</ul>
							</div>
							<div>
								<h6 className="font-bold mb-2">HƯỚNG DẪN</h6>
								<ul className="space-y-1">
									<li>CHỌN KHÓI</li>
									<li>CHỌN TIỆN ÍCH</li>
									<li>CHỌN GIAO DIỆN</li>
									<li>CHỈNH SỬA LADIPAGE</li>
									<li>SAO LƯU WEB</li>
								</ul>
							</div>
							<div>
								<h6 className="font-bold mb-2">WEB DỊCH VỤ</h6>
								<ul className="space-y-1">
									<li>SMS BRANDNAME</li>
									<li>EMAIL MARKETING</li>
									<li>DỊCH VỤ AUTO CALL</li>
									<li>QUẢNG CÁO TIKTOK</li>
									<li>QUẢNG CÁO THƯƠNG HIỆU</li>
								</ul>
							</div>
							<div>
								<div className="flex flex-col justify-center items-center gap-3 text-2xl">
									<a href="javascript:void(0)">
										<img
											src={LogoDK}
											alt="Đăng ký"
											className="mx-auto h-20 object-contain"
										/>
									</a>
									<a href="javascript:void(0)">
										<img
											src={LogoTB}
											alt="Thông báo"
											className="mx-auto h-20 object-contain"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-full py-4 text-sm">
					<div className="max-w-container mx-auto mb-2 text-center">
						© {new Date().getFullYear()} {websiteName}. All rights reserved.
					</div>
					<div
						className="max-w-container mx-auto flex flex-wrap justify-center gap-4 text-center"
						style={{color: "#A3A3A3"}}
					>
						<a href="javascript:void(0)" className="hover:underline">
							Dịch vụ thiết kế web
						</a>
						<a href="javascript:void(0)" className="hover:underline">
							Điều khoản sử dụng
						</a>
						<a href="javascript:void(0)" className="hover:underline">
							Chính sách bảo mật
						</a>
						<a href="javascript:void(0)" className="hover:underline">
							Thông tin liên hệ
						</a>
					</div>
				</div>
				<div className="max-w-full py-4 text-sm bg-background-orange text-black">
					<div className="max-w-container mx-auto text-center">
						<p>
							Thiết kế và phát triển bởi{' '}
							<a
								href={websiteUrl}
								className="text-blue hover:underline"
							>
								{websiteName}
							</a>
						</p>
						<p>Địa chỉ: {address}</p>
						<p>
							Hotline: {hotline[0] || 'Chưa có thông tin'} - Email:
							<a href={`mailto:${email}`} className="text-blue hover:underline">
								{email}
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
