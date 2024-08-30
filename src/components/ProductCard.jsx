import { IoShieldCheckmarkOutline } from "react-icons/io5";

const ProductCard = ({
	warranty,
	imgUrl,
	tyreName,
	dimension,
	price,
	offer,
	tyreType,
	tyreImg,
}) => {
	return (
		<div className="card flex flex-col gap-2 p-4 pr-20 min-w-0 bg-gray-100 border  rounded-lg  border-gray-700 mt-3 relative w-full sm:w-[48.6%] md:w-[32%]  overflow-hidden hover:shadow-2xl">
			<span className="flex items-center gap-2  text-green-100 text-xs font-medium  px-2.5 py-0.5 rounded bg-green-700 absolute right-0 top-0">
				<IoShieldCheckmarkOutline />
				{warranty} Years Warranty
			</span>
			<img className="max-w-32" src={imgUrl} alt="product image" />
			<span className="text-sm">{tyreName}</span>
			<span className="text-sm">{dimension}</span>
			<span className="text-sm font-medium">{price}</span>
			<span className="text-sm text-green-600 ">{offer}</span>
			<span className="text-sm">{tyreType}</span>
			<span className="absolute bottom-[-60px] right-[-98px]">
				<img src={tyreImg} alt="tyre image" />
			</span>
		</div>
	);
};

export default ProductCard;
