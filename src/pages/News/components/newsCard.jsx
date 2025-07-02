import React from 'react';
import Default_avatar from '@icons/default_avatar.png';

const NewsCard = ({article}) => {
	const {title, content, thumbnail_url, slug, published_at, category, author} = article || {};
	return (
		<div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
			{/* Header: Logo + Author + Date */}
			<div className="flex items-center justify-between px-4 py-3">
				<div className="flex items-center space-x-2">
					<img
						src={author?.avatar_url || Default_avatar}
						alt={author?.full_name || 'Tác giả'}
						className="w-6 h-6 rounded-full"
					/>
					<span className="text-sm font-semibold text-[#1781F5]">{author?.full_name}</span>
				</div>
				<span className="text-xs text-gray-500">
				  {published_at
					  ? new Date(new Date(published_at).getTime() + 7 * 60 * 60 * 1000).toLocaleString('vi-VN', {
						  weekday: 'long',
						  day: '2-digit',
						  month: '2-digit',
						  year: 'numeric',
						  hour: '2-digit',
						  minute: '2-digit',
					  })
					  : ''}
				</span>
			</div>
			
			{/* Image */}
			<div className="h-48 w-full overflow-hidden">
				<img
					src={thumbnail_url || 'https://placehold.co/600x400'}
					alt={title || 'Tiêu đề bài viết'}
					className="w-full h-full object-cover object-center"
				/>
			</div>
			
			{/* Content */}
			<div className="p-4">
				<h2 className="text-base font-semibold text-gray-800 leading-snug line-clamp-2">
					{title || 'Tiêu đề bài viết'}
				</h2>
				<a href={
					`/xem-tin/${slug || 'default-slug'}`
				} className="text-sm text-purple-600 mt-2 inline-block">
					Xem thêm &gt;
				</a>
			</div>
		</div>
	);
};

export default NewsCard;
