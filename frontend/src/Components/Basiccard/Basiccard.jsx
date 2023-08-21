import React from 'react';
import './Basiccard.css';
import { Link } from 'react-router-dom';

function Basiccard() {
    return (
        <div className="basicCard br2 p-2 me-2">
            <div className="basicCardImg br2">
                <img src="./images/carImg.webp" alt="" className="img-fluid br2" />
            </div>
            <div className="basicCardData p-2">
                <div className="nameNRating d-flex justify-content-between align-items-start">
                    <div className="basicNameWrap">
                        <Link to='/detail' className='nav-link'><p className="basicName mb-0 ebrima-bold">Toyota Fortuner</p></Link>
                        <div className="basicTabs d-flex">
                            <p className="basicTab mb-0 text-muted me-2">Petrol</p>
                            <p className="basicTab mb-0 text-muted me-2">Manual</p>
                            <p className="basicTab mb-0 text-muted me-2">5 seater</p>
                        </div>
                    </div>
                    <div className="basicRating">
                        <p className="ratingP d-flex align-items-center text-muted ebrima-regular mb-0 p-0 m-0">
                            <span className="ratingSpan  text-center rounded-pill text-dark ebrima-bold me-1 mb-0">
                                <i className="fas fa-star text-warning"></i> 4.5
                            </span>
                            382 Trips
                        </p>
                    </div>
                </div>
                <div className="priceWrap d-flex justify-content-between align-items-end mt-2">
                    <p className="listingCardPrice d-flex flex-column mb-0 ebrima-bold">
                        ₹29,999 /Hour
                        <span className="priceSpan text-muted">8 hrs 80 kms</span>
                    </p>
                    <button className='btn btn-primary rounded-pill py-0'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Basiccard