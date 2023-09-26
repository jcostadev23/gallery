import React from "react";
import PropTypes from "prop-types";
import "./imagesCard.css"

function ImagesCard({ images }) {
    const listImages = images

    return (
        <div className="img_card">
            {(!listImages.results ? listImages : listImages.results)?.map((img) => (<div className="img" key={img.id}>
                <img alt="profile image" src={img.urls.thumb} />
            </div>))}
        </div>
    )
}
ImagesCard.propTypes = {
    images: PropTypes.object.isRequired
}

export { ImagesCard };
