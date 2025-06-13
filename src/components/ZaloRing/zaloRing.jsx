import React from 'react';
import './ZaloRing.scss';

const ZaloRing = () => {
	return (
		<div className="fixed bottom-28 left-4 z-50">
			<div className="relative w-20 h-20">
				<div className="zalo-ring-circle"></div>
				<div className="zalo-ring-circle-fill"></div>
				<div className="zalo-ring-img-circle">
					<a
						target="_blank"
						href="https://zalo.me/0902813f410"
						rel="noopener noreferrer"
					>
						<img
							src="https://dichvulandingpage.com/wp-content/plugins/hotline-va-zalo//img/icon-zalo.png"
							alt="Zalo"
							className="w-5 h-5 mx-auto"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ZaloRing;
