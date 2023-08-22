import React from 'react';
import './Detail.css';

function Detail() {
  return (
    <div className='mainDetail'>
        
        <div className="mainImg container-fluid d-flex justify-content-center align-items-center bg-brand  p-0 rounded-top-0">
            <img src="./images/carImg2.webp" className='img-fluid' alt="car thum" />
        </div>

        <div className="carData container">
            <div className="carDataWrap mt-2">
                <div className="carTitle fs-3">
                    <p className="carTitleTxt urbanist-bold mb-0">Toyota Fortuner <span className="modelTxt text-muted fs-6 fw-bolder">2018</span></p>
                    <div className="featDetail d-flex">
                        <p className="featTxt m-0 p-0 text-muted me-2">Petrol</p>
                        <p className="featTxt m-0 p-0 text-muted me-2">Manual</p>
                        <p className="featTxt m-0 p-0 text-muted me-2">5 Seater</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="ratingDiv container">
            <div className="ratingWrap">
                <p className="ratingTxt text-muted mt-1 urbanist-bold mb-0"><span className="ratingSpan text-dark px-1 pe-2 py-1 bg-brand rounded-pill "><i className="fas fa-star text-warning"></i> 4.5</span> 342 Review . 398 kms driven</p>
            </div>
        </div>

        <div className="bookingDetail container mt-4">
            <p className="bookingHead urbanist-bold mb-0 fs-5">Booking Time</p>
            <div className="bookingWrap mt-1">
                <div className="bookingCard bg-brand br2 p-3 d-flex justify-content-between align-items-center">
                    <div className="startDateCont text-start">
                        <p className="startTxt text-muted mb-0">Start Date</p>
                        <p className="startDateDate mb-0 urbanist-bold">21 Aug</p>
                    </div>
                    <div className="totalDays bg-primary text-white text-center p-0 px-3 rounded-pill ">
                        3 Days
                    </div>
                    <div className="endDateCont text-end">
                        <p className="mb-0 endTxt text-muted">End Date</p>
                        <p className="endDateDate mb-0 urbanist-bold">23 Aug</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="aboutCarDiv container mt-4">
            <p className="aboutHead urbanist-bold mb-0 fs-5">About the car</p>
            <p className="cardDesc text-secondary mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis, reprehenderit exercitationem obcaecati ipsa sed ut facilis ex voluptate in magni, fugit iste atque placeat!
            </p>
            <div className="carFeatures">
                <ul className='carFeatUl p-3 bg-light br3 mt-2'>
                    <li className='carFeatLi urbanist-semibold fs-4'>Features</li>
                    <li className='carFeatLi urbanist-medium'><i className="fas fa-voicemail me-2 text-primary"></i>Voice Control</li>
                    <li className='carFeatLi urbanist-medium'><i className="fas fa-music me-2 text-primary"></i>Music System</li>
                    <li className='carFeatLi urbanist-medium'><i className="fas fa-gamepad me-2 text-primary"></i>Cruise Control</li>
                    <li className='carFeatLi urbanist-medium'><i className="fas fa-mouse me-2 text-primary"></i>Push Button Start</li>
                </ul>
            </div>
        </div>

        <div className="policyWraper container ">
            <div className="policyWrap">
                <div className="policyCard bg-brand mb-2 p-3 py-2">
                    <p className="policyCardHead urbanist-semibold fs-5 mb-0">
                        <i className="fas fa-user-shield me-2 text-primary"></i>Saftey First
                    </p>
                    <p className="policyTxt text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis, quidem suscipit nulla dicta dolore.
                    </p>
                </div>
                <div className="policyCard bg-brand mb-2 p-3 py-2">
                    <p className="policyCardHead urbanist-semibold fs-5 mb-0">
                        <i className="fas fa-user-shield me-2 text-primary"></i>Saftey First
                    </p>
                    <p className="policyTxt text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis, quidem suscipit nulla dicta dolore.
                    </p>
                </div>
                <div className="policyCard bg-brand mb-2 p-3 py-2">
                    <p className="policyCardHead urbanist-semibold fs-5 mb-0">
                        <i className="fas fa-user-shield me-2 text-primary"></i>Saftey First
                    </p>
                    <p className="policyTxt text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis, quidem suscipit nulla dicta dolore.
                    </p>
                </div>
            </div>
        </div>

        <div className="floatBtnWrap container bg-white py-2">
            <div className="popup">
                <div className="popupWrap">
                    <div className="mainPrice mb-0 urbanist-bold fs-4 mt-1">₹29,999</div>
                    <div className="popupTitel bg-light rounded-3 p-2 py-1 urbanist-semibold fs-5">Fair Summary</div>
                    <ul className="priceDetails ps-0 mt-2">
                      <li className="priceLi text-muted urbanist-regular ls-2 border-bottom border-secondary d-flex justify-cotent-between mt-1">Trip Fair (Unlimited KMs without Fuel) <span className='priceLiSpan ms-auto urbanist-bold'>₹9,999</span></li>
                    </ul>
                </div>
            </div>
            <div className="floatBtn urbanist-light w-100 btn btn-primary rounded-pill fs-4 mt-2">
                Continue
            </div>
        </div>
    </div>
  )
}

export default Detail;