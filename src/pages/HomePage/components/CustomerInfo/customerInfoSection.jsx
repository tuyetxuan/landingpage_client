import React from 'react'
import {Cloud} from 'react-icon-cloud'
import '@pages/HomePage/components/CustomerInfo/customerInfo.scss'

const IconCloud = () => {
	return (
		<div className="max-w-container m-auto py-15 "
		     style={{
			     backgroundImage: 'url(https://mona.media/template/assets/images/tkw-never-stop/h-procedure-blur.png)',
			     backgroundSize: 'cover',
			     backgroundPosition: 'center',
			     backgroundRepeat: 'no-repeat',
		     }}
		>
			<div className="max-w-5xl mx-auto text-center mb-10">
				<h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">KHÁCH HÀNG CỦA CHÚNG TÔI</h2>
				<p className="mt-4 text-lg leading-relaxed text-gray-600">
					Giúp doanh nghiệp bạn phát triển
					và để bạn cùng LÀM ĂN LÂU DÀI với CCOMEDIA.
					Sử dụng chất xám của CCOMEDIA để kiếm được nhiều tiền về cho bạn.
					Triển khai được nhiều phi vụ làm ăn vào đúng định hướng.
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-10 items-center justify-center">
				<div className="w-full md:w-1/2">
					<Cloud options={{
						textColour: null,
						outlineColour: "#ffffff00",
						wheelZoom: false,
						dragControl: false,
						initial: [0.08, -0.08],
						depth: 1.0,
						decel: 0.98,
						reverse: true,
					}}>
						{[
							'logo-khach-hang-ccomedia1',
							'logo-khach-hang-ccomedia3',
							'logo-khach-hang-ccomedia4',
							'logo-khach-hang-ccomedia5',
							'logo-khach-hang-ccomedia6',
							'logo-khach-hang-ccomedia11',
							'logo-khach-hang-ccomedia10',
							'logo-khach-hang-ccomedia9',
							'logo-khach-hang-ccomedia7',
							'logo-khach-hang-ccomedia2',
							'logo-khach-hang-ccomedia1',
							'logo-khach-hang-ccomedia3',
							'logo-khach-hang-ccomedia4',
							'logo-khach-hang-ccomedia5',
							'logo-khach-hang-ccomedia6',
							'logo-khach-hang-ccomedia11',
							'logo-khach-hang-ccomedia10',
							'logo-khach-hang-ccomedia9',
							'logo-khach-hang-ccomedia7',
							'logo-khach-hang-ccomedia2',
						].map((name, i) => (
							<a key={i} href="#">
								<img
									height="250"
									width="250"
									alt="Khách hàng"
									src={`https://dichvulandingpage.com/wp-content/uploads/2022/11/${name}-150x150.png`}
								/>
							</a>
						))}
					</Cloud>
				</div>
			</div>
		</div>
	)
}

export default IconCloud
