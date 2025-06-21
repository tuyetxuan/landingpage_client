import React, {useCallback, useEffect, useState} from 'react';
import {Empty, Pagination, Typography} from 'antd';
import {useSearchParams} from 'react-router-dom';
import WebsiteSearch from '@pages/UIPage/components/Search/searchSection.jsx';
import CardUI from '@pages/UIPage/components/Card/cardUi.jsx';
import {useGetServicesQuery,} from '@features/services/serviceSlice.js';
import {useGetServiceCategoriesQuery} from '@features/services/serviceCategoriesSlice.js';

const UI = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const page = parseInt(searchParams.get('page')) || 1;
	const keyword = searchParams.get('keyword') || '';
	const categoryId = searchParams.get('categoryId') || '';
	
	const [serviceCategories, setServiceCategories] = useState([]);
	
	const {data: categoriesData = [], isLoading: isCategoriesLoading, error: categoriesError} = useGetServiceCategoriesQuery({}, {
		skip: serviceCategories.length > 0,
	});
	
	useEffect(() => {
		if (categoriesData.length > 0) {
			setServiceCategories(categoriesData);
		}
	}, [categoriesData]);
	
	const {data = {}, isLoading: isServicesLoading, error: servicesError} = useGetServicesQuery({
		page,
		keyword,
		categoryId: categoryId || undefined,
	}, {
		refetchOnMountOrArgChange: true,
	});
	
	const {
		services = [],
		total = 0,
		totalPages = 1,
		currentPage = 1
	} = data || {};
	
	const handlePageChange = useCallback((newPage) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: newPage.toString(),
		});
	}, [searchParams, setSearchParams]);
	
	const handleSearch = useCallback((newCategoryId, newKeyword) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: '1',
			categoryId: newCategoryId || '',
			keyword: newKeyword || '',
		});
	}, [searchParams, setSearchParams]);
	
	const handleCategoryChange = useCallback((newCategoryId, newKeyword) => {
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: '1',
			categoryId: newCategoryId || '',
			keyword: newKeyword || '',
		});
	}, [searchParams, setSearchParams]);
	
	if (isServicesLoading || isCategoriesLoading) {
		return (
			<div className="max-w-container mx-auto py-15 mt-[100px] text-center">
				Đang tải...
			</div>
		);
	}
	
	if (servicesError || categoriesError) {
		return (
			<div className="max-w-container mx-auto py-15 mt-[100px] text-center">
				Lỗi khi tải dữ liệu: {(servicesError?.message || categoriesError?.message) || 'Không xác định'}
			</div>
		);
	}
	
	return (
		<div className="max-w-container mx-auto py-15 mt-[100px]">
			<WebsiteSearch
				categories={serviceCategories}
				onSearch={handleSearch}
				onCategoryChange={handleCategoryChange}
				defaultKeyword={keyword}
				defaultCategoryId={categoryId}
			/>
			<div className="max-w-container mx-auto py-2 grid grid-cols-4 gap-6">
				{services.length > 0 ? (
					services.map((service) => (
						<CardUI key={service.id} service={service}/>
					))
				) : (
					<div className="w-full flex justify-center items-center text-center col-span-4 h-[300px]">
						<Empty description={
							<Typography.Text>
								Không tìm thấy dịch vụ nào phù hợp với từ khóa <b>&#34;{keyword}&#34;</b> trong danh mục <b>&#34;{serviceCategories.find(cat => cat.id === parseInt(categoryId))?.name || 'Tất cả'}&#34;</b>.
							</Typography.Text>
						}/>
					</div>
				)}
			</div>
			{total > 0 && (
				<div className="mt-6 flex justify-center items-center">
					<Pagination
						size="large"
						current={page}
						total={total}
						pageSize={8}
						onChange={handlePageChange}
						showSizeChanger={false}
						showQuickJumper
					/>
				</div>
			)}
		</div>
	);
};

export default UI;
