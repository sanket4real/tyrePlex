import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { RiDirectionLine } from "react-icons/ri";
import Carousel from "./Carousel";

const ShopDetails = () => {
	return (
		<section className="flex flex-col max-w-[1440px] mx-auto mt-4 px-4">
			<div className="flex w-full">
				<h1 className="flex gap-4 mb-4 w-full text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
					SHREE HEMKUNT TYRES AND SERVICES
					<span className="flex items-center text-xs">
						<MdOutlineVerifiedUser /> Verified
					</span>
				</h1>
			</div>
			<div className="flex flex-col sm:flex-row">
				<div className="flex flex-col justify-center sm:w-[50%]">
					<div className="flex items-center gap-2">
						<span className="">
							<IoLocationOutline />
						</span>
						<span className="">
							PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
							INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="">
							<CiClock2 />
						</span>
						<span className="">Open - Monday to Sunday - 10:00AM to 8:00PM</span>
					</div>
					<button
						type="button"
						className="flex items-center gap-2 px-3 py-2 mt-4 w-max text-red hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none   rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 ">
						<RiDirectionLine />
						Get Directions
					</button>
				</div>
				<div className="flex mt-3 sm:w-[40%]">
					<Carousel />
				</div>
			</div>
		</section>
	);
};

export default ShopDetails;
