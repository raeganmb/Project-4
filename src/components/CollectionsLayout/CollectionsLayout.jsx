import React from "react";
import ArtCard from "../ArtCard/ArtCard.jsx";
import "./CollectionsLayout.css"

export default function CollectionsLayout() {
    return (
        <div style={styles.pin_container}>
            <ArtCard size="small" />
            <ArtCard size="medium" />
            <ArtCard size="large" />
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
}