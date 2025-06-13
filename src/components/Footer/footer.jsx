import React from 'react';
import LogoDK from '@images/img-dangky.png';
import LogoTB from '@images/img-thongbao.png';
import "./footer.scss"

import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';


const Footer = () => {
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
					Bạn cần sự hỗ trợ hoặc tư vấn thêm về thông tin sản phẩm dịch vụ hãy liên hệ ngay với <strong>CCO MEDIA</strong>
				</p>
				<button className="bg-background-yellow text-black px-6 py-2 rounded-full font-semibold cursor-pointer transition hover-pulse">
					HOTLINE/ZALO: 0902 813 410
				</button>
			</div>
			<footer className="text-white bg-black max-w-full text-sm">
				<div className="max-w-container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row p-4 ">
					<div className="bg-black text-white py-1 px-4 md:px-16">
						<div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
							<div>
								<h6 className="font-bold mb-2">LIÊN HỆ VỚI CCO MEDIA</h6>
								<p>HOTLINE 1: 0902 813 410</p>
								<p>HOTLINE 2: 094 1945858</p>
								<p>HOTLINE 3: 0902 884 990</p>
								<p>
									EMAIL:{' '}
									<a href="mailto:info@ccomedia.vn" className="text-blue">
										info@ccomedia.vn
									</a>
								</p>
								<p>154 Phạm Văn Chiêu, Phường 9, Gò Vấp</p>
								<div className="flex space-x-3 mt-2 text-xl">
									<a href="#"><FaFacebookF/></a>
									<a href="#"><FaInstagram/></a>
									<a href="#"><FaTwitter/></a>
									<a href="#"><FaYoutube/></a>
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
											alt=" Đăng ký"
											className="mx-auto h-20 object-contain"
										/>
									</a>
									<a href="javascript:void(0)">
										<img
											src={LogoTB}
											alt=" Thông báo"
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
						© {new Date().getFullYear()} CCO MEDIA. All rights reserved.
					</div>
					<div
						className="max-w-container mx-auto flex flex-wrap justify-center gap-4 text-center"
						style={{color: "#A3A3A3"}}
					>
						<a href="javascript:void(0)" className="hover:underline">
							Dich vụ thiết kế web
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
								href="https://ccomedia.vn"
								className="text-blue hover:underline"
							>
								CCO MEDIA
							</a>
						</p>
						<p>
							Địa chỉ: 154 Phạm Văn Chiêu, Phường 9, Gò Vấp, TP.HCM
						</p>
						<p>
							Hotline: 0902 813 410 - Email:
							<a href="mailto:info@ccomedia.vn" className="text-blue hover:underline">
								info@ccomedia.vn
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	
	);
};

export default Footer;
