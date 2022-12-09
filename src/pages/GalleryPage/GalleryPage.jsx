import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./GalleryPage.css";
import BenchFooter from "../../components/BenchFooter/BenchFooter";
import { useState, useEffect, useRef } from "react";
import * as apiService from "../../utilities/artsy-api-service";
import { getUser } from "../../utilities/users-service.js";
import { useNavigate } from "react-router-dom";

export default function GalleryPage() {
  const [artworks, setArtworks] = useState([]);
  const loadingSlides = useRef(false);
  const gotSlides = useRef(false);
  var [isEmptySlide, setIsEmptySlide] = useState(true);
  const navigate = useNavigate();

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
    if (result[0]) {
      setIsEmptySlide(false);
    } else {
      setIsEmptySlide(true);
    }
  }

  async function removeArtworkfromGallery(event) {
    if (currentArtwork) {
      let user = getUser()._id;
      let artwork_id = currentArtwork.artwork_id;
      await apiService.removeGalleryArt(user, artwork_id);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await removeArtworkfromGallery();
    await getGallerySlides();
  }

  async function routeToBrowse() {
    navigate("/home");
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
          !isEmptySlide ? (
            <div style={containerStyles}>
              <ImageSlider
                artworks={artworks}
                setcurrentArtwork={setCurrentArtwork}
              />
            </div>
          ) : (
            <button onClick={routeToBrowse}>Go Browse Art!</button>
          )
        ) : (
          <div>
            <p>Getting ur images</p>
          </div>
        )}
      </div>
      <div className="galleryButtons">
        <form onSubmit={handleSubmit}>
          <button type="submit">Remove From My Gallery</button>
        </form>
      </div>
      {/* <BenchFooter /> */}
    </>
  );
}
