import React from "react";
import CollectionsLayout from "../../components/CollectionsLayout/CollectionsLayout.jsx";
import "./BrowseArtPage.css";
import { useState, useRef, useEffect } from "react";
import * as apiService from "../../utilities/artsy-api-service";

export default function BrowseArtPage() {
  const [loading, setLoading] = useState(true);
  const [href, setHref] = useState(null);
  const [id, setId] = useState(null);
  const hrefFetchedRef = useRef(false);

  async function getArt() {
    let result = await apiService.randomArt();
    setHref(result[0].image_details.thumbnail.href);
    setLoading(false);
    setId(result[0].id);
    console.log(result);
  }

  async function saveArt(e) {}

  useEffect(() => {
    if (hrefFetchedRef.current) return;
    hrefFetchedRef.current = true;
    getArt();
  }, []);

  return (
    <>
      <div>
        <h1>BrowseArtPage</h1>
        <img src={href} />
      </div>
      <button>Another Art</button>
      <form onSubmit={saveArt}>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
