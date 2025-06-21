import React from 'react';
import {useParams} from 'react-router-dom';
import {Alert, Spin} from 'antd';
import DetailArticle from '@pages/DetailNews/components/Article/article.jsx';
import {useGetByIdQuery} from '@features/articles/articleSlice.js';

const DetailNews = () => {
	const {slug} = useParams();
	const {data: article = {}, isLoading, error} = useGetByIdQuery(slug);
	
	// Hiển thị loading
	if (isLoading) {
		return (
			<div className="max-w-container mx-auto py-15 mt-[100px] text-center">
				<Spin tip="Đang tải bài viết..."/>
			</div>
		);
	}
	
	// Hiển thị lỗi
	if (error) {
		return (
			<div className="max-w-container mx-auto py-15 mt-[100px] text-center">
				<Alert
					message="Lỗi"
					description={error?.message || 'Không thể tải bài viết. Vui lòng thử lại sau.'}
					type="error"
					showIcon
				/>
			</div>
		);
	}
	
	// Hiển thị bài viết
	if (!article || Object.keys(article).length === 0) {
		return (
			<div className="max-w-container mx-auto py-15 mt-[100px] text-center">
				<Alert
					message="Không tìm thấy"
					description="Bài viết không tồn tại hoặc đã bị xóa."
					type="warning"
					showIcon
				/>
			</div>
		);
	}
	
	return (
		<div className="max-w-container mx-auto py-15 mt-[100px]">
			<DetailArticle article={article}/>
		</div>
	);
};

export default DetailNews;
