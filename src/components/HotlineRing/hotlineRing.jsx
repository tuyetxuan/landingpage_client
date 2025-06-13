import React from 'react';
import './HotlineRing.scss';

const HotlineRing = () => {
	return (
		<div className="fixed bottom-4 left-4 z-50">
			<div className="relative w-20 h-20">
				<div className="hotline-phone-ring-circle"></div>
				<div className="hotline-phone-ring-circle-fill"></div>
				<div className="hotline-phone-ring-img-circle">
					<a
						target="_blank"
						href="tel:0902813410"
						rel="noopener noreferrer"
					>
						<img
							src="https://dichvulandingpage.com/wp-content/plugins/hotline-va-zalo//img/icon-call.png"
							alt="Call"
							className="w-5 h-5 mx-auto"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HotlineRing;
