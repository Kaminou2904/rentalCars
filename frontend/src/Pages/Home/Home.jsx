import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './Home.css';
import Featurecard from '../../Components/Featurecard/Featurecard';
import Bannercard from '../../Components/Bannercard/Bannercard';
import Flexcard from '../../Components/Flexcard/Flexcard';
import Happycard from '../../Components/Happycard/Happycard';
import Listingcard from '../../Components/Listingcard/Listingcard';
import Basiccard from '../../Components/Basiccard/Basiccard';

function Home() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDatee, setSelectedDatee] = useState(new Date());
    const [showSDate, setShowSDate] = useState(false);
    const [datepickers, setDatepickers] = useState(false);
    const [showEDate, setEhowSDate] = useState(false);
    const [datepickere, setDatepickere] = useState(false);
    // const [cityName, setCityName] = useState('');
    const [activeMainTab, setActiveMainTab] = useState(0);

    const startDateClick = ()=>{
        setShowSDate(true);
        setDatepickers(true);
        setDatepickere(false);
    }
    const endDateClick = ()=>{
        setEhowSDate(true);
        setDatepickers(false);
        setDatepickere(true);
    }

    return (
        <div className='main'>
            <div className="mainHead py-2 pt-3">
                <div className="mainHeadWrap container">
                    <h2 className="rentalLogo text-white ebrima-bold text-center fs-1 mb-0">CaronRent</h2>
                    <p className="headerTxt text-center ebrima-regular">Electric Cars on Rent in India</p>
                    <div className="mainTabs">
                        <div className="mainTabWrap d-flex justify-content-around align-items-center mt-4">
                            <div className={`mainTab ebrima-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 0 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(0)}>Basic</div>
                            <div className={`mainTab ebrima-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 1 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(1)}>Premium</div>
                            <div className={`mainTab ebrima-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 2 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(2)}>Luxury</div>
                        </div>
                    </div>

                    <div className="form mt-4 bg-white br1 p-3">
                        <div className="formWrap">
                            {/* <input type="text" className="form-control shadow-none border-bottom border-primary rounded-0 outline-none border-0" placeholder='Enter Your City' value={cityName} onChange={(e)=> setCityName(e.target.value)}/> */}
                            <div className="dateInputs d-flex justify-content-around mt-0">
                                <div className="startDate text-center">
                                    <button className="pickUpDateBtn btn btn-primary mt-2 fs-4 text-nowrap" onClick={startDateClick}>Start Date</button>
                                    {
                                        showSDate && (
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={date => {setSelectedDate(date); setDatepickers(false)}}
                                                minDate={new Date()}
                                                dateFormat="dd/MM/yyyy"
                                                showYearDropdown
                                                scrollableMonthYearDropdown
                                                open={datepickers}
                                                className='startDateInpu mt-2 ebrima-regular p-1 br1 border border-dark text-center'
                                            />
                                        )
                                    }
                                </div>
                                <div className="endDate text-center">
                                    <button className="pickUpDateBtn btn btn-primary mt-2 fs-4 text-nowrap" onClick={endDateClick}>End Date</button>
                                    {
                                        showEDate && (
                                            <DatePicker
                                                selected={selectedDatee}
                                                onChange={date => {setSelectedDatee(date); setDatepickere(false)}}
                                                minDate={new Date()}
                                                dateFormat="dd/MM/yyyy"
                                                showYearDropdown
                                                scrollableMonthYearDropdown
                                                open={datepickere}
                                                className='endDateInpu mt-2 ebrima-regular p-1 br1 border border-dark text-center'
                                            />
                                        )
                                    }
                                </div>
                            </div>
                            <div className="searchBtn text-center mt-3">
                                <button className="searchBtn btn btn-primary rounded-pill text-center fs-4 ebrima-regular w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainBody pt-3 mt-3">
                <div className="featureDiv container">
                    <p className="featHead mb-0 text-secondary fs-4 ebrima-bold mb-1">
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


                <div className="basicCars container">
                    <p className="basicCarHead mb-0 text-secondary fs-4 ebrima-bold mb-1 mt-4">
                        Our Basic Cars
                    </p>
                    <div className="basicCardWraper wraper">
                        <div className="basicCardWrap wrap">
                            <Basiccard/>
                            <Basiccard/>
                            <Basiccard/>
                        </div>
                    </div>
                </div>


                <div className="listings container">
                    <p className="listingHead mb-0 text-secondary fs-4 ebrima-bold mb-1 mt-4">
                        Our Luxury Cars
                    </p>
                    <div className="listingWraper">
                        <Listingcard />
                        <Listingcard />
                        <Listingcard />
                    </div>
                </div>



                <div className="banner container">
                    <p className="bannerHead mb-0 text-secondary fs-4 ebrima-bold mb-1 mt-4">
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
                    <p className="whyHead mb-0 text-secondary fs-4 ebrima-bold mb-1 mt-4">
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
                    <p className="happyHead mb-0 text-secondary fs-4 ebrima-bold mb-1 mt-4">
                        FAQs
                    </p>
                    <div className="faqWraper">
                        <div className="faqWrap">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed ebrima-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Is there a speed limit?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.</div>
                                    </div>
                                </div>
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed ebrima-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Can I extend/ cancle/ modify?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed ebrima-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
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
                    <p className="happyHead mb-0 text-secondary fs-4 ebrima-bold mb-1 mt-4">
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
        </div>
    )
}

export default Home