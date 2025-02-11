import React from 'react';
import './services.css';

const servicesData = [
    {
        title:"Property Listing",
        description:"We offer comprehensive property listings for buyers, sellers, and renters to find their perfect match.",
        icon: "https://via.placeholder.com/100",
    },
    {
        title:"Consultation",
        description:"Get expert advice from our real estate professionals for buying, selling, or renting properties.",
        icon: "https://via.placeholder.com/100",
    },
    {
        title:"Home Loans",
        description:"Partnering with trusted financial institutions to offer competitive home loan options.",
        icon: "https://via.placeholder.com/100",
    },
    {
        title:"Legal Assistance",
        description:"We provide legal support for property registration, agreements, and documentation.",
        icon: "https://via.placeholder.com/100",
    },
    {
        title:"Property Management",
        description:"Our property management services include tenant placement, maintenance, and rent collection.",
        icon: "https://via.placeholder.com/100",
    }
]

const ServiceCard = ({title, description, icon}) => {
    return(
        <div className='service-card-1'>
            <img src={icon} alt={title} className='service-icon-1' />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

const Services = () => {
    return(
        <section className='services-1'>
            <h2 className='services-title-1'>Our Services</h2>
            <p className='services-subtitle'>
                Explore the range of services we offer to make your property journey seamless.
            </p>
            <div className='services-grid-1'>
            {servicesData.map((service, index) => (
                <div style={{ "--card-index": index }} key={index} className="service-card-1">
                    <img src={service.icon} alt={service.title} className="service-icon-1" />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}

            </div>
        </section>
    )
}
export default Services;


