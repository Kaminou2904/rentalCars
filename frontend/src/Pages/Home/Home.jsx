// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import Featurecard from '../../Components/Featurecard/Featurecard';
import Bannercard from '../../Components/Bannercard/Bannercard';
// import Happycard from '../../Components/Happycard/Happycard';
import Listingcard from '../../Components/Listingcard/Listingcard';
import Basiccard from '../../Components/Basiccard/Basiccard';
import Footer from '../../Components/Footer/Footer';
import Data from '../../Data/Cars.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {

    const navigate = useNavigate();
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const [selectedDatee, setSelectedDatee] = useState(new Date());
    // const [showSDate, setShowSDate] = useState(false);
    // const [datepickers, setDatepickers] = useState(false);
    // const [showEDate, setEhowSDate] = useState(false);
    // const [datepickere, setDatepickere] = useState(false);
    // const [activeMainTab, setActiveMainTab] = useState(0);
    const formData = {};
    const [dropTxt, setdropTxt] = useState('Luxury');

    // const startDateClick = () => {
    //     setShowSDate(true);
    //     setDatepickers(true);
    //     setDatepickere(false);
    // }
    // const endDateClick = () => {
    //     setEhowSDate(true);
    //     setDatepickers(false);
    //     setDatepickere(true);
    // }

    // const dateSonchange = (dates) => {
    //     setSelectedDate(dates);
    //     setDatepickers(false);
    // }

    const basicCars = Data.basic;
    const luxuryCars = Data.luxury;
    const sportCars = Data.sports;

    // const dateFormatingFunc = (date) => {
    //     const newDate = new Date(date);
    //     const options = {
    //         day: 'numeric',
    //         month: 'short'
    //     };
    //     const formattedDate = newDate.toLocaleDateString('en-US', options);
    //     const reversedDate = formattedDate.split(' ').reverse().join(" ");
    //     return reversedDate;
    // }


    const searchFunc = () => {
    //     formData.start = dateFormatingFunc(selectedDate);
    //     formData.end = dateFormatingFunc(selectedDatee);
        formData.category = document.querySelector('.DropBtn').innerText.toLowerCase();
    //     formData.location = 'mumbai';
        const StringData = JSON.stringify(formData)
        localStorage.setItem('form', StringData);
        navigate(`${formData.category}`);
    }

    return (
        <div className='main' id='home'>
            <div className="mainHead py-2 pt-3">
                <div className="mainHeadWrap">
                    {/* <h2 className="rentalLogo text-white outfit-black text-center fs-1 mb-0">CaronRent</h2> */}
                    <div className="logoWrap mx-auto my-3">
                        <img src="./images/CARONRENT LOGO.png" className='img-fluid' alt="" />
                    </div>
                    {/* <p className="headerTxt text-center outfit-light">Electric Cars on Rent in India</p> */}
                    <div className="heroMain mt-4">
                        {/* <video autoPlay muted loop playsInline className='img-fluid mt-3'>
                        <source src='./images/Car On Rent Video.m4v'/>
                        </video> */}
                        <div className="hero pt-1 d-flex flex-column justify-content-end align-items-start p-4">
                            {/* <div className="mainTabs container mt-2">
                                <div className="mainTabWrap d-flex justify-content-around align-items-center">
                                    <div className={`mainTab outfit-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 0 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(0)}>Basic</div>
                                    <div className={`mainTab outfit-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 1 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(1)}>Luxury</div>
                                    <div className={`mainTab outfit-bold text-dark bg-white p-2 br1 text-center ${activeMainTab === 2 ? 'activeMainTab' : ''}`} onClick={() => setActiveMainTab(2)}>Sports</div>
                                </div>
                    </div> */}
                            <p className="mb-0 outfit-regular text-white lh-sm px-2">Experience Luxury Driving <br /> in Mumbai with <span className="brand-color outfit-bold">Caronrent.co</span></p>
                            <button className="exploreBtn btn bg-brand2 text-white fs-6 rounded-pill mt-2 px-4 mb-3 mx-2">EXPLORE CARS</button>
                        </div>
                    </div>
                    <div className="form br1 p-0 px-3 mt-0 ">
                        <div className="formWrap">
                            <div className="dateInputs rounded-3 p-2 d-flex justify-content-between align-items-center mt-4">
                                <div className="locaNselWrap d-flex align-items-center justify-content-between">
                                    <div className="locationTab tabs bg-light rounded-3 p-2 px-3">
                                        <p className="locationPara mb-0 outfit-semibold"><i className="fas fa-map-marker-alt text-white me-2"></i>Mumbai</p>
                                    </div>
                                    <div className="dropdown tabs rounded-3">
                                        <button className="DropBtn btn w-100 dropdown-toggle text-white outfit-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {dropTxt}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li className='dropOp outfit-bold px-3' onClick={(e)=> setdropTxt(e.target.innerText)}>Luxury</li>
                                            <li className='dropOp outfit-bold px-3' onClick={(e)=> setdropTxt(e.target.innerText)}>Sports</li>
                                            <li className='dropOp outfit-bold px-3' onClick={(e)=> setdropTxt(e.target.innerText)}>Basic</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="searchIcon px-2" onClick={searchFunc}>
                                    <p className="searchPara mb-0 text-white"><i className="fas fa-search fs-4"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featureDiv container mt-5">
                <p className="featHead mb-0 fs-5 outfit-bold mb-1">
                    Special Offer
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
                <p className="basicCarHead mb-0 fs-4 outfit-bold mb-1 mt-5">
                    Our Sport Cars
                </p>
                <div className="basicCardWraper wraper">
                    <div className="basicCardWrap wrap">
                        {
                            sportCars.map((car) => (
                                <Basiccard key={car.id} category={car.category} img={car.img} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="aboutDiv container mt-5" id="about">
                <p className="aboutHead mb-0 brand-color fs-4 outfit-bold mb-0 pt-2">
                    Welcome to Car On Rent
                </p>
                <p className="aboutTxt mt-2 text-muted mb-0 outfit-semibold">
                    Welcome to CarOnRent.co - Your Premier Luxury Car Rental Service in Mumbai. We specialize in providing top-notch luxury and sports cars for rent, allowing you to elevate your driving experience and make a statement wherever you go. <br /><br />
                    The Ultimate Guide to Luxury Car Rentals in Mumbai
                    Explore the perks of renting a luxury car in Mumbai and how it can transform your driving experience. <br /><br />

                    Top 5 Exotic Cars You Can Rent in Mumbai
                    Showcase the most sought-after exotic cars available for rent, highlighting their features and performance.
                </p>
            </div>

            <div id='cars' className="basicCars container">
                    <p className="basicCarHead mb-0 text-secondary fs-4 outfit-bold mb-1 mt-5">
                        Our Luxury Cars
                    </p>
                    <div className="basicCardWraper wraper">
                        <div className="basicCardWrap wrap">
                            {
                                luxuryCars.map((car) => (
                                    <Basiccard key={car.id} category={car.category} img={car.mainimg} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="listings container">
                    <p className="listingHead mb-0 text-secondary fs-4 outfit-bold mb-1 mt-5">
                        Our Basic Cars
                    </p>
                    <div className="listingWraper">
                        {
                            basicCars.map((car) => (
                                <Listingcard category={car.category} key={car.id} img={car.mainimg} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price} />
                            ))
                        }
                    </div>
                </div>



                <div className="banner container">
                    <p className="bannerHead mb-0 text-secondary fs-4 outfit-bold mb-1 mt-5">
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

            <div className="mainBody pt-1 mt-5 pb-3">
                

                <div className="ourServiceDiv container">
                    <p className="servicesHead mb-5 text-secondary fs-4 outfit-bold mb-1 mt-3 text-center">
                        Discover Our Services
                    </p>
                    <div className="serviceCard text-center mb-4">
                        <div className="serviceImg mx-auto">
                            <img src="https://cdn.pixabay.com/photo/2016/03/10/16/33/icons-1248706_1280.png" className='img-fluid' alt="car icon" />
                        </div>
                        <div className="serviceCardTxt">
                            <p className="serviceCardHead mb-0 fs-5 brand-color outfit-bold mt-2">Luxury Car Rentals</p>
                            <p className="serviceCardPara text-muted mb-0 outfit-regular px-4 mt-2">Cruise the city in style with our exquisite selection of luxury vehicles.</p>
                        </div>
                    </div>
                    <div className="serviceCard text-center mb-4">
                        <div className="serviceImg mx-auto">
                            <img src="https://cdn.pixabay.com/photo/2016/03/10/16/33/icons-1248706_1280.png" className='img-fluid' alt="car icon" />
                        </div>
                        <div className="serviceCardTxt">
                            <p className="serviceCardHead mb-0 fs-5 brand-color outfit-bold mt-2">Sports Cars on Rent</p>
                            <p className="serviceCardPara text-muted mb-0 outfit-regular px-4 mt-2">Feel the thrill of high-performance driving with our range of sports cars.</p>
                        </div>
                    </div>
                    <div className="serviceCard text-center mb-4">
                        <div className="serviceImg mx-auto">
                            <img src="https://cdn.pixabay.com/photo/2016/03/10/16/33/icons-1248706_1280.png" className='img-fluid' alt="car icon" />
                        </div>
                        <div className="serviceCardTxt">
                            <p className="serviceCardHead mb-0 fs-5 brand-color outfit-bold mt-2">Convertible Car Rentals</p>
                            <p className="serviceCardPara text-muted mb-0 outfit-regular px-4 mt-2">Experience open-top driving and enjoy the beauty of Mumbai.</p>
                        </div>
                    </div>
                    <div className="serviceCard text-center mb-4">
                        <div className="serviceImg mx-auto">
                            <img src="https://cdn.pixabay.com/photo/2016/03/10/16/33/icons-1248706_1280.png" className='img-fluid' alt="car icon" />
                        </div>
                        <div className="serviceCardTxt">
                            <p className="serviceCardHead mb-0 fs-5 brand-color outfit-bold mt-2">Luxury Car Rentals with Driver</p>
                            <p className="serviceCardPara text-muted mb-0 outfit-regular px-4 mt-2">Sit back and relax while our professional drivers take the wheel.</p>
                        </div>
                    </div>
                </div>

                <div className="why container">
                    <div className="d-flex align-items-center">
                        <p className="whyHead mb-1 text-secondary fs-4 lh-sm outfit-bold mb-1 mt-5">
                            Why Choose <span className="brand-color outfit-bold">Caronrent.co</span>
                        </p>
                        {/* <div className="whyLogo ms-2">
                            <img src="./images/CARONRENT LOGO.png" className='img-fluid' alt="logo" />
                        </div> */}
                    </div>
                    <div className="whyCardWrap">
                        <div className="whyCard mt-2">
                            <p className="whyCardHead mb-0 outfit-medium fs-5 text-secondary">Extensive Fleet :</p>
                            <p className="whyCardPara">Choose from a wide variety of luxury and sports cars.
                                Seamless Booking: Our user-friendly platform ensures a hassle-free booking experience</p>
                        </div>
                        <div className="whyCard mt-2">
                            <p className="whyCardHead mb-0 outfit-medium fs-5 text-secondary">Competitive Prices :</p>
                            <p className="whyCardPara">Enjoy luxury at affordable rates.
                                Professional Drivers: Experience convenience with our skilled and courteous drivers</p>
                        </div>
                        <div className="whyCard mt-2">
                            <p className="whyCardHead mb-0 outfit-medium fs-5 text-secondary">Flexible Rental Options :</p>
                            <p className="whyCardPara">From hourly to monthly rentals, we cater to your needs.</p>
                        </div>
                    </div>
                </div>

                <div className="faq container">
                    <p className="happyHead mb-0 text-secondary fs-4 outfit-bold mb-1 mt-5 pt-2">
                        FAQs
                    </p>
                    <div className="faqWraper">
                        <div className="faqWrap">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed outfit-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Is there a speed limit?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.</div>
                                    </div>
                                </div>
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed outfit-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Can I extend/ cancle/ modify?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed outfit-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
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

            </div>

            <div className="blogDiv container">
                <p className="happyHead mb-0 text-dark fs-4 outfit-bold mb-1 mt-5">
                    Blog Section :
                </p>
                <p className="blogTxt text-muted outfit-medium mb-0">Check out our latest blog posts for insights into luxury driving, the best driving routes in Mumbai, and tips for choosing the perfect luxury car for your needs.</p>
                <div className="blogWrap">
                    <div className="blogCard mt-4 px-3">
                        <div className="blogImg">
                            <img src="https://cdn.needacar.co.nz/mc-listing/blog/be27a1c0/tipd%20to%20save%20fuel.png?sv=2016-05-31&sr=b&si=default&sig=ijccmat1SKxYuZodFtIZ0BBDiYPghBQ2IwTrAHBPHiI%3D&se=2030-12-04T22%3A24%3A59Z" alt="" className="img-fluid br1" />
                        </div>
                        <div className="blogCardTxt px-2">
                            <p className="blogCardTxtPara outfit-medium mt-2 brand-color">
                                Tips to save fuel:
                                <span className="text-muted outfit-light ms-2">8 Tips to save fuel while Driving...</span>
                            </p>
                        </div>
                    </div>
                    <div className="blogCard mt-4 px-3">
                        <div className="blogImg">
                            <img src="https://cdn.needacar.co.nz/mc-listing/blog/be27a1c0/tipd%20to%20save%20fuel.png?sv=2016-05-31&sr=b&si=default&sig=ijccmat1SKxYuZodFtIZ0BBDiYPghBQ2IwTrAHBPHiI%3D&se=2030-12-04T22%3A24%3A59Z" alt="" className="img-fluid br1" />
                        </div>
                        <div className="blogCardTxt px-2">
                            <p className="blogCardTxtPara outfit-medium mt-2 brand-color">
                                Tips to save fuel:
                                <span className="text-muted outfit-light ms-2">8 Tips to save fuel while Driving...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactDiv container mt-5 px-4 mb-5 pt-2">
                <p className="contactHead mb-0 text-center fs-4 outfit-bold">Get In <span className="brand-color outfit-bold">Touch</span></p>
                <p className="contactTxt text-center">
                    For bookings, inquiries, or assistance, don't hesitate to reach out to our dedicated team. You can email us at <a href="mailto:contact@caronrent.co" className="nav-link brand-color outfit-medium d-inline">contact@caronrent.co</a> or call us at <a href="tel:+919876543210" className="nav-link brand-color outfit-medium d-inline">89280 60714</a>.
                </p>
            </div>

            <Footer disp="flex" />
        </div>
    )
}

export default Home