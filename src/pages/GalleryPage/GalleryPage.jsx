import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./GalleryPage.css";
import BenchFooter from "../../components/BenchFooter/BenchFooter";
import { useState, useEffect, useRef } from "react";
import * as apiService from "../../utilities/artsy-api-service";
import { getUser } from "../../utilities/users-service.js";

const defaultSlides = [
	{
		url: "https://d32dm0rphc51dk.cloudfront.net/m_l6G2TnBq7tM9TVOHp_Fw/large.jpg",
		title: "Good Pic",
	},
	{
		url: "https://d32dm0rphc51dk.cloudfront.net/MoR7cUheG5Iv4cM1HeR3CQ/large.jpg",
		title: "Great Pic",
	},
	{ url: "https://i.imgur.com/JI8GVlK.jpeg", title: "Best Cat" },
];

export default function GalleryPage() {
	const [slides, setSlides] = useState(defaultSlides);
	const refSlides = useRef(false);

	const containerStyles = {
		width: "500px",
		height: "300px",
		margin: "0 auto",
	};

	async function getGallerySlides() {
		let user = getUser()._id;
		let result = await apiService.getGalleryArt(user);
		console.log(result);
	}

	useEffect(() => {
		if (refSlides.current) return;
		refSlides.current = true;
		getGallerySlides();
	});

	return (
		<>
			<div className="background-wrapper">
				<div style={containerStyles}>
					<ImageSlider slides={slides} />
				</div>
			</div>
			<div className="galleryButtons">
				<button>Show Similar Art</button>
				<button>Remove From My Gallery</button>
			</div>
			<BenchFooter />
		</>
	);
}
