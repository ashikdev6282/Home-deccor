import React from "react";

const PropertyCard = ({ property, onNavigate }) => {
  return (
    <div className="listing-card" style={{ gap: "10px", margin: "10px" }}>
      {/* Property Thumbnail */}
      <div className="listing-thumbnail">
        <img
          src={property.image}
          alt={property.title}
          className="listing-image"
        />
        <span className="listing-status">{property.status}</span>
      </div>

      {/* Property Info */}
      <div className="listing-info">
        <h2 className="listing-title">{property.title}</h2>
        <p className="listing-location">{property.location}</p>

        <hr className="listing-divider" />

        {/* Property Features */}
        <div className="listing-features">
          <div className="listing-feature">
            <strong>{property.sqft}</strong> sqft
          </div>
          <div className="listing-feature">
            <strong>{property.beds}</strong> Bed
          </div>
          <div className="listing-feature">
            <strong>{property.baths}</strong> Bath
          </div>
          <div className="listing-feature">
            <strong>{property.kitchen}</strong> Kitchen
          </div>
          <div className="listing-feature">
            <strong>{property.parking}</strong> Parking Lot
          </div>
          <div className="listing-feature">
            <strong>{property.garden}</strong> Garden
          </div>
        </div>

        <hr className="listing-divider" />

        {/* Footer */}
        <div className="listing-footer">
          <span className="listing-price">{property.price}</span>
          <div
            className="listing-action-btn"
            onClick={() => onNavigate(property.id)}
          >
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
