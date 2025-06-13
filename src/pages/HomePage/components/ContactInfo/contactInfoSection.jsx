import React from 'react';
import {MailOutlined, PhoneOutlined} from '@ant-design/icons';

const ContactInfoSection = () => {
	return (
		<div className="relative w-full h-[400px] md:h-[500px]">
			<iframe
				title="Google Maps"
				className="absolute top-0 left-0 w-full h-full z-0"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1068578843084!2d106.6625013142874!3d10.80099546169365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528dfef43c3f1%3A0xd465ba64ba0d0f62!2zMTYwIEzDqiBUaMOgbmggS2jDoW5nIFTDom4sIFBoxrDhu51uZyAxMSwgUXXDoW4gMywgSOG7kyBDaMOtbmggTWluaCwgSOG7kyBDaMOtbmg!5e0!3m2!1svi!2s!4v1660031207829!5m2!1svi!2s"
				allowFullScreen=""
				loading="lazy"
			></iframe>
			
			<div className="absolute top-1/2 left-1/2 z-10
					bg-white/10 backdrop-blur-sm
					p-8 rounded-xl shadow-xl
					transform -translate-x-1/2 -translate-y-1/2
					w-[90%] max-w-lg text-center border border-white/30"
			>
				<h2 className="text-2xl font-bold text-blue mb-4">Liên hệ với chúng tôi</h2>
				<div className="space-y-4 text-gray-800 text-base">
					<div className="flex items-center justify-center gap-3">
						<PhoneOutlined className="text-blue text-xl"/>
						<span>0902 813 410</span>
					</div>
					<div className="flex items-center justify-center gap-3">
						<MailOutlined className="text-blue text-xl"/>
						<span>info@ccomedia.vn</span>
					</div>
				</div>
			</div>
		
		</div>
	);
};

export default ContactInfoSection;
