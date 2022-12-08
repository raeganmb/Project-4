import React from "react";
import * as apiService from "../../utilities/artsy-api-service";
import { useState, useEffect, useRef } from "react";
const axios = require("axios");

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [href, setHref] = useState(null);
  const hrefFetchedRef = useRef(false);

  async function getArt() {
    let result = await apiService.randomArt();
    setHref(result[0].image_details.thumbnail.href);
    setLoading(false);
  }

  useEffect(() => {
    if (hrefFetchedRef.current) return;
    hrefFetchedRef.current = true;
    getArt();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      {loading ? <p>loading</p> : <img src={href} />}
    </>
  );
}
