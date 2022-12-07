import React from "react";
import CollectionsLayout from "../../components/CollectionsLayout/CollectionsLayout.jsx";
import "./MyCollectionsPage.css";

export default function MyCollectionsPage() {
  return (
    <>
      <h1 className="title">Your Artspirations:</h1>
    <div>
      <CollectionsLayout />
    </div>
    </>
  );
}
