import {Button, Card, Tag} from "antd";
import React from "react";
import {Icon} from "@iconify/react";

const {Meta} = Card;

const landingPages = [
	{
		id: "MAIN-01",
		title: "Bán lẻ 03",
		category: "Landing page đẹp",
		image: "https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/bat-dong-san-01-20250410073626-bybze.jpg",
		link: "#",
	},
	{
		id: "MAIN-02",
		title: "Bán lẻ 04",
		category: "Landing page đẹp",
		image: "https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/bat-dong-san-05-20250410073550-0ha51.jpg",
		link: "#",
	},
	{
		id: "MAIN-03",
		title: "Bán lẻ 05",
		category: "Landing page đẹp",
		image: "https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/ban-le-02-20250409101456-pi8ed.jpg",
		link: "#",
	},
	{
		id: "MAIN-04",
		title: "Bán lẻ 05",
		category: "Landing page đẹp",
		image: "https://w.ladicdn.com/s700x800/57b167caca57d39c18a1c57e/ban-le-02-20250409101456-pi8ed.jpg",
		link: "#",
	},
];

const LandingPageList = () => {
	return (
		<div className="max-w-container py-15 px-4 mx-auto">
			<h2 className="text-[38px] font-bold text-left mb-6 w-[700px]">
				Kho 500+ Templates đẹp, đa lĩnh vực và mục đích sử dụng
			</h2>
			<div className="flex flex-wrap justify-start gap-6 mb-6">
				<div className="p-2">
					<Button color="primary" variant="link">
						Landing page Giáo dục
					</Button>
				</div>
				<div className="p-2">
					<Button color="primary" variant="link">
						Landing page Bán lẻ
					</Button>
				</div>
				<div className="p-2">
					<Button color="primary" variant="link">
						Landing page Bất động sản
					</Button>
				</div>
			</div>
			<div className="flex flex-wrap justify-between gap-2">
				{landingPages.map((page, index) => (
					<Card
						key={index}
						hoverable
						style={{width: 270}}
						bodyStyle={{padding: 10}}
						cover={<img alt={page.title + page.category} src={page.image}/>}
					>
						<Meta title={page.title + " - " + page.category} description={
							<div className="flex justify-between items-center">
								<Tag color="#0066D0">ID: {page.id}</Tag>
								<Button type="link" href={page.link} target="_blank">
									Xem chi tiết tại đây
									<Icon
										icon="fluent-mdl2:go"
										width={15}
										className="pr-1"
									/>
								</Button>
							</div>
						}/>
					</Card>
				))}
			</div>
		</div>
	);
};

export default LandingPageList;
