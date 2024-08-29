import Select from "react-select";
import { IoSearchOutline } from "react-icons/io5";

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

const DealerTyres = () => {
	return (
		<section className="mt-4 px-4  max-w-[1440px] mx-auto">
			<h4 className="font-medium">Tyres sold by this Dealer</h4>
			<div className="filters-wrapper flex justify-between mt-3 flex-col lg:flex-row gap-2">
				<div className="search-by-vehicle">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<IoSearchOutline />
						</div>
						<input
							type="search"
							id="default-search"
							className="block w-full px-3 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
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
						className="sort-by md:w-[32%] lg:w-auto"
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
		</section>
	);
};

export default DealerTyres;
