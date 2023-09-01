import React from 'react';
import './Basiccard.css';
import { Link, useNavigate } from 'react-router-dom';

function Basiccard(props) {

    const navigate = useNavigate();

    return (
        <div className="basicCard br2 p-2 me-2" onClick={()=> navigate(`/${props.category}/${props.name}`)}>
            <div className="basicCardImg br2">
                <img src={props.img} alt="" className="img-fluid br2" />
            </div>
            <div className="basicCardData p-2">
                <div className="nameNRating d-flex justify-content-between align-items-start">
                    <div className="basicNameWrap">
                        <p className="basicName text-capitalize mb-0 outfit-bold">{props.name}</p>
                        <div className="basicTabs d-flex">
                            {
                                props.features.map((feature, index)=>(
                                    <p key={index} className="basicTab mb-0 text-muted me-2">{feature}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="basicRating">
                        <p className="ratingP text-nowrap d-flex align-items-center text-muted  mb-0 p-0 m-0">
                            <span className="ratingSpan  text-center rounded-pill text-dark outfit-bold me-1 mb-0">
                                <i className="fas fa-star text-warning"></i> {props.rating}
                            </span>
                            {props.trips} Trips
                        </p>
                    </div>
                </div>
                <div className="priceWrap d-flex justify-content-between align-items-end mt-0">
                    <p className="listingCardPrice d-flex flex-column mb-0 outfit-bold">
                        ₹{props.price} /Hour
                        <span className="priceSpan text-muted">8 hrs 80 kms</span>
                    </p>
                    <Link to={`/${props.category}/${props.name}`} className='nav-link'><button className='btn btn-primary rounded-pill py-0'>View More</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Basiccard