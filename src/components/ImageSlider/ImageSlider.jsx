import { useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ artworks, setcurrentArtwork }) {
	const [index, setIndex] = useState(0);

	setcurrentArtwork(artworks[index]);

	const previousSlide = (e) => {
		const isFirstSlide = index === 0;
		const newIndex = isFirstSlide ? artworks.length - 1 : index - 1;
		setcurrentArtwork(artworks[newIndex]);
		setIndex(newIndex);
	};

	const nextSlide = (e) => {
		const isLastSlide = index === artworks.length - 1;
		const newIndex = isLastSlide ? 0 : index + 1;
		setcurrentArtwork(artworks[newIndex]);
		setIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setcurrentArtwork(artworks[slideIndex]);
		setIndex(slideIndex);
	};

	const slideStyles = {
		width: "100%",
		height: "100%",
		borderRadius: "10px",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundImage:
			artworks.length > 0
				? `url(${artworks[index].image_details.thumbnail.href}`
				: `url(https://imgur.com/gallery/bWtQ9)`,
	};

	return (
		<div className="sliderStyles">
			<div
				className="leftArrow"
				onClick={previousSlide}
			>
				❮
			</div>
			<div
				className="rightArrow"
				onClick={nextSlide}
			>
				❯
			</div>
			<div style={slideStyles}></div>
			<div className="dotContainerStyle">
				{artworks.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						className="dotStyle"
						onClick={() => goToSlide(slideIndex)}
					>
						•
					</div>
				))}
			</div>
		</div>
	);
}
