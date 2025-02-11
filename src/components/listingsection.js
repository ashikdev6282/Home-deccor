import React from "react";
import "./listingsection.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "./listingpropcard";
const ModernListingCard = () => {
  const navigate = useNavigate();


  const handleNavigation = (id) => {
    navigate(`/detail/${id}`);
  }
    const[isGridView, SetIsGridView] = useState(true);
  // Demo property data
  const propertyList = [
    {
      id: 1,
      title: "Sunset Villa",
      location: "Palm Beach, Florida",
      sqft: "1450",
      beds: "03",
      baths: "02",
      kitchen: "01",
      parking: "01",
      garden: "01",
      price: "$30,000",
      status: "FOR SALE",
      image: "https://via.placeholder.com/300x250",
    },
    {
      id: 2,
      title: "Ocean Breeze House",
      location: "Santa Monica, California",
      sqft: "1200",
      beds: "02",
      baths: "01",
      kitchen: "01",
      parking: "02",
      garden: "01",
      price: "$25,000",
      status: "FOR RENT",
      image: "https://via.placeholder.com/300x250",
    },
    {
      id: 3,
      title: "Mountain View Cottage",
      location: "Aspen, Colorado",
      sqft: "1100",
      beds: "04",
      baths: "03",
      kitchen: "01",
      parking: "01",
      garden: "02",
      price: "$40,000",
      status: "FOR SALE",
      image: "https://via.placeholder.com/300x250",
    },
    {
      id: 4,
      title: "Greenland Estate",
      location: "Hillside, Texas",
      sqft: "1800",
      beds: "05",
      baths: "04",
      kitchen: "02",
      parking: "03",
      garden: "03",
      price: "$50,000",
      status: "FOR SALE",
      image: "https://via.placeholder.com/300x250",
    },
    {
      id: 5,
      title: "Downtown Apartment",
      location: "New York City, NY",
      sqft: "900",
      beds: "02",
      baths: "01",
      kitchen: "01",
      parking: "01",
      garden: "01",
      price: "$20,000",
      status: "FOR RENT",
      image: "https://via.placeholder.com/300x250",
    },
  ];


useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="listing-page" data-aos="fade-up">
        {/* Header */}
        <div className="listing-header">
          <p className="listing-results">
            Showing <strong>1-5</strong> of <strong>5</strong> results
          </p>
          <div className="listing-sort">
            <label htmlFor="sort-select" className="listing-label">
              Sort by:
            </label>
            <select id="sort-select" className="listing-dropdown">
              <option className="listing-option" value="newest">Newest</option>
              <option className="listing-option" value="price-low">Price: Low to High</option>
              <option className="listing-option" value="price-high">Price: High to Low</option>
            </select>
            <i className="listing-icon fas fa-th"></i>
          </div>
        </div>

        {/* Property Cards */}
        <div className="listing-grid" data-aos="fade-up">
          {propertyList.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onNavigate={handleNavigation}
            />
          ))}
        </div>
      </div>
    <Footer />
    </>
  );
};

export default ModernListingCard;
