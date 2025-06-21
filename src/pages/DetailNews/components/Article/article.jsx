import React, {useMemo} from 'react';
import {Avatar, Collapse, List, Tooltip} from 'antd';
import {RightCircleFilled, ShareAltOutlined} from '@ant-design/icons';
import CheckList from '@icons/checklist.png';
import Default_avatar from '@icons/default_avatar.png';
import './article.scss';


const parseHeadings = (content) => {
	if (!content) return [];
	
	const parser = new DOMParser();
	const doc = parser.parseFromString(content, 'text/html');
	const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
	const result = [];
	
	headings.forEach((heading, index) => {
		const tag = heading.tagName.toLowerCase();
		const text = heading.textContent.trim();
		const id = `heading-${index}-${text.toLowerCase().replace(/\s+/g, '-')}`;
		result.push({id, text, level: parseInt(tag.charAt(1))});
	});
	
	return result;
};

const addHeadingIds = (content) => {
	if (!content) return content;
	
	const parser = new DOMParser();
	const doc = parser.parseFromString(content, 'text/html');
	const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
	
	headings.forEach((heading, index) => {
		const text = heading.textContent.trim();
		const id = `heading-${index}-${text.toLowerCase().replace(/\s+/g, '-')}`;
		heading.setAttribute('id', id);
	});
	
	return doc.body.innerHTML;
};

const DetailArticle = ({article}) => {
	const {title, content, thumbnail_url, slug, published_at, category, author, profile_image} = article || {};
	
	const headings = useMemo(() => parseHeadings(content), [content]);
	
	const contentWithIds = useMemo(() => addHeadingIds(content), [content]);
	
	const scrollToHeading = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const yOffset = -140;
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
			window.scrollTo({top: y, behavior: 'smooth'});
		}
	};
	
	return (
		<div className="post_news max-w-container mx-auto px-4 py-6">
			<div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-gray-300">
				<div className="p-2 px-3 rounded-xl bg-blue text-white font-bold">{category?.name || 'Chưa có danh mục'}</div>
				<span className="text-sm text-blue font-bold">
          {published_at
	          ? new Date(new Date(published_at).getTime() + 7 * 60 * 60 * 1000).toLocaleString('vi-VN', {
		          weekday: 'long',
		          day: '2-digit',
		          month: '2-digit',
		          year: 'numeric',
		          hour: '2-digit',
		          minute: '2-digit',
	          })
	          : 'Chưa có ngày xuất bản'}
        </span>
			</div>
			<h1 className="post_news-title text-6xl font-bold leading-tight text-gray-900 pb-4 border-b border-gray-300">
				{title || 'Tiêu đề bài viết chưa được cập nhật'}
			</h1>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 mt-6">
					<Avatar
						size={40}
						src={author?.avatar_url || Default_avatar}
						alt={author?.full_name || 'Tác giả chưa được cập nhật'}
					/>
					<div>
						<div className="flex flex-nowrap items-center gap-1">
							<div className="font-medium text-gray-800">
								{author?.full_name || 'Tác giả chưa được cập nhật'}
							</div>
							<img
								src={CheckList}
								alt={author?.full_name || 'Tác giả chưa được cập nhật'}
								className="w-4"
							/>
						</div>
						<div className="text-xs text-gray-500 uppercase">
							{author?.position == 'manager' ? 'Quản trị viên' : author?.position == 'editor' ? 'Biên tập viên' : 'CCO Media'}
						</div>
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
				<div className="post_news-left border border-transparent rounded-xl h-[calc(700px)] overflow-y-auto">
					<Collapse
						expandIcon={({isActive}) => (
							<RightCircleFilled rotate={isActive ? 90 : 0} style={{color: '#055ebc', fontSize: '20px'}}/>
						)}
						defaultActiveKey={['1']}
						expandIconPosition="end"
					>
						<Collapse.Panel header={<span className="text-[20px] font-semibold">Mục lục bài viết</span>} key="1">
							<List
								dataSource={headings}
								renderItem={(item) => (
									<List.Item className="!px-0 !py-2 border-none">
										<a
											href={`#${item.id}`}
											className="!text-black text-[15px] hover:!text-blue transition-colors"
											style={{paddingLeft: `${(item.level - 1) * 16}px`, cursor: 'pointer'}}
											onClick={(e) => {
												e.preventDefault();
												scrollToHeading(item.id);
											}}
										>
											{item.text}
										</a>
									</List.Item>
								)}
							/>
						</Collapse.Panel>
					</Collapse>
				</div>
				<div className="post_news-main">
					<div dangerouslySetInnerHTML={{__html: contentWithIds || 'Nội dung bài viết chưa được cập nhật'}}/>
				</div>
			</div>
			<div className="post_news-content px-4 grid grid-cols-[1fr_3fr] gap-8">
				<div></div>
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-3 mt-6">
						<Avatar
							size={40}
							src={author?.avatar_url || Default_avatar}
							alt={author?.full_name || 'Tác giả chưa được cập nhật'}
						/>
						<div>
							<div className="flex flex-nowrap items-center gap-1">
								<div className="font-medium text-gray-800">
									{author?.full_name || 'Tác giả chưa được cập nhật'}
								</div>
								<img
									src={CheckList}
									alt={author?.full_name || 'Tác giả chưa được cập nhật'}
									className="w-4"
								/>
							</div>
							<div className="text-xs text-gray-500 uppercase">{author?.position == 'manager' ? 'Quản trị viên' : author?.position == 'editor' ? 'Biên tập viên' : 'CCO Media'}</div>
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
