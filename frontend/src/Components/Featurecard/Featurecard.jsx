import React from 'react';
import './Featurecard.css';

function Featurecard() {
    return (
        <div className="featCard br1 border d-flex flex-column p-2 me-2">
            <div className="cardBodyTxt d-flex align-items-center">
                <div className="cardBodyIcon">
                    <i className="fas fa-tags fs-3 me-2 brand-color" style={{ transform: 'rotate(100deg)' }}></i>
                </div>
                <div className="cardBodyTxt">
                    <p className="mb-0 cardBodyTitle outfit-bold">10% flat off</p>
                    <p className="mb-0 cardBodyDesc text-secondary fs-6 m-0 p-0">On all bookings</p>
                </div>
            </div>
        </div>
    );
};

export default Featurecard;