import React, { useState } from 'react';
import './Detail.css';
// import '../Home/Home.css';
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../../Data/Cars.json';

function Detail() {

    const navigate = useNavigate();
    const [dateval, setDateval] = useState(1);
    // const days = 'Day';
    const [fairdisplay, setFairdisplay] = useState('inline-block');
    const [crossdisplay, setCrossdisplay] = useState('none');
    const [popup, setPopup] = useState('60px');
    const [numpopup, setNumpopup] = useState('none')
    const [background, setBackground] = useState('none');
    const [wrap, setWrap] = useState('auto');
    const [numVal, setNumVal] = useState('');
    const { name } = useParams();
    const { category } = useParams();
    const data = Data;
    const tripfair = 9999;
    const damage = 599;
    const coven = 99;

    const cardata = data[category];
    const foundData = cardata.find(car => car.name === name);
    console.log(foundData);

    const eightX = foundData.price * 8;
    let total = (eightX * dateval) + tripfair + damage + coven;

    // const localData = JSON.parse(localStorage.getItem('form'));

    // const date = new Date();
    // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // const month = months[date.getMonth()];

    // let dateNum = 1;
    // let dateS = date.getDate() + " " + month;
    // let dateE = date.getDate() + " " + month;

    // const convertoMilli = (dateString) => {
    //     const [cDate, cMonth] = dateString.split(' ');
    //     const monthIndex = months.indexOf(cMonth)

    //     if (cDate && monthIndex !== -1) {
    //         const currentDate = new Date();
    //         currentDate.setDate(parseInt(cDate, 10));
    //         currentDate.setMonth(monthIndex);
    //         return currentDate.getTime();
    //     }
    //     return 'invalid date'
    // }

    // if (localData) {
    //     const startMilli = convertoMilli(localData.start);
    //     const endMilli = convertoMilli(localData.end);

    //     if (startMilli !== 'invalid date' && endMilli !== 'invalid date') {
    //         const dateDifference = endMilli - startMilli;

    //         // Convert milliseconds to days (86400,000 milliseconds in a day)
    //         const dateDifferenceInDays = Math.abs(dateDifference) / 86400000;
    //         dateNum = dateDifferenceInDays

    //         total = (eightX * dateDifferenceInDays) + tripfair + damage + coven;
    //     }
    // }

    // if (localStorage.length !== 0) {
    //     dateS = localData.start;
    //     dateE = localData.end;
    //     total = (eightX * Math.abs(dateNum)) + tripfair + damage + coven;
    // }

    return (
        <div className='mainDetail'>
            <div className="detailHeader">
                <i className="fas fa-chevron-left text-light fs-4" onClick={()=> navigate(-1)}></i>
            </div>
            <div className="mainImg bg-brand  p-0 rounded-top-0">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button className="indicator-tab active" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                        <button className='indicator-tab' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button className='indicator-tab' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="100">
                            <img src={foundData.mainimg} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src={foundData.mainimg} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item"  data-interval="100">
                            <img src={foundData.mainimg} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="carData container">
                <div className="carDataWrap mt-2">
                    <div className="carTitle fs-3">
                        <p className="carTitleTxt outfit-bold text-capitalize mb-0">{name} <span className="modelTxt text-muted fs-6 fw-bolder">{foundData.year}</span></p>
                        <div className="featDetail d-flex">
                            {
                                foundData.features.map((feat, index) => (
                                    <p key={index} className="featTxt m-0 p-0 text-muted me-2">{feat}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="ratingDiv container">
                <div className="ratingWrap">
                    <p className="ratingTxt text-muted mt-1 outfit-bold mb-0"><span className="ratingSpan text-dark px-1 pe-2 py-1 bg-brand rounded-pill "><i className="fas fa-star text-warning"></i> {foundData.rating}</span> 342 Review . {foundData.trips} Trips</p>
                </div>
            </div>

            <div className="DaysDiv container mt-4">
                <p className="bookingHead outfit-bold mb-0 fs-5">Select Days</p>
                <div className="mb-0 d-flex justify-content-center px-2 align-items-center">
                    <p className="numholder mb-0 text-muted outfit-bold text-uppercase fs-5">{dateval > 1 ? `${dateval} Days` : `${dateval} Day`}</p>
                </div>
                <input type="range" className="form-range" min="1" max="10" value={dateval} onChange={(e)=> setDateval(e.target.value)}  id="customRange2"></input>
            </div>

            {/* <div className="bookingDetail container mt-4">
                <p className="bookingHead outfit-bold mb-0 fs-5">Booking Time</p>
                <div className="bookingWrap mt-1">
                    <div className="bookingCard bg-brand br2 p-3 d-flex justify-content-between align-items-center">
                        <div className="startDateCont text-start">
                            <p className="startTxt text-muted mb-0">Start Date</p>
                            <p className="startDateDate mb-0 outfit-bold">{dateS}</p>
                        </div>
                        <div className="totalDays bg-primary text-white text-center p-0 px-3 rounded-pill ">
                            {
                                dateNum === 0 ? 1 : dateNum
                            } Days
                        </div>
                        <div className="endDateCont text-end">
                            <p className="mb-0 endTxt text-muted">End Date</p>
                            <p className="endDateDate mb-0 outfit-bold">{dateE}</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="aboutCarDiv container mt-4">
                <p className="aboutHead outfit-bold mb-0 fs-5">About the car</p>
                <p className="cardDesc text-secondary mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis, reprehenderit exercitationem obcaecati ipsa sed ut facilis ex voluptate in magni, fugit iste atque placeat!
                </p>
                <div className="carFeatures">
                    <ul className='carFeatUl p-3 bg-light br3 mt-2'>
                        <li className='carFeatLi outfit-semibold fs-4'>Features</li>
                        <li className='carFeatLi outfit-medium'><i className="fas fa-voicemail me-2 brand-color"></i>Voice Control</li>
                        <li className='carFeatLi outfit-medium'><i className="fas fa-music me-2 brand-color"></i>Music System</li>
                        <li className='carFeatLi outfit-medium'><i className="fas fa-gamepad me-2 brand-color"></i>Cruise Control</li>
                        <li className='carFeatLi outfit-medium'><i className="fas fa-mouse me-2 brand-color"></i>Push Button Start</li>
                    </ul>
                </div>
            </div>

            <div className="policyWraper container pb-5">
                <div className="policyWrap">
                    <div className="policyCard bg-brand mb-2 p-3 py-2">
                        <p className="policyCardHead outfit-semibold fs-5 mb-0">
                            <i className="fas fa-user-shield me-2 brand-color"></i>Saftey First
                        </p>
                        <p className="policyTxt text-muted mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis, quidem suscipit nulla dicta dolore.
                        </p>
                    </div>
                    <div className="policyCard bg-brand mb-2 p-3 py-2">
                        <p className="policyCardHead outfit-semibold fs-5 mb-0">
                            <i className="fas fa-user-shield me-2 brand-color"></i>Saftey First
                        </p>
                        <p className="policyTxt text-muted mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis, quidem suscipit nulla dicta dolore.
                        </p>
                    </div>
                    <div className="policyCard bg-brand mb-2 p-3 py-2">
                        <p className="policyCardHead outfit-semibold fs-5 mb-0">
                            <i className="fas fa-user-shield me-2 brand-color"></i>Saftey First
                        </p>
                        <p className="policyTxt text-muted mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis, quidem suscipit nulla dicta dolore.
                        </p>
                    </div>
                </div>
            </div>

            <div className="floatBtnWrap" style={{ backgroundColor: background, height: wrap }}>
                <div className="popupWraper container bg-white py-2">
                    <div className="popup">
                        <div className="popupWrap px-3" style={{ height: popup }}>
                            <p className="actionTxt text-muted mb-0" style={{ display: fairdisplay }}>Tap to see the FAIR Summary</p>
                            <div className="mainPrice mb-0 outfit-bold fs-4 mt-1 d-flex justify-content-betwen align-items-end">₹{total} <span className="mainpriceSpan brand-color text-uppercase outfit-bold ms-auto fs-5" style={{ display: fairdisplay }} onClick={() => {
                                setFairdisplay('none');
                                setCrossdisplay('inline-block');
                                setPopup('60vh');
                                setBackground('rgba(0,0,0,0.3)');
                                setWrap('100vh');
                            }}><i className="fas fa-file-alt me-2"></i>Fair summary</span><span className="crossSpan ms-auto fs-1" style={{ display: crossdisplay }} onClick={() => {
                                setFairdisplay('inline-block');
                                setCrossdisplay('none');
                                setPopup('70px');
                                setBackground('rgba(0,0,0,0)');
                                setWrap('auto');
                            }}>&times;</span></div>
                            <div className="popupTitel bg-light p-2 py-1 outfit-semibold fs-6 mt-2 text-uppercase">Fair Summary</div>
                            <ul className="priceDetails ps-0 mt-2">
                                <li className="priceLi text-muted outfit-regular ls-2  d-flex justify-cotent-between py-2 text-capitalize">Price for eight hours<span className='priceLiSpan ms-auto outfit-bold'>₹{eightX}</span></li>
                                <li className="priceLi text-muted outfit-regular ls-2  d-flex justify-cotent-between py-2">Trip Fair (Unlimited KMs without Fuel) <span className='priceLiSpan ms-auto outfit-bold'>₹9,999</span></li>
                                <li className="priceLi text-muted outfit-regular ls-2  d-flex justify-cotent-between py-2">Damage Protection Fee <span className='priceLiSpan ms-auto outfit-bold'>₹599</span></li>
                                <li className="priceLi text-muted outfit-regular ls-2  d-flex justify-cotent-between py-2">Convenience Fee <span className='priceLiSpan ms-auto outfit-bold'>₹99</span></li>
                                <li className="priceLi text-muted outfit-black ls-2 d-flex justify-cotent-between py-2">Total Fare <span className='priceLiSpan ms-auto outfit-black'>₹{total}</span></li>
                                <li className="priceLi text-muted outfit-regular ls-2  d-flex justify-cotent-between py-2">Resfunable Fee <span className='priceLiSpan ms-auto outfit-bold'>₹0</span></li>
                                <li className="priceLi text-muted outfit-black ls-2 d-flex justify-cotent-between py-2">Final Fare <span className='priceLiSpan ms-auto outfit-black'>₹{total}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="numberInpuPopup container-fluid" style={{display: numpopup}}>
                        <div className="container p-3">
                        <div className="crossSpan ms-auto text-end w-100 fs-1" onClick={() => {
                                setNumpopup('none')
                            }}>&times;</div>
                        <div className="mainPrice mb-1 outfit-bold fs-4 mt-1 d-flex justify-content-betwen align-items-end">Enter your number</div>
                        <div className="inpuWrap rounded-3 d-flex justify-content-between align-items-center border p-2">
                            <div className="91div fs-5">+91</div>
                            <input type="tel" className='numberInpu form-control shadow-none outline-none border-0 p-2 px-3 rounded-3 fs-5' onChange={(e)=> setNumVal(e.target.value)} value={numVal} placeholder='Enter your Number'/>
                        </div>
                        </div>
                    </div>
                    <div className="floatBtn w-100 btn bg-brand2 text-white rounded-3 mb-1 fs-5 text-uppercase outfit-bold mt-2"
                        onClick={()=>{setNumpopup('block')}}
                    >
                        Continue
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;