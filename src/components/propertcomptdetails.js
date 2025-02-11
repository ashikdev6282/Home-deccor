import React from 'react';
import './propertydetails.css';
import PropertyImage from './propertyimage';

const propertyDetails = ({title, price, estPayment, address, summary}) => {
    return (
        <div className="card-section" data-aos="fade-right">
            <div className="property-photo">
                <PropertyImage 
                    imageUrl="https://via.placeholder.com/800x400" 
                    altText="Property Image" 
                    />
            </div>
        <div className='property-details'>
            <h1>{title}</h1>
            <p className='price'>Price: {price}</p>
            {estPayment && <p className='est-payment'>Est. Payment: {estPayment}</p>}
            <p className='address'>📍 {address}</p>
            <div className='summary-details'>
                {summary.map((item, index) => (
                    <div className='detail-item' key={index}>{item}</div>
                ))}
            </div>
        </div> 
    </div>
    )
}
export default propertyDetails;