import React from "react";
import CollectionsLayout from "../../components/CollectionsLayout/CollectionsLayout.jsx";
import "./BrowseArtPage.css";
import { useState, useRef, useEffect } from "react";
import * as apiService from "../../utilities/artsy-api-service";
import { getUser } from "../../utilities/users-service.js";
import { useCallback, useReducer } from "react";

export default function BrowseArtPage() {
	const [loading, setLoading] = useState(true);
	const [href, setHref] = useState("");
	const [id, setId] = useState("");
	const hrefFetchedRef = useRef(false);

	async function getArt() {
		let result = await apiService.randomArt();
		setHref(result[0].image_details.thumbnail.href);
		setLoading(false);
		setId(result[0].id);
	}

	async function saveArt(event) {
		event.preventDefault();
		let artwork_id = event.target[0].value;
		let user_id = getUser()._id;
		apiService.saveArt(artwork_id, user_id);
	}

	useEffect(() => {
		if (hrefFetchedRef.current) return;
		hrefFetchedRef.current = true;
		getArt();
	}, []);

	return (
		<>
			<div>
				<h1>Here is your Random Artspiration:</h1>
				{loading ? <p>loading</p> : <img src={href} className="browseImg"/>}
			</div>
			{!loading ? (
				<div>
					<button onClick={getArt}>More Artspiration!</button>
					<form className="formBtn" onSubmit={saveArt}>
						<input
							type="hidden"
							name="artwork_id"
							value={id}
						></input>
						<button
							type="submit"
							onClick={getArt}
						>
							Save to my Gallery
						</button>
					</form>
				</div>
			) : (
				<div>
					<button onClick={getArt}>Random Artspiration</button>
				</div>
			)}
		</>
	);
}
