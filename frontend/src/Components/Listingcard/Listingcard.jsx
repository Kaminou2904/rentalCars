import React from 'react';
import './Listingcard.css';
import { Link } from 'react-router-dom';

function Listingcard(props) {
    return (
        <div className="listingCard d-flex br2 p-1 mt-2">
            <div className="listingCardImg m-1 me-0">
                <img src={props.img} alt="" className="br2" />
            </div>
            <div className="listingCardData ps-3 py-1">
                <p className="listingCardName mb-0 urbanist-bold text-capitalize">{props.name}</p>
                <div className="ratingDiv">
                    <p className="ratingP d-flex align-items-center text-muted  mb-0 p-0 m-0">
                        <span className="ratingSpan  text-center rounded-pill text-dark urbanist-bold me-1 mb-0">
                            <i className="fas fa-star text-warning"></i> {props.rating}
                        </span>
                        {props.trips} Trips
                    </p>
                </div>
                <p className="listingCardPrice d-flex flex-column mb-0 urbanist-bold">
                    ₹{props.price} /Hour
                    <span className="priceSpan text-muted">8 hrs 80 kms</span>
                </p>
                <Link to={`/${props.category}/${props.name}`} className='nav-link'>
                <button className="listingCardBtn btn btn-primary mt-3 py-1 px-4 ">
                    View Details
                </button>
                </Link>
                <div className="listingTabs d-flex mt-1">
                    {
                        props.features.map((feature, index)=>(
                            <p key={index} className="listingTab mb-0 text-muted me-2">{feature}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Listingcard