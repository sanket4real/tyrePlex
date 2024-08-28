import ReviewCard from "./ReviewCard";

const reviewData = [
	{
		id: "1",
		imgUrl: "https://placehold.jp/ea1f1f/ffffff/150x150.png",
		name: "john doe",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, sint.",
	},
	{
		id: "2",
		imgUrl: "https://placehold.jp/ea1f1f/ffffff/150x150.png",
		name: "jane doe",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, sint. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, sint Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, sint",
	},
	{
		id: "3",
		imgUrl: "https://placehold.jp/ea1f1f/ffffff/150x150.png",
		name: "will smith",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, sint.",
	},
];

const Reviews = ({ reviewCount }) => {
	return (
		<section className="flex flex-col max-w-[1440px] mx-auto mt-4 px-4">
			<h4>{reviewCount} Google Reviews</h4>
			<div className="flex gap-2 w-full flex-wrap">
				{reviewData.map((data) => (
					<ReviewCard
						key={data.id}
						img={data.imgUrl}
						name={data.name}
						description={data.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Reviews;
