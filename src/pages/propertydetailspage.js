import React from 'react';
import PropertyDetails from '../components/properties/propertydetails';
import Navbar from '../components/navbar/navbar';

const PropertyDetailsPage = ({ property }) => {
    return (
        <div>
            <Navbar />
            <PropertyDetails property={property} />
        </div>
    );
};  
export default PropertyDetailsPage;
