import React, {Suspense} from "react";
import Spinner from "@components/Spinner/spinner.jsx";
import SpinnerSmall from "@components/Spinner/spinnerSmall.jsx";
import Page404 from "@pages/Page404";
import PageError from "@pages/PageError";

const Layout = React.lazy(() => import("@layouts/layoutHome.jsx"));
const Home = React.lazy(() => import("@pages/HomePage/home.jsx"));
const Pricing = React.lazy(() => import("@pages/PricingPage/pricing.jsx"));
const Service = React.lazy(() => import("@pages/ServicePage/service.jsx"));

const ROUTER_PATH = {
	HOME_FIRST: "/",
	HOME_INDEX: "/index",
	PRICING: "/bang-gia",
	SERVICE: "/dich-vu",
};

const PublicRoutes = [
	{
		path: ROUTER_PATH.HOME_FIRST,
		element: (
			<Suspense fallback={<Spinner/>}>
				<Layout/>
			</Suspense>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Home/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.PRICING,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Pricing/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.SERVICE,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Service/>
					</Suspense>
				),
			},
			{
				path: "*",
				element: <PageError/>,
			},
			{
				path: "*",
				element: <Page404/>,
			},
		],
	},
];

export default PublicRoutes;
