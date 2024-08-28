import { FaHome } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

const Breadcrumb = () => {
	return (
		<div className="flex max-w-[1440px] mx-auto my-4" aria-label="Breadcrumb">
			<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
				<li className="inline-flex items-center gap-1">
					<a
						href="#"
						className="inline-flex items-center text-sm  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white gap-2">
						<FaHome />
						Home
					</a>
				</li>
				<li>
					<div className="flex items-center">
						<a
							href="#"
							className="inline-flex items-center text-sm  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
							<IoChevronForward />
							Tyre Dealers
						</a>
					</div>
				</li>
				<li>
					<div className="flex items-center">
						<a
							href="#"
							className="inline-flex items-center text-sm  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
							<IoChevronForward />
							Tyre Dealers in Ghaziabad
						</a>
					</div>
				</li>
				<li>
					<div className="flex items-center">
						<a
							href="#"
							className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
							<IoChevronForward />
							SHREE HEMKUNT TYRES AND SERVICES
						</a>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default Breadcrumb;
