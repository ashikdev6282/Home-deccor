import React from "react";
import { useParams } from "react-router-dom";
import PropertyDetailsCard from "./propertydetails"; // Import the detailed property card component
import Navbar from "./navbar";

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

const DetailPage = () => {
  const { id } = useParams();
  const property = propertyList.find((p) => p.id === parseInt(id));

  if (!property) {
    return <h2 className="error-message">Property not found</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="detail-page">
        <PropertyDetailsCard
          title={property.title}
          price={property.price}
          address={property.location}
          estPayment="Calculate with your lender"
          summary={[
            `Size: ${property.sqft} sqft`,
            `Beds: ${property.beds}`,
            `Baths: ${property.baths}`,
            `Kitchen: ${property.kitchen}`,
            `Parking: ${property.parking}`,
            `Garden: ${property.garden}`,
          ]}
          image={property.image}
        />
      </div>
    </>
  );
};

export default DetailPage;
