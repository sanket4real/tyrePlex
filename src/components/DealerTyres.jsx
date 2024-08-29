import Select from "react-select";
import { IoSearchOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import ProductCard from "./ProductCard";
import michelinImage from "../assets/tyres/michelin.png";
import { useState } from "react";

const tyreOptions = [
	{ value: "Apollo", label: "Apollo" },
	{ value: "Bridgestone", label: "Bridgestone" },
	{ value: "BKT", label: "BKT" },
	{ value: "CEAT", label: "CEAT" },
	{ value: "Continental", label: "Continental" },
	{ value: "Michelin", label: "Michelin" },
	{ value: "GoodYear", label: "GoodYear" },
	{ value: "MRF", label: "MRF" },
	{ value: "YOKOHOMA", label: "YOKOHOMA" },
	{ value: "GoodYear", label: "GoodYear" },
	{ value: "JK", label: "JK" },
];

const sortBy = [
	{ value: "mostPopular", label: "Most Popular" },
	{ value: "lowToHigh", label: "Price - Low To High" },
	{ value: "HighToLow", label: "Price - High To Low" },
];
const vehicleType = [
	{ value: "car", label: "Car" },
	{ value: "bike", label: "Bike" },
	{ value: "scooter", label: "Scooter" },
];

const tyres = [
	{
		id: 1,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
	{
		id: 2,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
	{
		id: 3,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
	{
		id: 4,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
	{
		id: 5,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
	{
		id: 6,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
	{
		id: 7,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
	{
		id: 8,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
	{
		id: 9,
		tyreName: "CITY PRO IND",
		imgUrl: michelinImage,
		dimension: "90/90-12",
		price: "₹ 1,525",
		offer: "Offer available",
		tyreType: "Tube Type",
		warranty: 6,
	},
];

const DealerTyres = () => {
	const [visibleCount, setVisibleCount] = useState(6);
	const handleViewMore = () => {
		setVisibleCount((prevCount) => prevCount + 3); // Show 6 more on each click
	};
	return (
		<section className="mt-4 px-4  max-w-[1440px] mx-auto">
			<h4 className="font-medium">Tyres sold by this Dealer</h4>
			<div className="filters-wrapper flex justify-between mt-3 flex-col lg:flex-row gap-2">
				<div className="search-by-vehicle">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only">
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<IoSearchOutline />
						</div>
						<input
							type="search"
							id="default-search"
							className="block w-full px-3 py-2 ps-10 text-sm text-gray-900 border  rounded-lg   border-gray-600 placeholder-gray-400  "
							placeholder="Search By Vehicle no ..."
						/>
					</div>
				</div>
				<div className="flex flex-col md:flex-row dropdown-wrapper gap-2 md:justify-between">
					<Select
						className="tyre-options md:w-[32%] lg:w-auto"
						classNamePrefix="select"
						options={tyreOptions}
						placeholder="Filter By Tyre Brand..."
					/>
					<Select
						className="sort-by md:w-[32%] lg:w-auto lg:min-w-[200px]"
						classNamePrefix="select"
						options={sortBy}
						placeholder="Sort By"
					/>
					<Select
						className="vehicle-type md:w-[32%] lg:w-auto"
						classNamePrefix="select"
						options={vehicleType}
						placeholder="Select Vehicle Type..."
					/>
				</div>
			</div>
			<div className="product-cards-grid mt-3 flex flex-wrap gap-4">
				{tyres.slice(0, visibleCount).map((tyre) => (
					<ProductCard
						key={tyre.id}
						warranty={tyre.warranty}
						imgUrl={tyre.imgUrl}
						dimension={tyre.dimension}
						price={tyre.price}
						tyreName={tyre.tyreName}
						tyreType={tyre.tyreType}
						offer={tyre.offer}
					/>
				))}
			</div>
			{visibleCount < tyres.length && (
				<div className="mt-3 flex justify-center">
					<button
						className="flex items-center gap-2 px-3 py-2 mt-4 w-max text-red  border border-red  focus:ring-4 focus:outline-none   rounded-lg text-sm text-center"
						onClick={handleViewMore}>
						View More <GoChevronDown />
					</button>
				</div>
			)}
		</section>
	);
};

export default DealerTyres;
