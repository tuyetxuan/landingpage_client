import React, {memo, useEffect, useState} from 'react';
import {Button, ConfigProvider, Input, Select, Space} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {createStyles} from 'antd-style';

const useStyle = createStyles(({prefixCls, css}) => ({
	linearGradientButton: css`
        &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
            > span {
                position: relative;
            }

            &::before {
                content: '';
                background: linear-gradient(135deg, #6253e1, #04befe);
                position: absolute;
                inset: -1px;
                opacity: 1;
                transition: all 0.3s;
                border-radius: inherit;
            }

            &:hover::before {
                opacity: 0;
            }
        }
	`,
}));

const prefix = (
	<SearchOutlined
		style={{
			fontSize: 20,
			color: '#1677ff',
		}}
	/>
);

const {Option} = Select;

const WebsiteSearch = ({categories, onSearch, onCategoryChange, defaultKeyword, defaultCategoryId}) => {
	const {styles} = useStyle();
	const [keyword, setKeyword] = useState(defaultKeyword || '');
	const [selectedCategory, setSelectedCategory] = useState(() => {
		if (!defaultCategoryId) return {value: 'all', label: 'Tất cả danh mục'};
		const category = categories.find((cat) => cat.id === parseInt(defaultCategoryId));
		return category ? {value: category.id, label: category.name} : {value: 'all', label: 'Tất cả danh mục'};
	});
	
	useEffect(() => {
		setKeyword(defaultKeyword || '');
		if (defaultCategoryId !== selectedCategory.value) {
			const category = categories.find((cat) => cat.id === parseInt(defaultCategoryId));
			setSelectedCategory(
				category ? {value: category.id, label: category.name} : {value: 'all', label: 'Tất cả danh mục'}
			);
		}
	}, [defaultKeyword, defaultCategoryId, categories]);
	
	const handleKeywordChange = (e) => {
		setKeyword(e.target.value);
	};
	
	const handleSearchSubmit = () => {
		onSearch(
			selectedCategory.value === 'all' ? null : selectedCategory.value,
			keyword.trim()
		);
	};
	
	const handleCategorySelect = (option) => {
		setSelectedCategory(option);
		onCategoryChange(
			option.value === 'all' ? null : parseInt(option.value),
			keyword.trim()
		);
	};
	
	return (
		<div className="w-full bg-white py-10 text-center">
			<div className="flex justify-center items-center mb-6">
				<h2 className="text-4xl font-bold text-gray-800">
					Danh sách tất cả{' '}
					<span className="bg-blue text-white px-3 py-1 rounded-md">
            MẪU WEBSITE
          </span>
				</h2>
			</div>
			<div>
				<Space.Compact size="large" className="w-full h-[60px]">
					<Input
						size="large"
						value={keyword}
						onChange={handleKeywordChange}
						onPressEnter={handleSearchSubmit}
						placeholder="Tìm kiếm mẫu website..."
						prefix={prefix}
					/>
					<Select
						size="large"
						className="h-[60px]"
						value={selectedCategory}
						style={{width: 300, minHeight: 60, borderColor: '#1781F5'}}
						onChange={handleCategorySelect}
						labelInValue
					>
						<Option value="all" label="Tất cả danh mục">
							Tất cả danh mục
						</Option>
						{categories.map((category) => (
							<Option key={category.id} value={category.id} label={category.name}>
								{category.name}
							</Option>
						))}
					</Select>
					<ConfigProvider
						button={{
							className: styles.linearGradientButton,
						}}
					>
						<Button
							size="large"
							type="primary"
							icon={<SearchOutlined/>}
							className="h-[60px]"
							style={{minHeight: 60}}
							onClick={handleSearchSubmit}
						>
							Tìm kiếm mẫu
						</Button>
					</ConfigProvider>
				</Space.Compact>
			</div>
		</div>
	);
};

export default memo(WebsiteSearch);
