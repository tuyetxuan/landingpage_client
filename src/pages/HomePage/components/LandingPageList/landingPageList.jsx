import {Button, Card, Tag} from "antd";
import React, {useEffect, useState} from "react";
import {useGetServiceCategoriesQuery} from "@features/services/serviceCategoriesSlice.js";
import {useGetByIdCategoryQuery} from "@features/services/serviceSlice.js";
import SpinnerSmall from "@components/Spinner/spinnerSmall.jsx";
import {Icon} from "@iconify/react";

const {Meta} = Card;

const LandingPageList = () => {
	const [defaultSelectService, setDefaultSelectService] = useState(null);
	const {data: serviceCategories = [], isLoading: isCategoriesLoading, error: categoriesError} = useGetServiceCategoriesQuery();
	const {data: servicesData = [], isLoading: isServicesLoading, isFetching: isServicesFetching, error: servicesError} = useGetByIdCategoryQuery(
		defaultSelectService,
		{skip: !defaultSelectService,}
	);
	
	useEffect(() => {
		if (serviceCategories.length > 0 && !defaultSelectService) {
			setDefaultSelectService(serviceCategories[0].id);
		}
	}, [serviceCategories, defaultSelectService]);
	
	if (isCategoriesLoading) {
		return (
			<div className="max-w-container py-15 px-4 mx-auto text-center">
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						minHeight: "530px",
					}}
				>
					<SpinnerSmall/>
				</div>
			</div>
		);
	}
	
	if (categoriesError) {
		return (
			<div className="max-w-container py-15 px-4 mx-auto text-center h-[200px]">
				Lỗi khi tải danh mục dịch vụ: {categoriesError.message || "Không xác định"}
			</div>
		);
	}
	
	return (
		<div className="max-w-container py-15 px-4 mx-auto">
			<h2 className="text-[38px] font-bold text-left mb-6 w-[700px]">
				Kho 500+ Templates đẹp, đa lĩnh vực và mục đích sử dụng
			</h2>
			<div className="flex flex-wrap justify-start gap-6 mb-6">
				{serviceCategories.map((category) => (
					<div className="p-2" key={category.id}>
						<Button
							color="primary"
							variant="link"
							onClick={() => {
								if (defaultSelectService !== category.id) {
									setDefaultSelectService(category.id);
								}
							}}
							style={{fontWeight: defaultSelectService === category.id ? "bold" : "normal"}}
						>
							{category.name}
						</Button>
					</div>
				))}
			</div>
			{(isServicesFetching) ? (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						minHeight: "480px",
					}}
				>
					<SpinnerSmall/>
				</div>
			) : servicesError ? (
				<div className="w-full text-center col-span-4 h-[200px]">
					Lỗi khi tải dịch vụ: {servicesError.message || "Không xác định"}
				</div>
			) : servicesData.length > 0 ? (
				<div className="grid grid-cols-4 gap-6 items-center h-[480px]">
					{
						servicesData.map((page) => (
							<Card
								key={page.id}
								hoverable
								style={{width: 270}}
								bodyStyle={{padding: 10}}
								cover={
									<img
										className="max-h-[400px] object-cover object-center"
										alt={`${page.name} - ${page.category.name}`}
										src={page.image_url}
									/>
								}
							>
								<Meta
									title={`${page.name} - ${page.category.name}`}
									description={
										<div className="flex justify-between items-center">
											<Tag color="#0066D0">ID: {page.code}</Tag>
											<Button type="link" href={page.link_page} target="_blank">
												Xem chi tiết tại đây
												<Icon icon="fluent-mdl2:go" width={15} className="pr-1"/>
											</Button>
										</div>
									}
								/>
							</Card>
						))
					}
				</div>
			) : (
				<div className="w-full text-center col-span-4 h-[200px]">Không có dịch vụ nào trong danh mục này.</div>
			)}
		</div>
	);
};

export default LandingPageList;
