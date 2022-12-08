import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./GalleryPage.css";
import BenchFooter from "../../components/BenchFooter/BenchFooter";
import { useState, useEffect, useRef } from "react";
import * as apiService from "../../utilities/artsy-api-service";
import { getUser } from "../../utilities/users-service.js";

export default function GalleryPage() {
	const [artworks, setArtworks] = useState([]);
	const loadingSlides = useRef(false);
	const gotSlides = useRef(false);

	const containerStyles = {
		width: "500px",
		height: "300px",
		margin: "0 auto",
	};

	var currentArtwork = "";

	const setCurrentArtwork = (artwork) => {
		currentArtwork = artwork;
	};

	async function getGallerySlides() {
		gotSlides.current = false;
		let user = getUser()._id;
		let result = await apiService.getGalleryArt(user);
		setArtworks(result);
		setCurrentArtwork(artworks[0]);
		gotSlides.current = true;
	}

	async function removeArtworkfromGallery(event) {
		if (currentArtwork) {
			let user = getUser()._id;
			let artwork_id = currentArtwork.artwork_id;
			await apiService.removeGalleryArt(user, artwork_id);
		}
	}

	async function handleSubmit(event) {
		await removeArtworkfromGallery();
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
						<ImageSlider
							artworks={artworks}
							setcurrentArtwork={setCurrentArtwork}
						/>
					</div>
				) : (
					<div>
						<p>Getting ur images</p>
					</div>
				)}
			</div>
			<div className="galleryButtons">
				<button onClick={handleSubmit}>Remove From My Gallery</button>
			</div>
			{/* <BenchFooter /> */}
		</>
	);
}
