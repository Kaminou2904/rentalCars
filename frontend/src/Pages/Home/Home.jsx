import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import Featurecard from '../../Components/Featurecard/Featurecard';
import Bannercard from '../../Components/Bannercard/Bannercard';
import Flexcard from '../../Components/Flexcard/Flexcard';
import Happycard from '../../Components/Happycard/Happycard';
import Listingcard from '../../Components/Listingcard/Listingcard';
import Basiccard from '../../Components/Basiccard/Basiccard';
import Footer from '../../Components/Footer/Footer';
import Data from '../../Data/Cars.json';
import { useNavigate } from 'react-router-dom';
function Home() {

    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDatee, setSelectedDatee] = useState(new Date());
    const [showSDate, setShowSDate] = useState(false);
    const [datepickers, setDatepickers] = useState(false);
    const [showEDate, setEhowSDate] = useState(false);
    const [datepickere, setDatepickere] = useState(false);
    const [activeMainTab, setActiveMainTab] = useState(0);
    const formData = {};

    const startDateClick = () => {
        setShowSDate(true);
        setDatepickers(true);
        setDatepickere(false);
    }
    const endDateClick = () => {
        setEhowSDate(true);
        setDatepickers(false);
        setDatepickere(true);
    }

    const dateSonchange = (dates) => {
        setSelectedDate(dates);
        setDatepickers(false);
    }

    const basicCars = Data.basic;
    const luxuryCars = Data.luxury;
    const sportCars = Data.sports;

    const dateFormatingFunc = (date)=>{
        const newDate = new Date(date);
        const options = {
            day: 'numeric', 
            month: 'short'
        };
        const formattedDate = newDate.toLocaleDateString('en-US', options);
        const reversedDate = formattedDate.split(' ').reverse().join(" ");
        return reversedDate;
    }

    
    const searchFunc = ()=>{
        formData.start = dateFormatingFunc(selectedDate);
        formData.end = dateFormatingFunc(selectedDatee);
        formData.category = document.querySelector('.activeMainTab').innerText.toLowerCase();
        formData.location = 'mumbai';
        const StringData = JSON.stringify(formData)
        localStorage.setItem('form', StringData);
        navigate(`${formData.category}`);
    }

    return (
        <div className='main' id='home'>
            <div className="mainHead py-2 pt-3">
                <div className="mainHeadWrap">
                    {/* <h2 className="rentalLogo text-white urbanist-black text-center fs-1 mb-0">CaronRent</h2> */}
                    <div className="logoWrap mx-auto mt-3">
                        <img src="./images/CARONRENT LOGO.png" className='img-fluid' alt="" />
                    </div>
                    {/* <p className="headerTxt text-center urbanist-light">Electric Cars on Rent in India</p> */}
                    <div className="heroMain mt-3">
                    {/* <video autoPlay muted loop playsInline className='img-fluid mt-3'>
                        <source src='./images/Car On Rent Video.m4v'/>
                    </video> */}
                    <div className="hero pt-1">
                    <div className="mainTabs container mt-2">
                        <div className="mainTabWrap d-flex justify-content-around align-items-center">
                            <div className={`mainTab urbanist-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 0 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(0)}>Basic</div>
                            <div className={`mainTab urbanist-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 1 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(1)}>Luxury</div>
                            <div className={`mainTab urbanist-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 2 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(2)}>Sports</div>
                        </div>
                    </div>

                    <div className="form mt-4 br1 p-3">
                        <div className="formWrap">
                            <div className="dateInputs bg-brand2 rounded-3 p-2 d-flex justify-content-between align-items-center mt-5">
                                <div className="locationTab tab mx-0 mb-0">
                                    <p className="locationTabP w-100 py-1 mb-0 btn btn-light text-nowrap"><i className="fas fa-map-marker-alt me-1 brand-color"></i>Mumbai</p>
                                </div>
                                <div className="startDate text-center tab">
                                    {showSDate ? (
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={dateSonchange}
                                                minDate={new Date()}
                                                dateFormat="dd/MM/yyyy"
                                                showYearDropdown
                                                scrollableMonthYearDropdown
                                                className='startDateInpu btn btn-light border-0 rounded-3 mt-2 urbanist-regular fs-6 br1 text-center'
                                                open={datepickers}
                                            />
                                        ): <span className='pickUpDateBtn btn btn-light fs-6 text-nowrap' onClick={startDateClick}>Start Date</span>
                                        }
                                </div>
                                <div className="endDate text-center tab">
                                    {showEDate ? (
                                            <DatePicker
                                                selected={selectedDatee}
                                                onChange={date => {
                                                    setSelectedDatee(date);
                                                    setDatepickere(false)
                                                }}
                                                minDate={new Date()}
                                                dateFormat="dd/MM/yyyy"
                                                showYearDropdown
                                                scrollableMonthYearDropdown
                                                open={datepickere}
                                                className='endDateInpu btn btn-light border-0 rounded-3 mt-2 urbanist-regular fs-6 br1 text-center'
                                            />
                                        ): <span className='pickUpDateBtn btn btn-light fs-6 text-nowrap' onClick={endDateClick}>End Date</span>
                                        }
                                </div>
                            </div>
                            <div className="searchBtn text-center mt-2">
                                <button className="searchBtn btn btn-primary bg-brand2 border-0 rounded-pill text-center fs-4 urbanist-regular w-75" onClick={searchFunc}>Search</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="aboutDiv mt-5" id="about">
                <p className="aboutHead mb-0 text-black fs-4 urbanist-bold mb-0 pt-2 text-center">
                    Welcome to CarOnRent
                </p>
                <p className="aboutTxt text-center lh-sm text-muted px-2 mb-0 urbanist-semibold">
                    Your Destination for Hassle-Free Car Rentals! Explore our wide range of rental cars and hit the road with ease.
                </p>
            </div>

            <div className="mainBody pt-3 mt-5 pb-5">
                <div className="featureDiv container">
                    <p className="featHead mb-0 text-secondary fs-4 urbanist-bold mb-1">
                        Features
                    </p>
                    <div className="featureWraper">
                        <div className="featCardWrap d-flex">
                            <Featurecard />
                            <Featurecard />
                            <Featurecard />
                        </div>
                    </div>
                </div>


                <div id='cars' className="basicCars container">
                    <p className="basicCarHead mb-0 text-secondary fs-4 urbanist-bold mb-1 mt-4">
                        Our Luxury Cars
                    </p>
                    <div className="basicCardWraper wraper">
                        <div className="basicCardWrap wrap">
                            {
                                luxuryCars.map((car)=>(
                                    <Basiccard key={car.id} category={car.category} img={car.img} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price}/>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="basicCars container">
                    <p className="basicCarHead mb-0 text-secondary fs-4 urbanist-bold mb-1 mt-4">
                        Our Sport Cars
                    </p>
                    <div className="basicCardWraper wraper">
                        <div className="basicCardWrap wrap">
                            {
                                sportCars.map((car)=>(
                                    <Basiccard key={car.id} category={car.category} img={car.img} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price}/>
                                ))
                            }
                        </div>
                    </div>
                </div>


                <div className="listings container">
                    <p className="listingHead mb-0 text-secondary fs-4 urbanist-bold mb-1 mt-4">
                        Our Basic Cars
                    </p>
                    <div className="listingWraper">
                        {
                            basicCars.map((car)=>(
                                <Listingcard category={car.category} key={car.id} img={car.img} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price}/>
                            ))
                        }
                    </div>
                </div>



                <div className="banner container">
                    <p className="bannerHead mb-0 text-secondary fs-4 urbanist-bold mb-1 mt-4">
                        Our Loved Ones
                    </p>
                    <div className="bannerWraper">
                        <div className="bannerWrap">
                            <Bannercard />
                            <Bannercard />
                            <Bannercard />
                        </div>
                    </div>
                </div>

                <div className="why container mt-4">
                    <p className="whyHead mb-0 text-secondary fs-4 urbanist-bold mb-1 mt-4">
                        Why Us?
                    </p>
                    <div className="whyWraper">
                        <div className="whyWrap d-flex">
                            <Flexcard />
                            <Flexcard />
                            <Flexcard />
                        </div>
                    </div>
                </div>

                <div className="faq container mt-4">
                    <p className="happyHead mb-0 text-secondary fs-4 urbanist-bold mb-1 mt-4">
                        FAQs
                    </p>
                    <div className="faqWraper">
                        <div className="faqWrap">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed urbanist-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Is there a speed limit?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.</div>
                                    </div>
                                </div>
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed urbanist-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Can I extend/ cancle/ modify?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed urbanist-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Booking criteria and documents?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="happyCustomer container">
                    <p className="happyHead mb-0 text-secondary fs-4 urbanist-bold mb-1 mt-4">
                        Happy Customers
                    </p>
                    <div className="happyWraper wraper">
                        <div className="happyWrap wrap">
                            <Happycard />
                            <Happycard />
                            <Happycard />
                        </div>
                    </div>
                </div>
            </div>
            <Footer disp="flex"/>
        </div>
    )
}

export default Home