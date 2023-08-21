import React from 'react';
import './Listingcard.css';

function Listingcard() {
    return (
        <div className="listingCard d-flex br2 p-1 mt-2">
            <div className="listingCardImg m-1 me-0">
                <img src="./images/carImg.webp" alt="" className="br2" />
            </div>
            <div className="listingCardData ps-3 py-1">
                <p className="listingCardName mb-0 urbnaist-bold">Mercedes E53</p>
                <div className="ratingDiv">
                    <p className="ratingP d-flex align-items-center text-muted  mb-0 p-0 m-0">
                        <span className="ratingSpan  text-center rounded-pill text-dark urbanist-bold me-1 mb-0">
                            <i className="fas fa-star text-warning"></i> 4.5
                        </span>
                        382 Trips
                    </p>
                </div>
                <p className="listingCardPrice d-flex flex-column mb-0 urbanist-bold">
                    ₹29,999 /Hour
                    <span className="priceSpan text-muted">8 hrs 80 kms</span>
                </p>
                <button className="listingCardBtn btn btn-primary mt-3 py-1 px-4 ">
                    View Details
                </button>
                <div className="listingTabs d-flex mt-1">
                    <p className="listingTab mb-0 text-muted me-2">Petrol</p>
                    <p className="listingTab mb-0 text-muted me-2">Menual</p>
                    <p className="listingTab mb-0 text-muted me-2">5 seater</p>
                </div>
            </div>
        </div>
    )
}

export default Listingcard