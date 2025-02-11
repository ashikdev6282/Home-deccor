import React from 'react';
import './propertydetails.css';
import { useState } from 'react';

const ContactModal = ({ agentName, onClose }) => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message && email) {
            console.log(`Message sent to ${agentName}:`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);
            onClose();
            alert('Your message has been sent to the agent!');
        }else {
            alert('Please fill out both fields.');
        }
    }

    return(
        <div className='contact-modal-overlay'>
            <div className='contact-modal'>
                <h3>Contact {agentName}</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Your Email:</label>
                        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Your Message:</label>
                        <textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <button type='submit' style={{backgroundColor:"#ff6b6b"}} className='submit-btn'>Send Message</button>
                </form>
                <button onClick={onClose} className="close-modal-btn">Close</button>
            </div>
        </div>
    )
}
export default ContactModal;
