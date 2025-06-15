import React from "react";
import {Avatar, Collapse, List, Tooltip} from "antd";
import {RightCircleFilled, ShareAltOutlined} from "@ant-design/icons";
import "./article.scss";

const categories = [
	'Digital Marketing',
	'SEO',
	'Content Marketing',
	'Social Media',
	'Email Marketing',
];
const {Panel} = Collapse;


const DetailArticle = () => {
	return (
		<div className="post_news max-w-container mx-auto px-4 py-6 ">
			<div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-gray-300">
				<div className="p-2 px-3 rounded-xl bg-blue text-white font-bold">DIGITAL MARKETING</div>
				<span className="text-sm text-blue font-bold">20 THÁNG NĂM, 2023</span>
			</div>
			<h1 className="post_news-title text-6xl font-bold leading-tight text-gray-900 pb-4 border-b border-gray-300">
				Digital Marketing là gì? Toàn bộ kiến thức về Digital Marketing mới nhất
			</h1>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 mt-6">
					<Avatar size={40} src="https://i.pravatar.cc/40?img=1" alt="Phan Đỗ Hoàng Nhật"/>
					<div>
						<div className="flex flex-nowrap items-center gap-1">
							<div className="font-medium text-gray-800">Phan Đỗ Hoàng Nhật</div>
							<img src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="" className="w-4"/>
						</div>
						<div className="text-xs text-gray-500 uppercase">SEO Manager</div>
					</div>
				</div>
				<div className="flex items-center gap-4 mt-6 rounded-lg p-2 bg-gray-100">
					<Tooltip title="Chia sẻ bài viết" className="cursor-pointer">
						<div className="flex items-center text-sm text-gray-600">
							<ShareAltOutlined className="mr-1"/>
							<span>Chia sẻ bài viết</span>
						</div>
					</Tooltip>
				</div>
			</div>
			<div className="post_news-content py-10 px-4 grid grid-cols-[1fr_3fr] gap-8">
				<div className="post_news-left border border-transparent hover:border-gray-300 rounded-xl  cursor-pointer">
					<Collapse
						bordered={false}
						expandIcon={({isActive}) => (
							<RightCircleFilled rotate={isActive ? 90 : 0} style={{color: '#055ebc', fontSize: '20px'}}/>
						)}
						defaultActiveKey={['1']}
						expandIconPosition={"end"}
						style={{
							backgroundColor: 'transparent',
							border: 'none',
						}}
					>
						<Panel header={<span className="text-xl font-semibold">Danh mục bài viết</span>} key="1">
							<List
								dataSource={categories}
								renderItem={(item) => (
									<List.Item className="!px-0 !py-2 border-none">
										<a href="#" className="!text-black text-[16px] hover:!text-blue transition-colors">{item}</a>
									</List.Item>
								)}
							/>
						</Panel>
					</Collapse>
				</div>
				<div className="post_news-main">
					<p>
						Ở thời đại ngày nay, đã không còn việc dựa vào sản phẩm để nhận biết{' '}
						<strong>
							<a
								href="https://mona.media/khach-hang-muc-tieu-la-gi/"
								target="_blank"
								rel="noopener noreferrer"
							>
								khách hàng mục tiêu
							</a>
						</strong>{' '}
						nữa. Mà thay vào đó, để khách hàng làm trung tâm chính là yếu tố quyết định sự thành bại của doanh nghiệp.
						Nó đòi hỏi doanh nghiệp phải liên tục cập nhật thị hiếu người tiêu dùng để điều chỉnh sản phẩm,
						dịch vụ phù hợp. Đây được gọi là <strong>Customer Insight</strong> hay{' '}
						<strong>insight của khách hàng</strong>.
					</p>
					
					<p>
						Chắc hẳn những ai đang hoạt động trong lĩnh vực{' '}
						<strong>
							<a
								href="https://mona.media/marketing-la-gi/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Marketing
							</a>
						</strong>{' '}
						hoặc thường xuyên dạo qua các diễn đàn, cộng đồng các marketer đều đã từng một lần nghe tới khái niệm này rồi.
						Nhưng chính xác thì <strong>Customer Insight là gì</strong> và làm thế nào để xác định đúng insight khách hàng?
						Hãy cùng{' '}
						<strong>
							<a
								href="https://mona.media/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Mona Media
							</a>
						</strong>{' '}
						tìm hiểu chi tiết về chủ đề thú vị này trong bài viết dưới đây.
					</p>
					
					<h2 id="Khai_niem_Customer_Insight_la_gi">Khái niệm Customer Insight là gì?</h2>
					
					<p>
						Về định nghĩa, <strong>Customer Insight hay insight khách hàng</strong> là việc phân tích những số liệu
						thu thập được từ khách hàng để tìm ra xu hướng hành vi của họ đối với các mặt hàng trên thị trường.
						Từ đó, doanh nghiệp có thể đưa ra các{' '}
						<strong>
							<a
								href="https://mona.media/chien-luoc-marketing/"
								target="_blank"
								rel="noopener noreferrer"
							>
								chiến lược tiếp thị
							</a>
						</strong>, sản xuất để cải thiện chất lượng sản phẩm, dịch vụ đem lại lợi ích cho cả doanh nghiệp và khách hàng.
					</p>
					
					<p>
						Có thể hiểu <strong>insight khách hàng</strong> chính là “Những suy nghĩ, mong muốn ẩn giấu sâu bên trong ảnh hưởng
						đến hành vi và quyết định mua hàng của khách hàng”. Đây là một lĩnh vực rất khó, đòi hỏi các doanh nghiệp phải đầu tư
						nhiều tài nguyên và công sức để nghiên cứu đúng về nó.
					</p>
					
					<img
						src="https://mona.media/wp-content/uploads/2023/03/customer-insights-la-gi.jpg"
						alt="Customer Insight là gì?"
						className="my-6 w-full h-auto rounded-lg"
					/>
					
					<p>
						Customer Insight là sự thật ngầm hiểu, động cơ thúc đẩy hành vi khác nhau của khách hàng. Đó là những “sự thật”
						cần phải được suy luận và diễn giải từ quá trình quan sát, theo dõi{' '}
						<strong>
							<a
								href="https://mona.media/hanh-vi-khach-hang-la-gi/"
								target="_blank"
								rel="noopener noreferrer"
							>
								hành vi khách hàng
							</a>
						</strong>.
						Tuy nhiên giá trị mà Customer Insights mang lại sẽ tương xứng và thậm chí là vượt ngoài công sức đã bỏ ra.
						Khi doanh nghiệp đã biết được khách hàng của mình “thật sự” muốn gì, họ có thể thay đổi{' '}
						<strong>
							<a
								href="https://mona.media/chien-luoc-phat-trien-doanh-nghiep/"
								target="_blank"
								rel="noopener noreferrer"
							>
								chiến lược để phát triển doanh nghiệp
							</a>
						</strong>{' '}
						và đem đến một trải nghiệm tiêu dùng tích cực hơn.
					</p>
					<p>
						Và khi khách hàng cảm thấy thoải mái hơn thì sẽ chi tiêu nhiều hơn, cũng như sẽ gắn bó với thương hiệu một cách
						lâu dài hơn (
						<strong>
							<a
								href="https://mona.media/brand-loyalty-la-gi/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Brand Loyalty
							</a>
						</strong>
						).
					</p>
					<blockquote>
						<p>Tham khảo: <span><a href="https://mona.media/thap-nhu-cau-maslow/">Tìm hiểu tháp nhu cầu Maslow để tìm hiểu phân khúc và nhu cầu khách hàng</a></span></p>
					</blockquote>
					<table className="w-full border-collapse table-auto">
						<thead>
						<tr className="text-center font-bold">
							<th className="border px-4 py-2">Điểm khác biệt</th>
							<th className="border px-4 py-2">Customer Insights</th>
							<th className="border px-4 py-2">Market Research</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td className="border px-4 py-2 text-left font-semibold">Cách thu thập thông tin</td>
							<td className="border px-4 py-2">
								Tập trung vào việc hiểu và phân tích cảm xúc, suy nghĩ, hành vi của khách hàng.
							</td>
							<td className="border px-4 py-2">
								Tập trung vào việc thu thập dữ liệu và thông tin về thị trường, sản phẩm và đối thủ cạnh tranh.
							</td>
						</tr>
						<tr>
							<td className="border px-4 py-2 text-left font-semibold">Phương pháp tiếp cận</td>
							<td className="border px-4 py-2">
								Phương pháp nghiên cứu định tính, bao gồm quan sát trực tiếp, phỏng vấn sâu và phân tích hành vi
							</td>
							<td className="border px-4 py-2">
								Phương pháp nghiên cứu định lượng như khảo sát, phỏng vấn và phân tích con số.
							</td>
						</tr>
						<tr>
							<td className="border px-4 py-2 text-left font-semibold">Nhiệm vụ</td>
							<td className="border px-4 py-2">
								Tập trung vào việc tìm kiếm các giải pháp sáng tạo và đột phá.
							</td>
							<td className="border px-4 py-2">
								Tập trung vào cung cấp thông tin để hỗ trợ việc ra quyết định kinh doanh
							</td>
						</tr>
						</tbody>
					</table>
					
					<ul>
						<li>
							Insight khách hàng giúp chúng ta <strong>hiểu rõ hơn về mục tiêu khách hàng</strong>, từ đó đưa ra các chiến lược kinh doanh và tiếp thị phù hợp.
						</li>
						<li>
							Nhờ Customer Insights, chúng ta có thể <strong>tìm ra các giải pháp đáp ứng nhu cầu của khách hàng</strong> một cách hiệu quả, giúp tăng doanh số và khách hàng trung thành.
						</li>
						<li>
							Ngoài ra, việc thu thập insight khách hàng cũng giúp chúng ta <strong>đưa ra các quyết định đúng đắn</strong> hơn trong việc phát triển sản phẩm và dịch vụ mới, giúp cải thiện và{' '}
							<strong>
								<a
									href="https://mona.media/cx-la-gi/"
									target="_blank"
									rel="noopener noreferrer"
								>
									tối ưu hoá trải nghiệm của khách hàng
								</a>
							</strong>.
						</li>
						<li>
							Đồng thời nếu thiếu insight khách hàng, doanh nghiệp sẽ khó đáp ứng{' '}
							<strong>
								<a
									href="https://mona.media/nhu-cau-khach-hang/"
									target="_blank"
									rel="noopener noreferrer"
								>
									nhu cầu khách hàng
								</a>
							</strong>{' '}
							và không cạnh tranh được trên thị trường.
						</li>
						<li>
							Hiểu rõ Customer Insight sẽ giúp bạn đưa ra các lựa chọn chính xác hơn, đảm bảo sự thành công và bền vững của doanh nghiệp.
						</li>
					</ul>
					<p>Có thể bạn quan tâm:</p>
					<ul>
						<li><a href="https://mona.media/thi-truong-ngach-la-gi/"><span>Cách xác định thị trường ngách hiệu quả để kinh doanh và Marketing</span></a></li>
						<li><span><a href="https://mona.media/tai-sao-ban-hang-online-khong-ai-mua/">Giải pháp khắc phục việc không có khách hàng khi kinh doanh online</a></span></li>
					</ul>
				</div>
			</div>
			<div className="post_news-content px-4 grid grid-cols-[1fr_3fr] gap-8">
				<div></div>
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-3 mt-6">
						<Avatar size={40} src="https://i.pravatar.cc/40?img=1" alt="Phan Đỗ Hoàng Nhật"/>
						<div>
							<div className="flex flex-nowrap items-center gap-1">
								<div className="font-medium text-gray-800">Phan Đỗ Hoàng Nhật</div>
								<img src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="" className="w-4"/>
							</div>
							<div className="text-xs text-gray-500 uppercase">SEO Manager</div>
						</div>
					</div>
					<div className="flex items-center gap-4 mt-6 rounded-lg p-2 bg-gray-100">
						<Tooltip title="Chia sẻ bài viết" className="cursor-pointer">
							<div className="flex items-center text-sm text-gray-600">
								<ShareAltOutlined className="mr-1"/>
								<span>Chia sẻ bài viết</span>
							</div>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailArticle;
