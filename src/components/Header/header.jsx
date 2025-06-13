import {Icon} from "@iconify/react";
import Logo from "@icons/FAVICON.png";
import {Button} from "antd";
import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import "./header.scss";

const Header = () => {
	const [isFocused, setIsFocused] = useState(false);
	const historySearch = ["Bánh mì", "Pizza", "Cái lò nướng", "Bánh kem"];
	const location = useLocation();
	return (
		<header className="bg-background-primary sticky top-0 z-50 w-full shadow-xl">
			<div className="header max-w-header m-auto">
				<div className="header__logo">
					<a href="/">
						<img src={Logo} alt="Logo" className="w-[100%] cursor-pointer"/>
					</a>
					<p>
						LANGING PAGE
					</p>
				</div>
				<nav className="nav">
					<ul className="nav__list">
						<li className="nav__item">
							<NavLink to="/">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>TRANG CHỦ</span>
								)}
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/giao-dien">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>GIAO DIỆN</span>
								)}
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/bang-gia">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>BẢNG GIÁ</span>
								)}
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/dich-vu">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>DỊCH VỤ</span>
								)}
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/hop-tac">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>HỢP TÁC</span>
								)}
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/tin-tuc">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>TIN TỨC</span>
								)}
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/lien-he">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>LIÊN HỆ</span>
								)}
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className="ml-5 flex items-center gap-2">
					<div className="flex flex-col leading-tight">
						<Button
							variant="solid"
							href="/dang-ky"
							size="large"
							style={{gap: 0, color: "#1781F5", backgroundColor: "#EBEFFF", minHeight: "50px"}}
							icon={
								<Icon
									icon="healthicons:call-centre"
									width={35}
									className="pr-1"
								/>
							}
							className="transition-all duration-300  rounded-full px-4 py-2 hover:border-2 hover:border-blue"
						>
							<p className="text-blue font-bold">Đăng ký tư vấn</p>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
