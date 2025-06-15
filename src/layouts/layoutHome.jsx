import Footer from "@components/Footer/footer";
import Header from "@components/Header/Header";
import {Outlet} from "react-router-dom";

const Home = () => {
	return (
		<div className="relative">
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	);
};

export default Home;
