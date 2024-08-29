import Card from "./Card";
import Slider from "react-slick";

import mrfImage from "../assets/tyres/mrf.png";
import ceatImage from "../assets/tyres/ceat.png";
import goodyearImage from "../assets/tyres/goodyear.png";
import apolloImage from "../assets/tyres/apollo.png";
import continentalImage from "../assets/tyres/continental.png";
import michelinImage from "../assets/tyres/michelin.png";

const slides = [
	{ id: 1, name: "MRF", img: mrfImage },
	{ id: 2, name: "CEAT", img: ceatImage },
	{ id: 3, name: "GoodYear", img: goodyearImage },
	{ id: 4, name: "Apollo", img: apolloImage },
	{ id: 5, name: "Continental", img: continentalImage },
	{ id: 6, name: "Michelin", img: michelinImage },
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
		<section className="tyre-deal mt-4 px-4 overflow-hidden max-w-[1440px] mx-auto">
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
