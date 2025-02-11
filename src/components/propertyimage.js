// PropertyImage.js
import React from "react";
import PropTypes from "prop-types";  // for type-checking props

const PropertyImage = ({ imageUrl, altText }) => {
  return (
    <div className="property-photo">
      <img
        src={imageUrl}
        alt={altText}
        className="property-image"
      />
    </div>
  );
};

// Type-checking for props
PropertyImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default PropertyImage;
