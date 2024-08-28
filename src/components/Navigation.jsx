import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = {
	tyres: [
		{
			id: "car",
			name: "Car Tyres",
			items: [
				{ name: "MRF" },
				{ name: "CEAT" },
				{ name: "Goodyear" },
				{ name: "Apollo" },
				{ name: "Bridgestone" },
			],
		},
		{
			id: "bike",
			name: "Bike Tyres",
			items: [
				{ name: "MRF" },
				{ name: "CEAT" },
				{ name: "Goodyear" },
				{ name: "Apollo" },
				{ name: "Bridgestone" },
			],
		},
		{
			id: "Tyre Pressure",
			name: "Tyre Pressure",
		},
		{
			id: "Commercial Tyres",
			name: "Commercial Tyres",
		},
		{
			id: "Accessories",
			name: "Accessories",
		},
		{
			id: "More",
			name: "More",
		},
	],
};

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			<nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
						<img
							src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
							className="h-8"
							alt="Logo"
						/>
					</a>
					<div className="flex lg:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<button
							type="button"
							className="flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-red">
							<VscAccount />
							Login
						</button>
						<button
							onClick={toggleMenu}
							data-collapse-toggle="navbar-sticky"
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 hover:text-red"
							aria-controls="navbar-sticky"
							aria-expanded={menuOpen}>
							<span className="sr-only">Open main menu</span>
							<RxHamburgerMenu />
						</button>
					</div>
					<div
						className={`items-center justify-between ${
							menuOpen ? "block" : "hidden"
						} w-full lg:flex lg:w-auto lg:order-1`}
						id="navbar-sticky">
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
							{navItems.tyres.map((navItem) => (
								<li key={navItem.id} className="group">
									<a
										href="#"
										className="block py-2 px-3 text-black rounded md:bg-transparent lg:p-0 hover:text-red">
										{navItem.name}
									</a>

									{navItem.items && (
										<ul className="hidden group-hover:block absolute bg-white border border-gray-200 rounded-lg mt-2">
											{navItem.items.map((item, index) => (
												<li key={index}>
													<a
														href="#"
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
														{item.name}
													</a>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
