const ReviewCard = ({ img, name, description }) => {
	return (
		<div className="flex flex-col items-center p-4 min-w-0 bg-white border border-gray-200 rounded-lg shadow border-gray-700 mt-3 w-full sm:w-[49%] md:w-[32%]">
			<img
				className="w-24 h-24 mb-3 rounded-full shadow-lg"
				src={img}
				alt={name}
			/>
			<h5 className="mb-1 text-xl font-medium text-black ">{name}</h5>
			<span className="text-sm text-black  line-clamp-3">{description}</span>
		</div>
	);
};

export default ReviewCard;
