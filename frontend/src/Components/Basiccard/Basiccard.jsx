import React from 'react';
import './Basiccard.css';

function Basiccard(props) {
    return (
        <div className="basicCard br2 p-2 ">
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
                    {/* <div className="basicRating">
                        <p className="ratingP text-nowrap d-flex align-items-center text-muted  mb-0 p-0 m-0">
                            <span className="ratingSpan  text-center rounded-pill text-dark outfit-bold me-1 mb-0">
                                <i className="fas fa-star text-warning"></i> {props.rating}
                            </span>
                            {props.trips} Trips
                        </p>
                    </div> */}
                </div>
                <div className="priceWrap d-flex justify-content-between align-items-end mt-0">
                    <p className="listingCardPrice d-flex flex-column mb-0 outfit-bold">
                        8 hrs 80 kms
                        <span className="priceSpan text-muted">Minumum Booking</span>
                    </p>
                    <a href='tel:+91 89280 60714' className='nav-link'><button className='btn bg-brand2 text-white rounded-pill py-0 fs-5'>Ask Price</button></a>
                </div>
            </div>
        </div>
    )
}

export default Basiccard