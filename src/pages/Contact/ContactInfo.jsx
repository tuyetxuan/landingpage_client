import React from 'react';
import {MailOutlined, PhoneOutlined} from '@ant-design/icons';

const ContactInfoSection = () => {
	return (
		<div className="max-w-full mx-auto">
			<div className="relative w-full bg-white py-10 px-4 md:px-8">
				<div className="relative w-full h-[100vh]">
					{/* Google Maps nền */}
					<iframe
						title="Google Maps"
						className="absolute top-0 left-0 w-full h-full z-0"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1068578843084!2d106.6625013142874!3d10.80099546169365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528dfef43c3f1%3A0xd465ba64ba0d0f62!2zMTYwIEzDqiBUaMOgbmggS2jDoW5nIFTDom4sIFBoxrDhu51uZyAxMSwgUXXDoW4gMywgSOG7kyBDaMOtbmggTWluaCwgSOG7kyBDaMOtbmg!5e0!3m2!1svi!2s!4v1660031207829!5m2!1svi!2s"
						allowFullScreen=""
						loading="lazy"
					></iframe>
					
					{/* Card thông tin liên hệ nổi bên trên */}
					<div className="absolute bg-white/10 backdrop-blur-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        z-10 w-[90%] max-w-3xl  rounded-2xl shadow-2xl p-8 md:p-12">
						
						<h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
							Liên hệ với chúng tôi
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
							{/* Phone */}
							<div className="flex items-center gap-5 bg-white rounded-full p-2 shadow-md">
								<div className="bg-blue-100 text-blue-600 rounded-full p-4 shadow-md">
									<PhoneOutlined className="text-2xl"/>
								</div>
								<div>
									<p className="font-semibold">Số điện thoại</p>
									<a href="tel:0902813410" className="hover:underline">0902 813 410</a>
								</div>
							</div>
							
							{/* Email */}
							<div className="flex items-center gap-5 bg-white rounded-full p-2 shadow-md">
								<div className="bg-blue-100 text-blue-600 rounded-full p-4 shadow-md">
									<MailOutlined className="text-2xl"/>
								</div>
								<div>
									<p className="font-semibold">Email</p>
									<a href="mailto:info@ccomedia.vn" className="hover:underline">info@ccomedia.vn</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfoSection;
