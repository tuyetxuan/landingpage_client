import React from 'react';

const NewsCard = () => {
	return (
		<div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
			{/* Header: Logo + Author + Date */}
			<div className="flex items-center justify-between px-4 py-3">
				<div className="flex items-center space-x-2">
					<img
						src="https://mona.media/wp-content/uploads/2023/06/huong-dan-lap-ke-hoach-seo.png"
						alt="author"
						className="w-6 h-6 rounded-full"
					/>
					<span className="text-sm font-semibold text-purple-700">MONA.Media</span>
				</div>
				<span className="text-xs text-gray-500">14/06/2025</span>
			</div>
			
			{/* Image */}
			<div className="h-48 w-full overflow-hidden">
				<img
					src="https://mona.media/wp-content/uploads/2023/06/huong-dan-lap-ke-hoach-seo.png"
					alt="news"
					className="w-full h-full object-cover object-center"
				/>
			</div>
			
			{/* Content */}
			<div className="p-4">
				<h2 className="text-base font-semibold text-gray-800 leading-snug line-clamp-2">
					Tư vấn SEO cho doanh nghiệp, Giải pháp SEO hiệu quả
				</h2>
				<a href="#" className="text-sm text-purple-600 mt-2 inline-block">
					Xem thêm &gt;
				</a>
			</div>
		</div>
	);
};

export default NewsCard;
