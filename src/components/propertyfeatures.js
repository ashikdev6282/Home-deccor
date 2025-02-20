// PropertyFeatures.js
import React, { useState } from "react";

const PropertyFeatures = ({ features }) => {
  const [featuresOpen, setFeaturesOpen] = useState({});

  const toggleFeature = (feature) => {
    setFeaturesOpen((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };



  return (
    <div className="property-features">
      <h2>Property Features</h2>
      <p>
        Risk management and compliance, when approached strategically, have
        the potential to go beyond mitigating threats.
      </p>
      <div className="accordion">
        {features.map(({ key, title, description }) => (
          <div
            className="accordion-item"
            key={key}
            onClick={() => toggleFeature(key)}
          >
            <h3>{title}</h3>
            {featuresOpen[key] && <p>{description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;
