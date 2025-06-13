import React from 'react';
import {Collapse} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import faq from '@/assets/images/faq.png';

const {Panel} = Collapse;

const FAQSection = () => {
	const customExpandIcon = ({isActive}) =>
		isActive ? <UpOutlined style={{fontSize: 16}}/> : <DownOutlined style={{fontSize: 16}}/>;
	
	const faqData = [
		{
			question: '1. Khi nào nên làm Landing Page?',
			answer: (
				<ul className="list-disc ml-6 text-gray-700 space-y-2">
					<li>Landing Page là trang web tập trung vào một mục tiêu cụ thể, không đa nhiệm như các website thông thường.</li>
					<li>Thường dùng để chạy quảng cáo, giới thiệu sản phẩm, tổ chức sự kiện, hay thu hút khách hàng tiềm năng.</li>
				</ul>
			),
		},
		{
			question: '2. Landing Page có SEO được không?',
			answer: (
				<p className="text-gray-700">
					Có, nhưng cần có kiến thức và kinh nghiệm để tối ưu. <strong>MONA</strong> cung cấp dịch vụ SEO chuyên nghiệp để giúp Landing Page của bạn đạt hiệu quả tốt nhất trên công cụ tìm kiếm.
				</p>
			),
		},
		{
			question: '3. Landing Page và trang chủ khác nhau như thế nào?',
			answer: (
				<ul className="list-disc ml-6 text-gray-700 space-y-2">
					<li><strong>Số trang và URL:</strong> Landing Page thường chỉ có 1 URL, trong khi trang chủ chứa nhiều trang con.</li>
					<li><strong>Giao diện:</strong> Landing Page đơn giản, tập trung vào 1 dịch vụ; trang chủ phức tạp và đa dạng nội dung hơn.</li>
					<li><strong>Mục đích sử dụng:</strong> Landing Page nhằm tăng chuyển đổi; trang chủ là nơi cung cấp thông tin chính thức về doanh nghiệp.</li>
				</ul>
			),
		},
		{
			question: '4. Landing Page có tương thích với thiết bị di động không?',
			answer: (
				<p className="text-gray-700">
					Có. Khi thiết kế tại <strong>MONA.Media</strong>, trang web sẽ hiển thị tốt trên điện thoại, máy tính bảng và các thiết bị khác.
				</p>
			),
		},
		{
			question: '5. Landing Page có tích hợp được công cụ tiếp thị không?',
			answer: (
				<p className="text-gray-700">
					Có thể tích hợp với email marketing, quảng cáo PPC, hệ thống CRM,… để nâng cao hiệu quả tiếp thị. MONA cũng cung cấp các dịch vụ Email Marketing, Ads và phần mềm quản lý khách hàng chuyên nghiệp.
				</p>
			),
		},
	];
	
	return (
		<div className="w-full px-6 md:px-20 py-15 relative">
			<div className="max-w-container mx-auto relative z-10">
				<div className="grid md:grid-cols-2 gap-10 items-start">
					<div className="col-span-1">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Câu hỏi thường gặp khi <span className="text-blue">thiết kế website</span>
						</h2>
						<div className="mt-6 m-auto">
							<img src="https://mona.media/template/assets/images/thiet-ke-landing-page/TheImmortalMon_Mona-1920.avif" alt="FAQ Icon" className="w-[60%] h-auto"/>
						</div>
					</div>
					
					<div className="col-span-1">
						<div>
							<Collapse bordered={false} expandIcon={customExpandIcon} expandIconPosition="right" className="bg-transparent" defaultActiveKey={['col1-0']} style={{backgroundColor: 'transparent'}}>
								{faqData?.map((item, index) => (
									<Panel header={<span className="font-semibold text-blue">{item.question}</span>} key={`col1-${index}`}>
										{item.answer}
									</Panel>
								))}
							</Collapse>
						</div>
					</div>
				</div>
				<img src={faq} alt="faq" className="w-[13%] absolute top-[-80px] right-[-50px]  rotate-[-10deg] animate-bounce-smooth"/>
			</div>
		</div>
	);
};

export default FAQSection;
