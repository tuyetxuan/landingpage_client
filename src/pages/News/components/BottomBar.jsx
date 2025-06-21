import React, {useState} from 'react';
import {GiftOutlined, MenuFoldOutlined, ShareAltOutlined} from '@ant-design/icons';
import {createStyles} from 'antd-style';
import {Icon} from "@iconify/react";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import ConsultationPopup from "@components/Consultation/consultationPopup.jsx";
import {Dialog, DialogContent} from "@/components/ui/dialog";

const useStyle = createStyles(({prefixCls, css}) => ({
	modal: css`
        .${prefixCls}-modal .${prefixCls}-modal-content {
            background: transparent !important;
            border-radius: 18px !important;
            box-shadow: none !important;
        }
	`,
}));

const BottomBar = ({articleCategories}) => {
	const [open, setOpen] = useState(false);
	const [openRes, setOpenRes] = useState(false);
	const [selected, setSelected] = useState([]);
	const {styles} = useStyle();
	const handleChange = checkedValues => setSelected(checkedValues);
	const showModal = () => setOpen(true);
	const handleCancel = () => setOpen(false);
	const navigate = useNavigate();
	const {category_slug} = useParams();
	const handleOk = () => {
		setOpen(false);
	};
	
	
	return (
		<>
			<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl rounded-xl bg-blue/20 backdrop-blur-xl text-white flex justify-between items-center px-4 py-3 shadow-lg z-50">
				<div className="w-full max-w-4xl rounded-xl bg-blue/80 backdrop-blur-xl text-white flex justify-between items-center px-4 py-3 shadow-lg z-50">
					<div className="flex items-center space-x-3">
						<span className="font-bold">Landing Page.Media</span>
						<ShareAltOutlined/>
						<span className="mx-2 border-r border-gray-400 h-4"></span>
						<button
							onClick={showModal}
							className="text-yellow-400 font-semibold cursor-pointer flex items-center gap-1 hover:text-sky-400 transition duration-200"
						>
							DANH MỤC TIN <MenuFoldOutlined/>
						</button>
					</div>
					
					<div onClick={() => {
						setOpenRes(!openRes);
					}} className="bg-background-orange rounded-lg px-4 py-3 flex items-center gap-2 text-white font-semibold shadow-inner hover:opacity-90 cursor-pointer">
						<GiftOutlined/>
						<span>Đăng ký tư vấn miễn phí</span>
					</div>
				</div>
			</div>
			<Dialog open={open} onOpenChange={handleCancel}>
				<DialogContent
					className="p-6 w-[55%] mx-auto  bg-transparent border-none shadow-none"
					showCloseButton={false}
				>
					<div className="grid grid-cols-3 gap-3">
						{articleCategories?.map((item) => (
							<div
								key={item.id}
								className={`bg-[#0066D0] hover:bg-[#1781F5] cursor-pointer rounded-xl px-4 py-5 flex items-center justify-between ${
									item.slug === category_slug ? "ring-4 ring-yellow-400" : ""
								}`}
								onClick={() => {
									navigate(`/tin-tuc/${item.slug}`);
									handleCancel();
								}}
							>
								<div className="flex items-center gap-4 h-[30px]">
					                <span className="text-white text-xl">
					                  <Icon icon="fluent-color:news-20" width="30" height="30"/>
					                </span>
									<span className="text-white font-medium">
						                  {item.name.split(" ").length > 5
							                  ? item.name.split(" ").slice(0, 5).join(" ") + " ..."
							                  : item.name}
					                </span>
								</div>
								<span className="text-white text-sm">{item.news_count}</span>
							</div>
						))}
					</div>
				</DialogContent>
			</Dialog>
			<ConsultationPopup open={openRes} setOpen={setOpenRes}/>
		</>
	);
};

export default BottomBar;
