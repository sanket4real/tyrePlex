const Card = ({ name, imgUrl }) => {
	return (
		<div className="flex flex-col items-center p-4 min-w-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3 mx-2">
			<img
				className="rounded-xl block h-28 object-contain min-w-28"
				src={imgUrl}
				alt={name}
			/>
			<div className="flex justify-center items-center">
				<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{name}
				</h5>
			</div>
		</div>
	);
};

export default Card;
