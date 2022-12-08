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
	const [artworks, setArtworks] = useState([]);
	const loadingSlides = useRef(false);
	const gotSlides = useRef(false);

	const containerStyles = {
		width: "500px",
		height: "300px",
		margin: "0 auto",
	};

	async function getGallerySlides() {
		gotSlides.current = false;
		let user = getUser()._id;
		let result = await apiService.getGalleryArt(user);
		setArtworks(result);
		gotSlides.current = true;
		// use the above to look at the result from the database and format the images in the components below
	}

	async function removeArtworkfromGallery() {
		let user = getUser()._id;
		let artwork_id = "0";
		await apiService.removeGalleryArt(user, artwork_id);
		await getGallerySlides();
	}

	useEffect(() => {
		if (loadingSlides.current) return;
		loadingSlides.current = true;
		getGallerySlides();
	});

	return (
		<>
			<div className="background-wrapper">
				{gotSlides ? (
					<div style={containerStyles}>
						<ImageSlider artworks={artworks} />
					</div>
				) : (
					<div>
						<p>Getting ur images</p>
					</div>
				)}
			</div>
			<div className="galleryButtons">
				<button>Show Similar Art</button>
				<button onClick={removeArtworkfromGallery}>Remove From My Gallery</button>
			</div>
			{/* <BenchFooter /> */}
		</>
	);
}
