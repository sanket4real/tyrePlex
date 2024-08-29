import Card from "./Card";

const services = [
	{
		id: 1,
		name: "Wheel balancing",
		imgUrl: "https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100",
		btnText: "Book Now",
	},
	{
		id: 2,
		name: "Wheel Alignment",
		imgUrl: "https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100",
		btnText: "Book Now",
	},
];

const Services = () => {
	return (
		<section className="mt-4 px-4 overflow-hidden max-w-[1440px] mx-auto">
			<h4 className="font-medium">Services offered by this dealer</h4>
			<div className="flex flex-wrap gap-4 services-card-wrapper mt-4">
				{services.map((service) => (
					<Card
						key={service.id}
						name={service.name}
						imgUrl={service.imgUrl}
						btnText={service.btnText}
					/>
				))}
			</div>
		</section>
	);
};

export default Services;
