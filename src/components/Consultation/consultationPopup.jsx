import {Dialog, DialogContent} from "@/components/ui/dialog";
import {Mail, MapPin} from "lucide-react";
import {Form, Input, Select,} from "antd";
import {Icon} from "@iconify/react";
import {Button} from "@components/ui/button.jsx";
import {LineShadowText} from "@/components/magicui/line-shadow-text";
import React from "react";
import {BorderBeam} from "@components/magicui/border-beam.jsx";

const {TextArea} = Input;
const {Option} = Select;

export default function ConsultationPopup({open, setOpen}) {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="bg-[#0066D0] p-0 rounded-[24px] overflow-hidden max-w-[60%] w-full h-[85vh] ">
				<div className="grid md:grid-cols-[55%_45%]">
					<div className="flex flex-col text-white p-6 md:p-10 h-full space-y-4">
						<h2 className="text-2xl font-bold leading-tight">
							Bạn cần một Chuyên gia Account đồng hành và cùng bạn phát triển Kinh doanh
						</h2>
						<p>
							Liên hệ ngay tới CCO MEDIA để được hỗ trợ kết nối với các Chuyên gia phù hợp.
						</p>
						<div className="text-white p-8 space-y-8">
							{/* Top 3 columns */}
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
								<div className="flex flex-col items-center space-y-2">
									<img src="https://mona.media/template/assets/images/contact-box/contact-box-icon-zalo.png" alt="Zalo" className="w-12 h-12"/>
									<p className="text-sm">Nhắn tin qua</p>
									<p className="font-bold">Zalo Official</p>
								</div>
								<div className="flex flex-col items-center space-y-2">
									<img src="https://mona.media/template/assets/images/contact-box/contact-box-icon-calling.png" alt="Hotline" className="w-12 h-12"/>
									<p className="text-sm">Gọi ngay Hotline</p>
									<p className="font-bold">0902 813 410</p>
								</div>
								<div className="flex flex-col items-center space-y-2">
									<img src="https://mona.media/template/assets/images/contact-box/contact-box-icon-livechat.png" alt="Tawk.to" className="w-12 h-12"/>
									<p className="text-sm">Livechat trực tuyến</p>
									<p className="font-bold">với Tawkto</p>
								</div>
							</div>
						</div>
						<div className="space-y-4 text-l text-center sm:text-left">
							<div className="flex items-center justify-start  gap-2">
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
						<div className=" relative bg-white p-6 space-y-4 rounded-2xl shadow-lg h-full max-w-full max-h-full">
							<div className="flex flex-nowrap items-center gap-1 mb-4 justify-center">
								<h3 className="text-2xl font-bold text-center text-black">Đăng ký <LineShadowText className="italic font-bold text-3xl">tư</LineShadowText> <LineShadowText className="italic font-bold text-3xl">vấn</LineShadowText>
								</h3>
								<div className="flex items-center gap-0">
									<Icon icon="meteocons:lightning-bolt-fill" width="64" height="64"/>
									<span className="uppercase font-bold text-3xl text-blue gap-1">
							        miễn phí
							    </span>
								</div>
							</div>
							<Form layout="vertical" className="w-full">
								<Form.Item name="name">
									<Input
										size="large"
										placeholder="Họ và tên của bạn"
										bordered={false}
										className="border-b border-gray-300 focus:border-black focus:shadow-none"
									/>
								</Form.Item>
								
								<Form.Item name="email">
									<Input
										size="large"
										type="email"
										placeholder="Email"
										bordered={false}
										className="border-b border-gray-300 focus:border-black focus:shadow-none"
									/>
								</Form.Item>
								
								<Form.Item name="phone">
									<Input
										size="large"
										type="tel"
										placeholder="Số điện thoại"
										bordered={false}
										className="border-b border-gray-300 focus:border-black focus:shadow-none"
									/>
								</Form.Item>
								
								<Form.Item name="service">
									<Select
										size="large"
										placeholder="Vui lòng chọn dịch vụ mà bạn quan tâm"
										className="border-b border-gray-300 focus:border-black"
										bordered={false}
									>
										<Option value="web">Thiết kế website</Option>
										<Option value="marketing">Marketing</Option>
									</Select>
								</Form.Item>
								<Form.Item name="note">
									<TextArea
										size="large"
										placeholder="Yêu cầu cụ thể (nếu có)"
										autoSize={{minRows: 2, maxRows: 4}}
										bordered={false}
										className="border-b border-gray-300 focus:border-black focus:shadow-none"
									/>
								</Form.Item>
								<div className="bg-gray-100 text-gray-500 p-3 rounded-lg text-sm text-center mb-4">
									CAPTCHA Placeholder
								</div>
								<Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-6 cursor-pointer mb-4">
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
	);
}
