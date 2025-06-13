import React from 'react';
import {Button} from 'antd';

const ServiceCard = ({title, description, icon}) => (
	<div className="border-1 border-transparent hover:border-1 hover:border-blue p-3 rounded-[20px] transition-all cursor-pointer">
		<div className="text-center flex-grow h-[100px]">
			<h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
			<p className="text-gray-500 text-base leading-relaxed">{description}</p>
		</div>
		<div className="h-[200px] overflow-hidden rounded-[20px] mb-4 flex items-center justify-center relative">
			<img
				src={icon}
				alt="icon"
				className="w-full h-full object-cover object-center transition-transform duration-500 scale-105"
			/>
		</div>
		<div className="flex flex-nowrap h-[50px] justify-center items-center">
			<Button
				color="primary"
				variant="outlined"
				size="large"
				className="bg-blue-600 hover:bg-blue-700 text-white  rounded-full"
			>
				Xem Chi Tiết
			</Button>
		</div>
	</div>
);

export default ServiceCard;
