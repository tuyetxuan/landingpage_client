import React from 'react';
import WebsiteSearch from '@pages/UIPage/components/Search/searchSection.jsx';
import CardUI from '@pages/UIPage/components/Card/cardUi.jsx';

const UI = () => {
	return (
		<div className="max-w-container mx-auto py-15 mt-[100px]">
			<WebsiteSearch/>
			<div className="max-w-container mx-auto py-2 grid grid-cols-4 gap-6">
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<CardUI key={item}/>
				))}
			</div>
		</div>
	);
}

export default UI;
