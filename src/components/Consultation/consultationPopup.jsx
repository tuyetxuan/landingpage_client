import {Dialog, DialogContent} from "@/components/ui/dialog";
import {Mail, MapPin} from "lucide-react";
import {Form, Input, notification, Select} from "antd";
import {Icon} from "@iconify/react";
import {Button} from "@components/ui/button.jsx";
import {LineShadowText} from "@/components/magicui/line-shadow-text";
import React, {useState} from "react";
import {BorderBeam} from "@components/magicui/border-beam.jsx";
import {useGetServiceCategoriesQuery} from "@features/services/serviceCategoriesSlice.js";
import {useSubmitContactMutation} from "@features/contacts/submitContactSlice.js";

const {TextArea} = Input;
const {Option} = Select;
const DialogSuccess = ({open, onClose, message}) => {
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full" showCloseButton={false}>
				<div className="flex flex-col items-center space-y-4 relative">
					<div className="flex flex-col items-center space-y-4 relative -mt-26">
						<div className="relative flex justify-center items-center">
							<div className="absolute w-[150px] h-[150px] bg-white rounded-full z-10"/>
							<Icon
								icon="uim:check-circle"
								width="150"
								height="150"
								className="z-20"
								style={{color: "#00d029"}}
							/>
						</div>
					</div>
					<div className="flex flex-col items-center space-y-4 pt-1">
						<h3 className="text-2xl font-bold text-center">Thành Công</h3>
						<p className="text-center text-gray-600" dangerouslySetInnerHTML={{__html: message}}/>
						<Button
							size="large"
							variant="outlined"
							onClick={onClose}
							className="bg-[#00d029] text-white px-6 py-2 rounded-lg hover:bg-[#00d029] cursor-pointer"
						>
							Đóng
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
const DialogError = ({open, onClose, message}) => {
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full" showCloseButton={false}>
				<div className="flex flex-col items-center space-y-4 relative -mt-26">
					<div className="relative flex justify-center items-center">
						<div className="absolute w-[150px] h-[150px] bg-white rounded-full z-10"/>
						<Icon
							icon="ic:twotone-error"
							width="150"
							height="150"
							className="z-20"
							style={{color: "#ff0000"}}
						/>
					</div>
				</div>
				<div className="flex flex-col items-center space-y-4 pt-1">
					<h3 className="text-2xl font-bold text-center">Thất Bại</h3>
					<p className="text-center text-gray-600" dangerouslySetInnerHTML={{__html: message}}/>
					<Button
						size="large"
						onClick={onClose}
						className="bg-[#ff0000] text-white px-6 py-2 rounded-lg hover:bg-[#ff0000] cursor-pointer"
					>
						Đóng
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default function ConsultationPopup({open, setOpen}) {
	const [form] = Form.useForm();
	const {data: serviceCategories = [], isLoading: isCategoriesLoading, error: categoriesError} = useGetServiceCategoriesQuery();
	const [dialogState, setDialogState] = useState({
		open: false,
		type: "",
		message: "",
	});
	const [api, contextHolder] = notification.useNotification();
	const [submitContact, {isLoading}] = useSubmitContactMutation();
	const handleSubmit = async (values) => {
		try {
			await form.validateFields();
			const response = await submitContact(values).unwrap();
			console.log(response);
			if (response.error) {
				const openNotification = placement => {
					api.error({
						message: `Thông báo`,
						description:
							`Gửi thông tin liên hệ không thành công: ${response.error}`,
						placement,
						duration: 3,
					});
				};
			} else {
				setDialogState({
					open: true,
					type: "success",
					message: `Yêu cầu tư vấn của Anh/chị <b>${response.name}</b> đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.`,
				});
			}
		} catch (error) {
			setDialogState({
				open: true,
				type: "error",
				message: `Đã xảy ra lỗi khi gửi thông tin liên hệ: <b>${error.message || "Không xác định"}</b>`,
			});
		} finally {
			setOpen(false);
			form.resetFields();
		}
	};
	
	const closeDialog = () => {
		setDialogState({open: false, type: ""});
	};
	
	return (
		<>
			{contextHolder}
			{
				dialogState.open && dialogState.type === "success" ? (
					<DialogSuccess
						open={dialogState.open}
						onClose={closeDialog}
						message={dialogState.message}
					/>
				) : dialogState.open && dialogState.type === "error" ? (
					<DialogError
						open={dialogState.open}
						onClose={closeDialog}
						type="error"
						message={dialogState.message}
					/>
				) : null
			}
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="bg-[#0066D0] p-0 rounded-[24px] overflow-hidden max-w-[60%] w-full h-[85vh]">
					<div className="grid md:grid-cols-[55%_45%]">
						<div className="flex flex-col text-white p-6 md:p-10 h-full space-y-4">
							<h2 className="text-2xl font-bold leading-tight">
								Bạn cần một Chuyên gia Account đồng hành và cùng bạn phát triển Kinh doanh
							</h2>
							<p>
								Liên hệ ngay tới CCO MEDIA để được hỗ trợ kết nối với các Chuyên gia phù hợp.
							</p>
							<div className="text-white p-8 space-y-8">
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
									<div className="flex flex-col items-center space-y-2">
										<img
											src="https://mona.media/template/assets/images/contact-box/contact-box-icon-zalo.png"
											alt="Zalo"
											className="w-12 h-12"
										/>
										<p className="text-sm">Nhắn tin qua</p>
										<p className="font-bold">Zalo Official</p>
									</div>
									<div className="flex flex-col items-center space-y-2">
										<img
											src="https://mona.media/template/assets/images/contact-box/contact-box-icon-calling.png"
											alt="Hotline"
											className="w-12 h-12"
										/>
										<p className="text-sm">Gọi ngay Hotline</p>
										<p className="font-bold">0902 813 410</p>
									</div>
									<div className="flex flex-col items-center space-y-2">
										<img
											src="https://mona.media/template/assets/images/contact-box/contact-box-icon-livechat.png"
											alt="Tawk.to"
											className="w-12 h-12"
										/>
										<p className="text-sm">Livechat trực tuyến</p>
										<p className="font-bold">với Tawkto</p>
									</div>
								</div>
							</div>
							<div className="space-y-4 text-l text-center sm:text-left">
								<div className="flex items-center justify-start gap-2">
									<MapPin size={23}/> 154 Phạm Văn Chiêu, Phường 9, Gò Vấp, TP.HCM
								</div>
								<div className="flex items-center justify-start gap-2">
									<Mail size={23}/> info@ccomedia.vn
								</div>
							</div>
							<iframe
								title="Google Maps"
								className="w-full flex-grow rounded-xl shadow-lg mt-4"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1068578843084!2d106.6625013142874!3d10.80099546169365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528dfef43c3f1%3A0xd465ba64ba0d0f62!2zMTYwIEzDqiBUaMOgbmggS2jDoW5nIFTDom4sIFBoxrDhu51uZyAxMSwgUXXDoW4gMywgSOG7kyBDaMOtbmggTWluaCwgSOG7kyBDaMOtbmg!5e0!3m2!1svi!2s!4v1660031207829!5m2!1svi!2s"
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</div>
						<div className="grid-cols-1 bg-[#0066D0] p-8 space-y-4">
							<div className="relative bg-white p-6 space-y-4 rounded-2xl shadow-lg h-full max-w-full max-h-full">
								<div className="flex flex-nowrap items-center gap-1 mb-4 justify-center">
									<h3 className="text-2xl font-bold text-center text-black">
										Đăng ký <LineShadowText className="italic font-bold text-3xl">tư</LineShadowText>{" "}
										<LineShadowText className="italic font-bold text-3xl">vấn</LineShadowText>
									</h3>
									<div className="flex items-center gap-0">
										<Icon icon="meteocons:lightning-bolt-fill" width="64" height="64"/>
										<span className="uppercase font-bold text-3xl text-blue gap-1">
                      miễn phí
                    </span>
									</div>
								</div>
								<Form
									form={form}
									layout="vertical"
									className="w-full"
									onFinish={handleSubmit}
								>
									<Form.Item
										name="name"
										rules={[{required: true, message: "Vui lòng nhập họ và tên!"}]}
									>
										<Input
											size="large"
											placeholder="Họ và tên của bạn"
											bordered={false}
											className="border-b border-gray-300 focus:border-black focus:shadow-none"
										/>
									</Form.Item>
									<Form.Item
										name="email"
										rules={[
											{required: true, message: "Vui lòng nhập email!"},
											{type: "email", message: "Email không hợp lệ!"},
										]}
									>
										<Input
											size="large"
											type="email"
											placeholder="Email"
											bordered={false}
											className="border-b border-gray-300 focus:border-black focus:shadow-none"
										/>
									</Form.Item>
									<Form.Item
										name="phone"
										rules={[
											{required: true, message: "Vui lòng nhập số điện thoại!"},
											{
												pattern: /^[0-9]{10,11}$/,
												message: "Số điện thoại phải có 10-11 chữ số!",
											},
										]}
									>
										<Input
											size="large"
											type="tel"
											placeholder="Số điện thoại"
											bordered={false}
											className="border-b border-gray-300 focus:border-black focus:shadow-none"
										/>
									</Form.Item>
									<Form.Item
										name="address"
										rules={[
											{required: true, message: "Vui lòng nhập địa chỉ!"},
										]}
									>
										<Input
											size="large"
											type="text"
											placeholder="Địa chỉ của bạn"
											bordered={false}
											className="border-b border-gray-300 focus:border-black focus:shadow-none"
										/>
									</Form.Item>
									<Form.Item
										name="service"
										rules={[{required: true, message: "Vui lòng chọn dịch vụ!"}]}
									>
										<Select
											size="large"
											placeholder="Vui lòng chọn dịch vụ mà bạn quan tâm"
											className="border-b border-gray-300 focus:border-black"
											bordered={false}
										>
											{
												serviceCategories && serviceCategories.length > 0 ? (
													serviceCategories.map((category) => (
														<Option key={category.id} value={category.id}>
															{category.name}
														</Option>
													))
												) : (
													<Option value="" disabled>
														Không có dịch vụ nào hiện tại
													</Option>
												)
											}
										</Select>
									</Form.Item>
									<Form.Item name="message">
										<TextArea
											size="large"
											placeholder="Yêu cầu cụ thể (nếu có)"
											autoSize={{minRows: 2, maxRows: 3}}
											bordered={false}
											className="border-b border-gray-300 focus:border-black focus:shadow-none"
										/>
									</Form.Item>
									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-6 cursor-pointer mb-4"
									>
										⚡ Yêu cầu tư vấn MIỄN PHÍ!
									</Button>
									<div className="relative border-2 border-dotted py-6 mt-2 rounded-xl">
										<Icon
											icon="fluent-emoji:locked-with-pen"
											width="32"
											height="32"
											className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white rounded-full p-1"
										/>
										<p className="text-sm text-center text-gray-500">
											CCO MEDIA cam kết tuyệt đối không sử dụng thông tin để bán hoặc spam
										</p>
									</div>
								</Form>
								<BorderBeam
									duration={10}
									size={1000}
									className="from-transparent via-red-500 to-transparent"
								/>
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
