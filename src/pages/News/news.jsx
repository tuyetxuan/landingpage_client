import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {Empty, Pagination, Typography} from 'antd';
import NewsCard from '@pages/News/components/newsCard.jsx';
import BottomBar from '@pages/News/components/BottomBar.jsx';
import {useGetArticleCategoriesQuery} from '@features/articles/articleCategoriesSlice.js';
import {useGetArticlesQuery} from '@features/articles/articleSlice.js';

const News = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const {category_slug} = useParams();
	const page = parseInt(searchParams.get('page')) || 1;
	const keyword = searchParams.get('keyword') || null;
	
	const [title, setTitle] = useState('Tin tức mới nhất');
	
	const {data: articleCategoriesData = [], isLoading: categoriesLoading, error: categoriesError} = useGetArticleCategoriesQuery();
	
	const {data: articleData = {}, isLoading: articleLoading, error: articleError} = useGetArticlesQuery({
		page,
		keyword,
		category_slug: category_slug || '',
	});
	
	const {
		articles = [],
		total = 0,
		totalPages = 1,
		currentPage = 1,
		pageSize = 6
	} = articleData || {};
	
	useEffect(() => {
		if (category_slug && articleCategoriesData.length > 0) {
			const category = articleCategoriesData.find((cat) => cat.slug === category_slug);
			if (category) {
				setTitle(
					<>
						Tin tức về <span className="bg-blue text-white px-3 py-1 rounded-md">{category.name}</span>
					</>
				);
			} else {
				setTitle('Tin tức mới nhất');
			}
		} else {
			setTitle('Tin tức mới nhất');
		}
	}, [category_slug, articleCategoriesData]);
	
	const handlePageChange = (newPage) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: newPage.toString(),
		});
	};
	
	if (categoriesLoading || articleLoading) {
		return (
			<div className="max-w-container mx-auto py-15 mt-[100px] text-center">
				Đang tải...
			</div>
		);
	}
	
	if (categoriesError || articleError) {
		return (
			<div className="max-w-container mx-auto py-15 mt-[100px] text-center">
				Lỗi khi tải dữ liệu: {(categoriesError?.message || articleError?.message) || 'Không xác định'}
			</div>
		);
	}
	
	return (
		<>
			<div className="max-w-container mx-auto py-15 mt-[100px]">
				<h2 className="text-[38px] font-bold text-left mb-6">
					{title}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{articles.length > 0 ? (
						articles.map((article) => (
							<NewsCard
								key={article.id}
								article={article}
							/>
						))
					) : (
						<div className="w-full flex justify-center items-center text-center col-span-3 h-[300px]">
							<Empty
								description={
									<Typography.Text>
										Không tìm thấy bài viết trong danh mục tin tức{" "}
										<b>&ldquo;{articleCategoriesData.find((cat) => cat?.slug === category_slug)?.name || 'Tất cả'}&rdquo;</b>.
									</Typography.Text>
								}
							/>
						</div>
					)}
				</div>
				{total > 0 && (
					<div className="mt-6 flex justify-center items-center">
						<Pagination
							size="large"
							current={currentPage}
							total={total}
							pageSize={pageSize}
							onChange={handlePageChange}
							showSizeChanger={false}
							showQuickJumper
						/>
					</div>
				)}
			</div>
			<BottomBar
				articleCategories={articleCategoriesData}
				total={total}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</>
	);
};

export default News;
