import React from "react";
import BannerSection from "@pages/HomePage/components/BannerSection/BannerSection.jsx";
import LandingPageList from "@pages/HomePage/components/LandingPageList/LandingPageList.jsx";
import Benefit from "@pages/HomePage/components/Benefit/benefit.jsx";
import Feature from "@pages/HomePage/components/Feature/feature.jsx";
import ServiceSection from "@pages/ServicePage/service.jsx";
import MarqueeList from "@pages/HomePage/components/Marquee/marquee.jsx";
import FAQSection from "@pages/HomePage/components/Faq/FAQSection.jsx";
import ContactInfoSection from "@pages/HomePage/components/ContactInfo/contactInfoSection.jsx";

const Home = () => {
	return (
		<main className="m-0 mb-[25px] w-full p-0">
			<BannerSection/>
			<MarqueeList/>
			<LandingPageList/>
			<Benefit/>
			<Feature/>
			<ServiceSection/>
			<FAQSection/>
			<ContactInfoSection/>
		</main>
	);
};

export default Home;
