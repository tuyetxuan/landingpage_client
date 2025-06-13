import React from 'react';

const Pricing = () => {
	return (
		<section className="py-15 bg-white ">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">Pricing &amp; Plans</h2>
					<p className="mt-4 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
				</div>
				<div className="hidden mt-15 lg:block">
					<table className="w-full">
						<thead>
						<tr>
							<th className="py-8 pr-4"></th>
							
							<th className="px-4 py-8 text-center">
								<span className="text-base font-medium text-blue-600"> Free </span>
								<p className="mt-6 text-6xl font-bold">$0</p>
								<p className="mt-2 text-base font-normal text-gray-500">Per month</p>
							</th>
							
							<th className="px-4 py-8 text-center">
								<span className="text-base font-medium text-blue-600"> Team </span>
								<p className="mt-6 text-6xl font-bold">$99</p>
								<p className="mt-2 text-base font-normal text-gray-500">Per month</p>
							</th>
							
							<th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
								<span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full"> Popular </span>
								<p className="mt-6 text-6xl font-bold text-white">$150</p>
								<p className="mt-2 text-base font-normal text-gray-200">Per month</p>
							</th>
							
							<th className="px-4 py-8 text-center">
								<span className="text-base font-medium text-blue-600"> Enterprise </span>
								<p className="mt-6 text-6xl font-bold">$490</p>
								<p className="mt-2 text-base font-normal text-gray-500">Per month</p>
							</th>
						</tr>
						</thead>
						
						<tbody>
						<tr>
							<td className="py-4 pr-4 font-medium border-b border-gray-200">Website number</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">01</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">10</td>
							
							<td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">50</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
						</tr>
						
						<tr>
							<td className="py-4 pr-4 font-medium border-b border-gray-200">Server storage</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">100 GB</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">500 GB</td>
							
							<td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">1 TB</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
						</tr>
						
						<tr>
							<td className="py-4 pr-4 font-medium border-b border-gray-200">Database</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">15</td>
							
							<td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">Unlimited</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
						</tr>
						
						<tr>
							<td className="py-4 pr-4 font-medium border-b border-gray-200">Unmetered Bandwidth</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
							
							<td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
						</tr>
						
						<tr>
							<td className="py-4 pr-4 font-medium border-b border-gray-200">SSD Disk</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
						</tr>
						
						<tr>
							<td className="py-4 pr-4 font-medium border-b border-gray-200">VCPUS Fontworld</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
						</tr>
						
						<tr>
							<td className="py-4 pr-4 font-medium border-b border-gray-200">WordPress install</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
						</tr>
						
						<tr>
							<td className="py-4 pr-4 font-medium border-b border-gray-200">Server speed</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">-</td>
							
							<td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
							
							<td className="px-4 py-4 text-center border-b border-gray-200">
								<svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
								</svg>
							</td>
						</tr>
						
						<tr>
							<td className="py-6 pr-4"></td>
							
							<td className="px-4 py-6 text-center">
								<a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
									Get Started
									<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
									</svg>
								</a>
							</td>
							
							<td className="px-4 py-6 text-center">
								<a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
									Get Started
									<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
									</svg>
								</a>
							</td>
							
							<td className="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
								<a href="#" title="" className="inline-flex items-center font-semibold text-white">
									Get Started
									<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
									</svg>
								</a>
							</td>
							
							<td className="px-4 py-6 text-center">
								<a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
									Get Started
									<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
									</svg>
								</a>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}
export default Pricing;
