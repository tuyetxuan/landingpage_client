import {Button, ConfigProvider, Input, Select, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons";
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

const {Search} = Input;

const {Option} = Select;

export default function WebsiteSearch() {
	const {styles} = useStyle();
	return (
		<div className="w-full bg-white py-10  text-center">
			<div className="flex justify-center items-center mb-6">
				<h2 className="text-4xl font-bold text-gray-800">
					Danh sách tất cả{" "}
					<span className="bg-blue text-white px-3 py-1 rounded-md">
						MẪU WEBSITE
					</span>
				</h2>
			</div>
			<div>
				<Space.Compact size="large" className="w-full h-[60px]">
					<Input size="large" defaultValue="" placeholder="Tìm kiếm mẫu website..." prefix={prefix}/>
					<Select
						size="large"
						className="h-[60px]"
						defaultValue="all"
						style={{width: 300, minHeight: 60, borderColor: "#1781F5"}}
						onChange={(value) => console.log(value)}
					>
						<Option value="all">Tất cả danh mục</Option>
						<Option value="landing-page">Landing Page</Option>
						<Option value="ecommerce">E-commerce</Option>
						<Option value="blog">Blog</Option>
					</Select>
					<ConfigProvider
						button={{
							className: styles.linearGradientButton,
						}}
					>
						<Button size="large" type="primary" icon={<SearchOutlined/>} className="h-[60px]" style={{minHeight: 60}}>
							Tìm kiếm mẫu
						</Button>
					</ConfigProvider>
				</Space.Compact>
			</div>
		</div>
	);
}
