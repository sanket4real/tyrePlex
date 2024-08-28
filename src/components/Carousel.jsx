// App.js or Carousel.js
// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div className="carousel-container w-full mx-auto">
			<Slider {...settings}>
				<div>
					<img src="https://placehold.jp/ea1f1f/ffffff/300x300.png" alt="Slide 1" />
				</div>
				<div>
					<img src="https://placehold.jp/ea991f/ffffff/300x300.png" alt="Slide 2" />
				</div>
				<div>
					<img src="https://placehold.jp/e5ea1f/ffffff/300x300.png" alt="Slide 3" />
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
