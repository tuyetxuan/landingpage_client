import React from 'react';
import {Button, Form, Input} from 'antd';

const ContactForm = () => {
	const [form] = Form.useForm();
	
	const handleSubmit = (values) => {
		console.log('Form data:', values);
	};
	
	return (
		<div className="max-w-md mx-auto p-1 rounded-xl bg-white  shadow-lg">
			<div className="bg-purple-700 text-white text-center font-semibold text-sm py-2 px-4 rounded-t-xl mb-2">
				Cùng CCO Level-Up website của bạn, thành một cỗ máy render Tiền đúng nghĩa
			</div>
			
			<Form
				form={form}
				layout="vertical"
				onFinish={handleSubmit}
				className="mt-5"
			>
				<Form.Item name="name" rules={[{required: true, message: 'Vui lòng nhập họ tên'}]}>
					<Input placeholder="Họ và tên"/>
				</Form.Item>
				
				<Form.Item name="company">
					<Input placeholder="Tên doanh nghiệp (không bắt buộc)"/>
				</Form.Item>
				
				<Form.Item name="phone" rules={[{required: true, message: 'Vui lòng nhập số điện thoại'}]}>
					<Input placeholder="Số điện thoại"/>
				</Form.Item>
				
				<Form.Item name="email" rules={[{type: 'email', message: 'Email không hợp lệ'}]}>
					<Input placeholder="Email"/>
				</Form.Item>
				
				<Form.Item name="domain">
					<Input placeholder="Tên miền (không bắt buộc)"/>
				</Form.Item>
				
				<div className="text-sm text-gray-700 mt-2">
					<p>
						<strong>MONA</strong> có riêng một Người <span className="text-blue-600 font-semibold">&ldquo;Bạn Thân&ldquo;</span> cho bạn – Người Account sẽ đồng hành, hỗ trợ, hướng dẫn, đặt đồ án cho bạn mãi mãi, từ đây về sau!
					</p>
				</div>
				
				<Button
					htmlType="submit"
					className="w-full bg-purple-600 text-white font-bold text-base mt-5 py-2 rounded-lg hover:bg-purple-700 transition"
				>
					⚡ Yêu cầu tư vấn MIỄN PHÍ!
				</Button>
				
				<p className="text-center text-xs text-red-500 mt-3 border border-dashed border-red-400 p-2 rounded">
					MONA cam kết tuyệt đối không sử dụng thông tin của bạn để bán hoặc SPAM
				</p>
			</Form>
		</div>
	);
};

export default ContactForm;
