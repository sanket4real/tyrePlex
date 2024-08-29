import { IoShieldCheckmarkOutline } from "react-icons/io5";

const ProductCard = ({
	warranty,
	imgUrl,
	tyreName,
	dimension,
	price,
	offer,
	tyreType,
}) => {
	return (
		<div className="card flex flex-col gap-2 p-4 min-w-0 bg-white border  rounded-lg shadow  border-gray-700 mt-3 relative w-full md:w-[32.4%]">
			<span className="flex items-center gap-2 bg-green-100 text-green-100 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-green-700 absolute right-0 top-0">
				<IoShieldCheckmarkOutline />
				{warranty} Years Warranty
			</span>
			<img className="max-w-32" src={imgUrl} alt="product image" />
			<span className="text-sm">{tyreName}</span>
			<span>{dimension}</span>
			<span>{price}</span>
			<span>{offer}</span>
			<span>{tyreType}</span>
		</div>
	);
};

export default ProductCard;
