import React from 'react';
import './Featurecard.css';

function Featurecard() {
    return (
        <div className="featCard br1 bg-white d-flex flex-column p-2 me-2">
            <div className="cardHeadTxt urbanist-bold">
                <span className='headTab rounded-3 bg-secondary text-white p-1 px-3'>3 days</span> rental package
            </div>
            <div className="cardBodyTxt d-flex mt-3 align-items-center">
                <div className="cardBodyIcon">
                    <i className="fas fa-tags fs-1 me-2 text-primary" style={{ transform: 'rotate(100deg)' }}></i>
                </div>
                <div className="cardBodyTxt">
                    <p className="mb-0 cardBodyTitle urbanist-bold text-primary fs-4">10% flat off</p>
                    <p className="mb-0 cardBodyDesc text-secondary fs-6 m-0 p-0">On all bookings</p>
                </div>
            </div>
            <div className="cardLink d-flex align-items-center justify-content-between ps-1 pe-2 mt-2">
                <p className='cardLinkP mb-0 urbanist-bold'><a href="https://www.google.com" className="nav-link urbanist-bold">This is the Link</a></p><i className="fas fa-arrow-right text-primary"></i>
            </div>
        </div>
    );
};

export default Featurecard;