import {Modal} from 'antd';
import React, {useState} from 'react';
import {GiftOutlined, MenuFoldOutlined, ShareAltOutlined} from '@ant-design/icons';
import {createStyles} from 'antd-style';
import {Icon} from "@iconify/react";

const useStyle = createStyles(({prefixCls, css}) => ({
	modal: css`
        .${prefixCls}-modal .${prefixCls}-modal-content {
            background: #171717 !important;
            border-radius: 18px !important;
        }
	`,
}));
const categories = [
	{value: 'all', label: 'All', icon: '📚', count: 2377},
	{value: 'checkboxes', label: 'Checkboxes', icon: '☑️', count: 295},
	{value: 'cards', label: 'Cards', icon: '🧾', count: 1268},
	{value: 'inputs', label: 'Inputs', icon: '⌨️', count: 353},
	{value: 'forms', label: 'Forms', icon: '📝', count: 238},
	{value: 'tooltips', label: 'Tooltips', icon: '💬', count: 124},
	{value: 'buttons', label: 'Buttons', icon: '🔘', count: 2377},
	{value: 'switches', label: 'Toggle switches', icon: '🔀', count: 399},
	{value: 'loaders', label: 'Loaders', icon: '⏳', count: 1060},
	{value: 'radios', label: 'Radio buttons', icon: '📻', count: 177},
	{value: 'patterns', label: 'Patterns', icon: '📐', count: 225},
	{value: 'favorites', label: 'My favorites', icon: '⭐', count: 99},
];


const BottomBar = () => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState([]);
	const {styles} = useStyle();
	const handleChange = checkedValues => setSelected(checkedValues);
	const showModal = () => setOpen(true);
	const handleCancel = () => setOpen(false);
	const handleOk = () => {
		console.log('Selected categories:', selected);
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
					
					<div className="bg-background-orange rounded-lg px-4 py-3 flex items-center gap-2 text-white font-semibold shadow-inner hover:opacity-90 cursor-pointer">
						<GiftOutlined/>
						<span>Đăng ký tư vấn miễn phí</span>
					</div>
				</div>
			</div>
			<Modal
				open={open}
				onCancel={handleCancel}
				centered
				footer={null}
				width="50%"
				wrapClassName={styles.modal}
				closeIcon={false}
			>
				<div className="grid grid-cols-3 gap-3">
					{categories.map((item) => (
						<div
							key={item.value}
							className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer rounded-xl px-4 py-5 flex items-center justify-between"
						>
							<div className="flex items-center gap-3">
								<span className="text-white text-xl">
									<Icon icon="fluent-color:news-16" width="20" height="20"/>
								</span>
								<span className="text-white font-medium">{item.label}</span>
							</div>
							<span className="text-gray-400 text-sm">{item.count}</span>
						</div>
					))}
				</div>
			</Modal>
		</>
	);
};

export default BottomBar;
