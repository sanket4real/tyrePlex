import Card from "./Card";
import Slider from "react-slick";

const slides = [
	{ id: 1, name: "MRF", img: "../../src/assets/tyres/mrf.png" },
	{ id: 2, name: "CEAT", img: "../../src/assets/tyres/ceat.png" },
	{ id: 3, name: "GoodYear", img: "../../src/assets/tyres/goodyear.png" },
	{ id: 4, name: "Apollo", img: "../../src/assets/tyres/apollo.png" },
	{ id: 5, name: "Continental", img: "../../src/assets/tyres/continental.png" },
	{ id: 6, name: "Michelin", img: "../../src/assets/tyres/michelin.png" },
];

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	autoplay: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
const TyresDeal = () => {
	return (
		<section className="tyre-deal mt-4 px-4 overflow-hidden">
			<h4 className="font-medium">Deals in</h4>

			<Slider {...settings}>
				{slides.map((slide) => {
					return <Card key={slide.id} name={slide.name} imgUrl={slide.img} />;
				})}
			</Slider>
		</section>
	);
};

export default TyresDeal;
