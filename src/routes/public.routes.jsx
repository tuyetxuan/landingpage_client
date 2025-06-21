import React, {Suspense} from "react";
import Spinner from "@components/Spinner/spinner.jsx";
import SpinnerSmall from "@components/Spinner/spinnerSmall.jsx";
import Page404 from "@pages/Page404";
import PageError from "@pages/PageError";

const Layout = React.lazy(() => import("@layouts/layoutHome.jsx"));
const Home = React.lazy(() => import("@pages/HomePage/home.jsx"));
const Pricing = React.lazy(() => import("@pages/PricingPage/pricing.jsx"));
const Service = React.lazy(() => import("@pages/ServicePage/service.jsx"));
const UI = React.lazy(() => import("@pages/UIPage/ui.jsx"));
const CollabPage = React.lazy(() => import("@pages/CollabPage/collab.jsx"));
const ContactInfo = React.lazy(() => import("@pages/Contact/ContactInfo.jsx"));
const News = React.lazy(() => import("@pages/News/news.jsx"));
const DetailArticle = React.lazy(() => import("@pages/DetailNews/articleDetail.jsx"));


const ROUTER_PATH = {
	HOME_FIRST: "/",
	HOME_INDEX: "/index",
	HOME: "/trang-chu",
	UI: "/giao-dien",
	PRICING: "/bang-gia",
	SERVICE: "/dich-vu",
	COLLAB: "/hop-tac",
	CATEGORY_NEWS: "/tin-tuc/:category_slug",
	NEWS: "/tin-tuc",
	CONTACT: "/lien-he",
	DETAIL_ARTICLE: "/xem-tin/:slug",
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
				path: ROUTER_PATH.UI,
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
						<UI/>
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
				path: ROUTER_PATH.COLLAB,
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
						<CollabPage/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.CONTACT,
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
						<ContactInfo/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.CATEGORY_NEWS,
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
						<News/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.NEWS,
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
						<News/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.DETAIL_ARTICLE,
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
						<DetailArticle/>
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
