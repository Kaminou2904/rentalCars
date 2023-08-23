import React, { useState } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import Data from '../../Data/Cars.json';

function Detail() {

    const [fairdisplay, setFairdisplay] = useState('inline-block');
    const [crossdisplay, setCrossdisplay] = useState('none');
    const [popup, setPopup] = useState('60px');
    const [background, setBackground] = useState('none');
    const [wrap, setWrap] = useState('auto');
    const {name} = useParams();
    const {category} = useParams();
    const data = Data;
    const tripfair = 9999;
    const damage = 599;
    const coven = 99;
    
    const cardata = data[category];
    const foundData = cardata.find(car => car.name === name);
    
    const eightX = foundData.price*8;
    const total = eightX + tripfair + damage + coven;

    const dateNum = JSON.parse(localStorage.getItem('form')).end.split(' ')[0] - JSON.parse(localStorage.getItem('form')).start.split(' ')[0];

  return (
    <div className='mainDetail'>
        
        <div className="mainImg container-fluid d-flex justify-content-center align-items-center bg-brand  p-0 rounded-top-0">
            <img src={`.${foundData.img}`} className='img-fluid' alt="car thum" />
        </div>

        <div className="carData container">
            <div className="carDataWrap mt-2">
                <div className="carTitle fs-3">
                    <p className="carTitleTxt urbanist-bold text-capitalize mb-0">{name} <span className="modelTxt text-muted fs-6 fw-bolder">{foundData.year}</span></p>
                    <div className="featDetail d-flex">
                        {
                            foundData.features.map((feat, index)=>(
                                <p key={index} className="featTxt m-0 p-0 text-muted me-2">{feat}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

        <div className="ratingDiv container">
            <div className="ratingWrap">
                <p className="ratingTxt text-muted mt-1 urbanist-bold mb-0"><span className="ratingSpan text-dark px-1 pe-2 py-1 bg-brand rounded-pill "><i className="fas fa-star text-warning"></i> {foundData.rating}</span> 342 Review . {foundData.trips} Trips</p>
            </div>
        </div>

        <div className="bookingDetail container mt-4">
            <p className="bookingHead urbanist-bold mb-0 fs-5">Booking Time</p>
            <div className="bookingWrap mt-1">
                <div className="bookingCard bg-brand br2 p-3 d-flex justify-content-between align-items-center">
                    <div className="startDateCont text-start">
                        <p className="startTxt text-muted mb-0">Start Date</p>
                        <p className="startDateDate mb-0 urbanist-bold">{JSON.parse(localStorage.getItem('form')).start}</p>
                    </div>
                    <div className="totalDays bg-primary text-white text-center p-0 px-3 rounded-pill ">
                        {dateNum} Days
                    </div>
                    <div className="endDateCont text-end">
                        <p className="mb-0 endTxt text-muted">End Date</p>
                        <p className="endDateDate mb-0 urbanist-bold">{JSON.parse(localStorage.getItem('form')).end}</p>
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

        <div className="policyWraper container pb-5">
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

        <div className="floatBtnWrap" style={{backgroundColor: background, height: wrap}}>
            <div className="popupWraper container bg-white py-2">
            <div className="popup">
                <div className="popupWrap px-3" style={{height: popup}}>
                    <p className="actionTxt text-muted mb-0" style={{display: fairdisplay}}>Tap to see the FAIR Summary</p>
                    <div className="mainPrice mb-0 urbanist-bold fs-4 mt-1 d-flex justify-content-betwen align-items-end">₹{total} <span className="mainpriceSpan text-primary text-uppercase urbanist-bold ms-auto fs-5" style={{display: fairdisplay}} onClick={()=> {
                        setFairdisplay('none'); 
                        setCrossdisplay('inline-block'); 
                        setPopup('60vh'); 
                        setBackground('rgba(0,0,0,0.3)');
                        setWrap('100vh');
                    }}><i className="fas fa-file-alt me-2"></i>Fair summary</span><span className="crossSpan ms-auto fs-1" style={{display: crossdisplay}} onClick={()=>{
                        setFairdisplay('inline-block'); 
                        setCrossdisplay('none'); 
                        setPopup('70px'); 
                        setBackground('rgba(0,0,0,0)');
                        setWrap('auto');
                    }}>&times;</span></div>
                    <div className="popupTitel bg-light p-2 py-1 urbanist-semibold fs-6 mt-2 text-uppercase">Fair Summary</div>
                    <ul className="priceDetails ps-0 mt-2">
                      <li className="priceLi text-muted urbanist-regular ls-2  d-flex justify-cotent-between py-2 text-capitalize">Price for eight hours<span className='priceLiSpan ms-auto urbanist-bold'>₹{eightX}</span></li>
                      <li className="priceLi text-muted urbanist-regular ls-2  d-flex justify-cotent-between py-2">Trip Fair (Unlimited KMs without Fuel) <span className='priceLiSpan ms-auto urbanist-bold'>₹9,999</span></li>
                      <li className="priceLi text-muted urbanist-regular ls-2  d-flex justify-cotent-between py-2">Damage Protection Fee <span className='priceLiSpan ms-auto urbanist-bold'>₹599</span></li>
                      <li className="priceLi text-muted urbanist-regular ls-2  d-flex justify-cotent-between py-2">Convenience Fee <span className='priceLiSpan ms-auto urbanist-bold'>₹99</span></li>
                      <li className="priceLi text-muted urbanist-black ls-2 d-flex justify-cotent-between py-2">Total Fare <span className='priceLiSpan ms-auto urbanist-black'>₹{total}</span></li>
                      <li className="priceLi text-muted urbanist-regular ls-2  d-flex justify-cotent-between py-2">Resfunable Fee <span className='priceLiSpan ms-auto urbanist-bold'>₹0</span></li>
                      <li className="priceLi text-muted urbanist-black ls-2 d-flex justify-cotent-between py-2">Final Fare <span className='priceLiSpan ms-auto urbanist-black'>₹{total}</span></li>
                    </ul>
                </div>
            </div>
            <div className="floatBtn w-100 btn btn-primary rounded-3 mb-1 fs-5 text-uppercase urbanist-bold mt-2">
                Continue
            </div>
            </div>
        </div>
    </div>
  )
}

export default Detail;