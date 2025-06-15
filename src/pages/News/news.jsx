import React from 'react';
import NewsCard from "@pages/News/components/newsCard.jsx";
import BottomBar from "@pages/News/components/BottomBar.jsx";

const News = () => {
	return (
		<>
			<div className="max-w-container mx-auto py-15 mt-[100px]">
				<h2 className="text-[38px] font-bold text-left mb-6 w-[700px]">
					Tin tức mới nhất
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<NewsCard
						title="Cập nhật mới nhất về Landing Page"
						description="Khám phá những tính năng mới và cải tiến trong thiết kế Landing Page."
						image="https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/news-01-20250512073626-bybze.jpg"
						link="#"
					/>
					<NewsCard
						title="Xu hướng thiết kế web 2023"
						description="Tìm hiểu những xu hướng thiết kế web đang thịnh hành trong năm nay."
						image="https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/news-02-20250512073650-0ha51.jpg"
						link="#"
					/>
					<NewsCard
						title="Hướng dẫn tối ưu SEO cho Landing Page"
						description="Các bước cần thiết để tối ưu hóa SEO cho trang đích của bạn."
						image="https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/news-03-20250512073756-pi8ed.jpg"
						link="#"
					/>
					<NewsCard
						title="Cách tăng tỷ lệ chuyển đổi trên Landing Page"
						description="Những mẹo và thủ thuật để cải thiện tỷ lệ chuyển đổi của bạn."
						image="https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/news-04-20250512073820-pi8ed.jpg"
						link="#"
					/>
					<NewsCard
						title="Thiết kế Landing Page cho doanh nghiệp nhỏ"
						description="Làm thế nào để tạo ra một trang đích hiệu quả cho doanh nghiệp nhỏ của bạn."
						image="https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/news-05-20250512073844-pi8ed.jpg"
						link="#"
					/>
				</div>
			</div>
			<BottomBar/>
		</>
	);
};

export default News;
